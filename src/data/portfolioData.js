export const portfolioData = {
  personal: {
    name: 'Mohammad Amaan Bhat',
    shortName: 'Amaan',
    title: 'Full Stack Developer',
    tagline: 'Building modern web experiences with performance and polish.',
    status: 'Available for opportunities',
    email: 'amaandev253@gmail.com',
    resumeUrl: 'https://drive.google.com/file/d/1W92YBWz2fOx-TQiiTA_3m7xBg6tl-Icb/view',
    avatar: '/images/me.jpeg',
    bio: 'Full Stack Developer focused on responsive interfaces and robust backend systems.'
  },
  socials: [
    { name: 'GitHub', url: 'https://github.com/Friedayy', icon: 'Github' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/frieday/', icon: 'Linkedin' },
    { name: 'Twitter', url: 'https://x.com/bhatAmaan_', icon: 'Twitter' },
    { name: 'Instagram', url: 'https://www.instagram.com/_bhatamaan_/', icon: 'Instagram' },
    { name: 'Mail', url: 'mailto:amaandev253@gmail.com', icon: 'Mail' }
  ],
  projects: [
    {
      id: 'ledger',
      title: 'Ledger',
      tagline: 'Expense tracking and analytics',
      description: 'Real-time expense tracker to monitor income, expenses, and net balance with clean visual insights.',
      tags: ['React', 'JavaScript', 'CSS', 'Frontend'],
      githubUrl: 'https://github.com/Friedayy/Expense-tracker-ledger',
      demoUrl: 'https://github.com/Friedayy/Expense-tracker-ledger',
      featured: true,
      status: 'DEPLOYED'
    },
    {
      id: 'shophub',
      title: 'ShopHub',
      tagline: 'Modern full-stack e-commerce app',
      description: 'Product listings, cart management, and checkout-focused architecture for a complete shopping flow.',
      tags: ['React', 'Node.js', 'Express', 'MongoDB'],
      githubUrl: 'https://github.com/Friedayy/ecommerce-platform',
      demoUrl: 'https://github.com/Friedayy/ecommerce-platform',
      featured: true,
      status: 'DEPLOYED'
    },
    {
      id: 'react-apps',
      title: 'React Apps',
      tagline: 'Interactive frontend experiments',
      description: 'A growing set of reusable UI components and interactive applications built while exploring modern React.',
      tags: ['React', 'Vite', 'UI', 'JavaScript'],
      githubUrl: 'https://github.com/Friedayy/react-projects',
      demoUrl: 'https://github.com/Friedayy/react-projects',
      featured: false,
      status: 'DEPLOYED'
    }
  ],
  experience: [
    {
      id: 'full-stack-dev',
      role: 'Full Stack Developer',
      company: 'Freelance / Personal Projects',
      period: '2023 — Present',
      description: 'Designing and delivering responsive portfolio-grade and product-focused web experiences.',
      impact: 'Shipped multiple production-ready interfaces with improved UX consistency and deployment automation.',
      technologies: ['React', 'Vite', 'Node.js', 'Express', 'GitHub Actions']
    }
  ],
  skillsCategories: [
    {
      number: '01',
      category: 'Frontend',
      skills: ['React', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'Responsive UI']
    },
    {
      number: '02',
      category: 'Backend',
      skills: ['Node.js', 'Express', 'REST APIs', 'MongoDB', 'SQL']
    },
    {
      number: '03',
      category: 'Tooling',
      skills: ['Git', 'GitHub Actions', 'Vite', 'npm', 'Postman']
    }
  ],
  now: {
    headline: 'Actively shipping and iterating on portfolio systems',
    subline: 'Focused on polishing UX, deployment reliability, and real-time telemetry',
    updatedDate: 'Recently',
    items: [
      {
        topic: 'Portfolio V2 Iteration',
        description: 'Refining component architecture, interaction polish, and accessibility behavior across breakpoints.'
      },
      {
        topic: 'GitHub Telemetry Dashboard',
        description: 'Enhancing live progress insights using GitHub profile, repo, and event data streams.'
      },
      {
        topic: 'CI/CD Reliability',
        description: 'Strengthening deployment confidence with clean build pipelines and production-safe defaults.'
      }
    ]
  }
};
