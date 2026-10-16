import react from '@vitejs/plugin-react';
import { defineConfig, loadEnv } from 'vite';
import fs from 'fs';
import path from 'path';
import nodemailer from 'nodemailer';

// Custom Vite plugin to handle /api/contact natively during development and dispatch emails
const contactApiPlugin = (env) => ({
  name: 'contact-api-plugin',
  configureServer(server) {
    server.middlewares.use('/api/contact', (req, res, next) => {
      const dataDir = path.resolve(process.cwd(), 'data');
      const dataFile = path.join(dataDir, 'messages.json');
      const recipient = env.RECIPIENT_EMAIL || 'amaandev253@gmail.com';

      if (!fs.existsSync(dataDir)) {
        fs.mkdirSync(dataDir, { recursive: true });
      }
      if (!fs.existsSync(dataFile)) {
        fs.writeFileSync(dataFile, JSON.stringify([], null, 2), 'utf-8');
      }

      if (req.method === 'POST') {
        let body = '';
        req.on('data', (chunk) => {
          body += chunk;
        });

        req.on('end', async () => {
          try {
            const data = JSON.parse(body);
            if (!data.email || !data.message) {
              res.statusCode = 400;
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ success: false, error: 'Email and message are required.' }));
              return;
            }

            const submission = {
              id: `msg_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
              name: data.name?.trim() || 'Anonymous',
              email: data.email.trim(),
              message: data.message.trim(),
              receivedAt: new Date().toISOString()
            };

            const existing = JSON.parse(fs.readFileSync(dataFile, 'utf-8'));
            existing.unshift(submission);
            fs.writeFileSync(dataFile, JSON.stringify(existing, null, 2), 'utf-8');

            console.log('\n=============================================');
            console.log('📬 [BACKEND API] NEW CONTACT INQUIRY RECEIVED');
            console.log('---------------------------------------------');
            console.log(`👤 Name:     ${submission.name}`);
            console.log(`📧 Email:    ${submission.email}`);
            console.log(`⏰ Time:     ${submission.receivedAt}`);
            console.log(`💬 Message:  ${submission.message}`);
            console.log('=============================================');

            // Attempt Email Dispatch to recipient inbox
            let emailDelivered = false;
            const emailUser = env.EMAIL_USER;
            const emailPass = env.EMAIL_PASS;
            const web3Key = env.WEB3FORMS_KEY;

            if (emailUser && emailPass) {
              try {
                const transporter = nodemailer.createTransport({
                  service: 'gmail',
                  auth: { user: emailUser, pass: emailPass }
                });

                await transporter.sendMail({
                  from: `"${submission.name}" <${emailUser}>`,
                  replyTo: submission.email,
                  to: recipient,
                  subject: `📬 Portfolio Contact: ${submission.name}`,
                  html: `
                    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e2e8f0; border-radius: 12px; background: #ffffff;">
                      <h2 style="color: #4f46e5; margin-top: 0;">New Contact Inquiry Received</h2>
                      <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 16px 0;" />
                      <p><strong>Name:</strong> ${submission.name}</p>
                      <p><strong>Email:</strong> <a href="mailto:${submission.email}">${submission.email}</a></p>
                      <p><strong>Time:</strong> ${new Date(submission.receivedAt).toLocaleString()}</p>
                      <div style="background: #f8fafc; border-left: 4px solid #4f46e5; padding: 14px 18px; margin: 16px 0; border-radius: 4px;">
                        <p style="margin: 0; white-space: pre-wrap; font-size: 15px; color: #1e293b;">${submission.message}</p>
                      </div>
                      <p style="margin-top: 24px; font-size: 12px; color: #94a3b8;">Reply directly to this email to respond to ${submission.name}.</p>
                    </div>
                  `
                });
                console.log(`✉️ [EMAIL FORWARDED] Sent directly to ${recipient}`);
                emailDelivered = true;
              } catch (mailErr) {
                console.error('⚠️ [SMTP SEND ERROR]:', mailErr.message);
              }
            } else if (web3Key) {
              try {
                const web3Res = await fetch('https://api.web3forms.com/submit', {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify({
                    access_key: web3Key,
                    name: submission.name,
                    email: submission.email,
                    message: submission.message,
                    subject: `Portfolio Contact from ${submission.name}`
                  })
                });
                const web3Data = await web3Res.json();
                if (web3Data.success) {
                  console.log(`✉️ [EMAIL FORWARDED via Web3Forms] Sent directly to ${recipient}`);
                  emailDelivered = true;
                }
              } catch (web3Err) {
                console.error('⚠️ [WEB3FORMS SEND ERROR]:', web3Err.message);
              }
            } else {
              console.log(`ℹ️ [INBOX NOTIFICATION]: To forward this email to ${recipient}, enter your Gmail App Password in .env`);
            }

            res.statusCode = 201;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({
              success: true,
              message: emailDelivered 
                ? 'Your message has been delivered to Amaan\'s email box!' 
                : 'Your message has been received! Amaan will get back to you soon.',
              id: submission.id,
              emailDelivered
            }));
          } catch (err) {
            res.statusCode = 500;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({ success: false, error: 'Invalid JSON payload' }));
          }
        });
        return;
      }

      if (req.method === 'GET') {
        const existing = JSON.parse(fs.readFileSync(dataFile, 'utf-8'));
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({ count: existing.length, messages: existing }));
        return;
      }

      next();
    });
  }
});

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [react(), contactApiPlugin(env)],
    server: {
      port: 5173
    }
  };
});
