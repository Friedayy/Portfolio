import express from 'express';
import cors from 'cors';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

// Load environment variables from .env
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;
const DATA_FILE = path.join(__dirname, 'data', 'messages.json');
const RECIPIENT_EMAIL = process.env.RECIPIENT_EMAIL || 'amaandev253@gmail.com';

// Ensure data directory and messages.json file exist
if (!fs.existsSync(path.join(__dirname, 'data'))) {
  fs.mkdirSync(path.join(__dirname, 'data'), { recursive: true });
}
if (!fs.existsSync(DATA_FILE)) {
  fs.writeFileSync(DATA_FILE, JSON.stringify([], null, 2), 'utf-8');
}

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Helper to read messages
const readMessages = () => {
  try {
    const raw = fs.readFileSync(DATA_FILE, 'utf-8');
    return JSON.parse(raw);
  } catch (err) {
    console.error('Error reading messages file:', err);
    return [];
  }
};

// Helper to save message
const saveMessage = (newMessage) => {
  try {
    const messages = readMessages();
    messages.unshift(newMessage);
    fs.writeFileSync(DATA_FILE, JSON.stringify(messages, null, 2), 'utf-8');
    return true;
  } catch (err) {
    console.error('Error saving message:', err);
    return false;
  }
};

// Dispatch Email Notification to Inbox
const sendEmailToInbox = async (submission) => {
  const emailUser = process.env.EMAIL_USER;
  const emailPass = process.env.EMAIL_PASS;
  const web3Key = process.env.WEB3FORMS_KEY;

  // 1. Gmail / SMTP Dispatch (if EMAIL_PASS is provided in .env)
  if (emailUser && emailPass) {
    try {
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: emailUser,
          pass: emailPass
        }
      });

      const mailOptions = {
        from: `"${submission.name}" <${emailUser}>`,
        replyTo: submission.email,
        to: RECIPIENT_EMAIL,
        subject: `📬 New Portfolio Contact from ${submission.name}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e2e8f0; border-radius: 12px; background: #ffffff;">
            <h2 style="color: #4f46e5; margin-top: 0;">New Contact Inquiry Received</h2>
            <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 16px 0;" />
            <p style="font-size: 15px; color: #334155;"><strong>Sender Name:</strong> ${submission.name}</p>
            <p style="font-size: 15px; color: #334155;"><strong>Email Address:</strong> <a href="mailto:${submission.email}" style="color: #4f46e5;">${submission.email}</a></p>
            <p style="font-size: 13px; color: #64748b;"><strong>Timestamp:</strong> ${new Date(submission.receivedAt).toLocaleString()}</p>
            <div style="background: #f8fafc; border-left: 4px solid #4f46e5; padding: 16px; margin: 20px 0; border-radius: 6px;">
              <p style="margin: 0; white-space: pre-wrap; font-size: 15px; color: #0f172a; line-height: 1.6;">${submission.message}</p>
            </div>
            <p style="margin-top: 24px; font-size: 12px; color: #94a3b8;">
              💡 Reply directly to this email to respond to ${submission.name}.
            </p>
          </div>
        `
      };

      const info = await transporter.sendMail(mailOptions);
      console.log(`✉️ [EMAIL DELIVERED] Forwarded to inbox: ${RECIPIENT_EMAIL} (ID: ${info.messageId})`);
      return { delivered: true, method: 'gmail-smtp' };
    } catch (smtpErr) {
      console.error('⚠️ [SMTP SEND ERROR]:', smtpErr.message);
    }
  }

  // 2. Web3Forms Dispatch (if WEB3FORMS_KEY is set in .env)
  if (web3Key) {
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: web3Key,
          name: submission.name,
          email: submission.email,
          message: submission.message,
          subject: `Portfolio Inquiry from ${submission.name}`
        })
      });
      const data = await res.json();
      if (data.success) {
        console.log(`✉️ [EMAIL DELIVERED via Web3Forms] Forwarded to inbox: ${RECIPIENT_EMAIL}`);
        return { delivered: true, method: 'web3forms' };
      }
    } catch (apiErr) {
      console.error('⚠️ [WEB3FORMS SEND ERROR]:', apiErr.message);
    }
  }

  console.log(`ℹ️ [ACTION NEEDED FOR INBOX DELIVERY]:`);
  console.log(`   To forward this message to ${RECIPIENT_EMAIL}, add your 16-character Gmail App Password to EMAIL_PASS in .env`);
  console.log(`   (Get it in 1 minute from https://myaccount.google.com/apppasswords)\n`);
  return { delivered: false };
};

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    uptime: process.uptime(),
    timestamp: new Date().toISOString()
  });
});

// GET /api/contact - View all received contact inquiries
app.get('/api/contact', (req, res) => {
  const messages = readMessages();
  res.json({
    count: messages.length,
    messages
  });
});

// POST /api/contact - Receive new contact form submissions
app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;

  if (!email || !message) {
    return res.status(400).json({
      success: false,
      error: 'Email and message are required fields.'
    });
  }

  // Create submission record
  const submission = {
    id: `msg_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
    name: name?.trim() || 'Anonymous',
    email: email.trim(),
    message: message.trim(),
    receivedAt: new Date().toISOString(),
    ip: req.headers['x-forwarded-for'] || req.socket.remoteAddress
  };

  // 1. Save to database/JSON file
  const saved = saveMessage(submission);

  // 2. Terminal logging with clean formatting
  console.log('\n=============================================');
  console.log('📬 NEW CONTACT INQUIRY RECEIVED');
  console.log('---------------------------------------------');
  console.log(`👤 Name:     ${submission.name}`);
  console.log(`📧 Email:    ${submission.email}`);
  console.log(`⏰ Time:     ${submission.receivedAt}`);
  console.log(`💬 Message:  ${submission.message}`);
  console.log('=============================================');

  // 3. Dispatch to inbox via email
  const emailResult = await sendEmailToInbox(submission);

  if (!saved) {
    return res.status(500).json({
      success: false,
      error: 'Failed to save message to disk.'
    });
  }

  return res.status(201).json({
    success: true,
    message: emailResult.delivered 
      ? 'Your message has been delivered to Amaan\'s inbox!' 
      : 'Your message has been received! Amaan will get back to you soon.',
    id: submission.id,
    emailDelivered: emailResult.delivered
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Contact Backend Server running on http://localhost:${PORT}`);
  console.log(`📝 Listening for contact submissions on POST http://localhost:${PORT}/api/contact`);
  console.log(`📂 Storing incoming messages in ${DATA_FILE}`);
  console.log(`📫 Forwarding destination: ${RECIPIENT_EMAIL}`);
});
