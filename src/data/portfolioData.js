export const portfolioData = {
  personal: {
    name: "Mohammad Amaan Bhat",
    shortName: "Amaan",
    title: "Full Stack Developer",
    status: "Available for opportunities",
    tagline: "Building production-ready web apps, scalable APIs, and seamless digital experiences.",
    avatar: "/images/me.jpeg",
    avatarSvg: "/images/profile-avatar.svg",
    resumeUrl: "https://drive.google.com/file/d/1FuFrUILh1HFzxJORaU8HPZJmkfM0q5oJ/view?usp=sharing",
    location: "Ramapuram, Chennai / Srinagar, India",
    email: "amaandev253@gmail.com",
    phone: "+91 8899099755",
    bio: "I am a passionate Full Stack Developer with 2+ years of hands-on experience building modern, responsive, and performance-focused web applications. Proficient in both frontend architecture and robust backend systems."
  },

  stats: [
    { number: "2+", label: "Years Exp" },
    { number: "10+", label: "Projects Shipped" },
    { number: "100%", label: "Committed" },
    { number: "24/7", label: "Fast Learner" }
  ],

  socials: [
    {
      name: "GitHub",
      url: "https://github.com/Friedayy",
      icon: "Github"
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/frieday/",
      icon: "Linkedin"
    },
    {
      name: "X (Twitter)",
      url: "https://x.com/bhatAmaan_",
      icon: "Twitter"
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/_bhatamaan_/",
      icon: "Instagram"
    },
    {
      name: "Email",
      url: "mailto:amaandev253@gmail.com",
      icon: "Mail"
    }
  ],

  experience: [
    {
      id: "exp-1",
      period: "2024 – PRESENT",
      role: "Full Stack Developer",
      company: "Independent & Open Source",
      description: "Architecting and shipping responsive web applications, custom component libraries, and RESTful microservices. Implementing modern frontend patterns with React and stateful backend workflows.",
      impact: "Delivered 10+ web solutions with optimized Core Web Vitals, accessible UI components, and integrated third-party APIs.",
      technologies: ["React.js", "Node.js", "Express", "MongoDB", "Tailwind CSS", "REST APIs"]
    },
    {
      id: "exp-2",
      period: "2023 – 2024",
      role: "Frontend Engineer (Projects & Collabs)",
      company: "Freelance",
      description: "Designed and developed customer-facing web interfaces, dashboards, and responsive landing pages with high visual fidelity and cross-browser reliability.",
      impact: "Reduced page load speeds by 40% using lazy loading, modern asset delivery, and modular CSS architecture.",
      technologies: ["JavaScript (ES6+)", "HTML5", "CSS3", "React", "Git"]
    }
  ],

  skillsCategories: [
    {
      number: "01",
      category: "Frontend",
      skills: [
        "React.js",
        "Next.js",
        "JavaScript (ES6+)",
        "TypeScript",
        "HTML5",
        "CSS3 / Vanilla CSS",
        "Tailwind CSS",
        "State Management",
        "Responsive UI/UX"
      ]
    },
    {
      number: "02",
      category: "Backend",
      skills: [
        "Node.js",
        "Express.js",
        "RESTful APIs",
        "MongoDB",
        "SQL / MySQL",
        "Python",
        "Authentication / JWT",
        "API Integration"
      ]
    },
    {
      number: "03",
      category: "DevOps & Tools",
      skills: [
        "Git & GitHub",
        "Docker",
        "Postman",
        "Linux CLI",
        "Vite",
        "Vercel Deployment",
        "Chrome DevTools",
        "VS Code"
      ]
    }
  ],

  projects: [
    {
      id: "ledger",
      title: "Ledger — Expense Tracker",
      tagline: "Track total balance, income, and expenses with real-time analytics",
      description: "A full-stack personal finance and ledger platform featuring real-time balance calculations, category-based transaction tracking, data visualization, and secure user data persistence.",
      status: "DEPLOYED",
      featured: true,
      githubUrl: "https://github.com/Friedayy/Expense-tracker-ledger.git",
      demoUrl: "https://github.com/Friedayy/Expense-tracker-ledger.git",
      tags: ["React.js", "Node.js", "Express", "MongoDB", "Chart.js"],
      difficulty: "Advanced",
      impact: "Real-time personal finance management"
    },
    {
      id: "shophub",
      title: "ShopHub — E-Commerce Platform",
      tagline: "Full-featured e-commerce storefront with cart & checkout flow",
      description: "A modern online shopping experience with product catalog filtering, dynamic cart drawers, persistent checkout state, and fluid responsive design optimized for mobile & desktop.",
      status: "DEPLOYED",
      featured: true,
      githubUrl: "https://github.com/Friedayy/ecommerce-platform",
      demoUrl: "https://github.com/Friedayy/ecommerce-platform",
      tags: ["React", "JavaScript", "REST API", "CSS Modules", "Vite"],
      difficulty: "Advanced",
      impact: "High conversion eCommerce interface"
    },
    {
      id: "react-apps",
      title: "Interactive React UI Suite",
      tagline: "Modern frontend applications & interactive UI components",
      description: "A curated collection of production-grade micro-applications showcasing advanced hooks, reusable component patterns, theme switching, and smooth micro-interactions.",
      status: "DEPLOYED",
      featured: false,
      githubUrl: "https://github.com/Friedayy/react-projects",
      demoUrl: "https://github.com/Friedayy/react-projects",
      tags: ["React", "Custom Hooks", "State Management", "Tailwind/CSS"],
      difficulty: "Intermediate",
      impact: "Reusable component architecture"
    }
  ],

  now: {
    headline: "What I'm doing now",
    subline: "Current focus areas, what I'm shipping, and technologies I'm actively exploring.",
    updatedDate: "October 2026",
    items: [
      {
        topic: "Full-Stack Scalability & Architecture",
        description: "Deepening my knowledge of distributed system design, API caching, database indexing, and microservice architecture to build production-grade web systems."
      },
      {
        topic: "Modern React 19 & Next.js",
        description: "Leveraging Server Actions, streaming SSR, and optimistic UI updates to achieve sub-second page transitions and minimal client bundles."
      },
      {
        topic: "Agentic AI & Engineering Workflows",
        description: "Exploring agentic automation, AI tool-calling integrations, and pair-programming workflows to accelerate development velocity while upholding architectural discipline."
      }
    ]
  }
};
