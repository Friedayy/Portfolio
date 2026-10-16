export const portfolioData = {
  personal: {
    name: 'Mohammad Amaan Bhat',
    shortName: 'Amaan',
    title: 'Full Stack Developer',
    status: 'Available for opportunities',
    tagline: 'Building performant web experiences with modern frontend and backend stacks.',
    resumeUrl: 'https://drive.google.com/file/d/1Wb4IggcHfXjV-Jx6f9QyA7f0w_bzwq2J/view',
    email: 'amaandev253@gmail.com',
    avatar: '/images/me.jpeg',
    bio: 'Full Stack Developer passionate about building modern web applications.'
  },
  socials: [
    { name: 'GitHub', icon: 'Github', url: 'https://github.com/Friedayy' },
    { name: 'LinkedIn', icon: 'Linkedin', url: 'https://www.linkedin.com/in/frieday/' },
    { name: 'Twitter', icon: 'Twitter', url: 'https://x.com/bhatAmaan_' },
    { name: 'Instagram', icon: 'Instagram', url: 'https://www.instagram.com/_bhatamaan_/' },
    { name: 'Email', icon: 'Mail', url: 'mailto:amaandev253@gmail.com' }
  ],
  projects: [
    {
      id: 'ledger',
      title: 'Ledger',
      tagline: 'Expense tracking and balance analytics.',
      description: 'Real-time expense tracker to monitor income, expenses, and net balance with clean analytics.',
      tags: ['React', 'JavaScript', 'CSS', 'Local Storage'],
      demoUrl: 'https://amaandev.me',
      githubUrl: 'https://github.com/Friedayy/Expense-tracker-ledger',
      featured: true,
      status: 'LIVE'
    },
    {
      id: 'shophub',
      title: 'ShopHub',
      tagline: 'Full-stack e-commerce platform.',
      description: 'Modern e-commerce platform with catalog management, cart flows, and checkout experience.',
      tags: ['React', 'Node.js', 'Express', 'MongoDB'],
      demoUrl: '',
      githubUrl: 'https://github.com/Friedayy/ecommerce-platform',
      featured: true,
      status: 'IN PROGRESS'
    },
    {
      id: 'react-projects',
      title: 'React Apps',
      tagline: 'UI experiments and reusable components.',
      description: 'Collection of interactive React projects exploring animations, UX patterns, and component systems.',
      tags: ['React', 'Vite', 'JavaScript'],
      demoUrl: '',
      githubUrl: 'https://github.com/Friedayy/react-projects',
      featured: false,
      status: 'ACTIVE'
    }
  ],
  experience: [
    {
      id: 'freelance',
      role: 'Full Stack Developer',
      company: 'Freelance',
      period: '2024 — Present',
      description: 'Delivering portfolio, product, and dashboard solutions with responsive UI and API integrations.',
      impact: 'Shipped multiple production-ready apps with measurable UX and performance improvements.',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'GitHub Actions']
    },
    {
      id: 'projects',
      role: 'Open Source Contributor',
      company: 'GitHub',
      period: '2023 — Present',
      description: 'Building and maintaining public repositories focused on frontend engineering and web app architecture.',
      impact: 'Maintained active release cadence and CI-backed deployments across personal projects.',
      technologies: ['JavaScript', 'React', 'Vite', 'Git', 'GitHub Pages']
    }
  ],
  skillsCategories: [
    {
      number: '01',
      category: 'Frontend',
      skills: ['React', 'JavaScript', 'HTML5', 'CSS3', 'Vite']
    },
    {
      number: '02',
      category: 'Backend',
      skills: ['Node.js', 'Express', 'REST APIs', 'MongoDB', 'SQL']
    },
    {
      number: '03',
      category: 'Tooling',
      skills: ['Git', 'GitHub Actions', 'Postman', 'VS Code', 'Figma']
    }
  ],
  now: {
    headline: 'Currently leveling up full-stack engineering and shipping continuously.',
    subline: 'Focused on better architecture, faster iteration loops, and reliable deployments.',
    updatedDate: 'Oct 2026',
    items: [
      {
        topic: 'Frontend Systems',
        description: 'Refining reusable UI patterns, accessibility, and responsive layouts in React.'
      },
      {
        topic: 'Backend Foundations',
        description: 'Improving API reliability, validation flows, and production-ready server practices.'
      },
      {
        topic: 'Delivery Velocity',
        description: 'Automating quality checks and deployments with GitHub Actions and telemetry-first workflows.'
      }
    ]
  }
};
