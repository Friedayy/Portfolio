export const githubFallbackData = {
  profile: {
    login: "Friedayy",
    name: "Mohammad Amaan Bhat",
    bio: "Pressure is a Privilege!",
    avatar_url: "https://avatars.githubusercontent.com/u/159772893?v=4",
    html_url: "https://github.com/Friedayy",
    public_repos: 15,
    public_gists: 0,
    followers: 10,
    following: 12,
    location: "Chennai / Srinagar, India",
    blog: "https://amaandev.me",
    twitter_username: "bhatAmaan_",
    status: "Shipping daily & learning in public"
  },

  stats: {
    totalRepos: 15,
    totalCommitsLastMonth: 34,
    currentStreakDays: 12,
    primaryLanguage: "JavaScript / React",
    activeSprints: 3,
    openSourceContributions: 8
  },

  languages: [
    { name: "JavaScript", percentage: 58, color: "#f7df1e" },
    { name: "React / JSX", percentage: 22, color: "#61dafb" },
    { name: "CSS / Vanilla", percentage: 12, color: "#a855f7" },
    { name: "HTML", percentage: 5, color: "#e34f26" },
    { name: "Python / Others", percentage: 3, color: "#3776ab" }
  ],

  // Real projects & active progress metrics for Amaan
  milestones: [
    {
      id: "solar-flare-ml",
      title: "Solar Flare Forecasting System & Dashboard",
      repo: "Friedayy/solar-flare",
      repoUrl: "https://github.com/Friedayy/solar-flare",
      status: "ACTIVE DEVELOPMENT",
      statusType: "active",
      progress: 92,
      summary: "Real-time machine learning system forecasting major (M/X class) solar flares within 24 hours using NASA SDO SHARP magnetic parameters and NOAA GOES X-ray data. Benchmarked via True Skill Statistic (TSS = 0.650) with interactive live space-weather dashboard.",
      tags: ["JavaScript", "Machine Learning", "NASA SDO", "NOAA GOES", "Data Viz"],
      tasks: [
        { label: "Data ingestion pipeline from NOAA GOES & NASA SDO", done: true },
        { label: "True Skill Statistic model benchmarking (TSS = 0.650)", done: true },
        { label: "Real-time interactive space-weather telemetry dashboard", done: true },
        { label: "Automated alert webhooks and 24h predictive charts", done: false }
      ]
    },
    {
      id: "expense-tracker-ledger",
      title: "Ledger — Full Stack Personal Finance Hub",
      repo: "Friedayy/Expense-tracker-ledger",
      repoUrl: "https://github.com/Friedayy/Expense-tracker-ledger",
      status: "PRODUCTION READY",
      statusType: "completed",
      progress: 100,
      summary: "Full-stack personal finance and expense tracker featuring real-time balance calculations, category-based transaction tracking, data visualization charts, and persistent MongoDB database storage.",
      tags: ["React.js", "Node.js", "Express", "MongoDB", "Chart.js"],
      tasks: [
        { label: "Multi-category transaction logging & real-time balance calculations", done: true },
        { label: "Interactive expense vs income breakdown charts", done: true },
        { label: "RESTful microservice API with secure MongoDB persistence", done: true },
        { label: "Responsive mobile-first ledger interface", done: true }
      ]
    },
    {
      id: "ecommerce-platform",
      title: "ShopHub — Modern E-Commerce Platform",
      repo: "Friedayy/ecommerce-platform",
      repoUrl: "https://github.com/Friedayy/ecommerce-platform",
      status: "FEATURE POLISH",
      statusType: "active",
      progress: 88,
      summary: "Production-grade e-commerce storefront with dynamic catalog filtering, slide-out cart drawers, persistent checkout state, and fluid responsive design optimized for fast page loads.",
      tags: ["React", "JavaScript (ES6+)", "REST API", "CSS Modules", "Vite"],
      tasks: [
        { label: "Product catalog browsing with category filters and instant search", done: true },
        { label: "Persistent cart state with quantity adjustments and checkout modal", done: true },
        { label: "Sub-second responsive layouts with modular CSS architecture", done: true },
        { label: "Mock payment gateway integration & order summary exports", done: false }
      ]
    },
    {
      id: "portfolio-v2",
      title: "Portfolio 2.0 (React + Vite Architecture)",
      repo: "Friedayy/Portfolio",
      repoUrl: "https://github.com/Friedayy/Portfolio",
      status: "SHIPPED",
      statusType: "completed",
      progress: 98,
      summary: "Clean, ultra-fast portfolio rebuild inspired by samidev aesthetics featuring volt lime accents, dot-matrix backdrops, interactive mouse trailers, and a live GitHub Progress sub-page.",
      tags: ["React 19", "Vite", "Vanilla CSS", "GitHub API", "SEO"],
      tasks: [
        { label: "Rebuilt legacy static site into modern Vite + React 19 app", done: true },
        { label: "Dynamic dot-matrix background and magnetic mouse trailer", done: true },
        { label: "Top scroll progress slide bar and centered feed layout", done: true },
        { label: "Dedicated GitHub Progress page with live API synchronization", done: true }
      ]
    }
  ],

  // Fallback public events for Amaan's GitHub feed
  fallbackEvents: [
    {
      id: "evt-1",
      type: "PushEvent",
      repo: { name: "Friedayy/solar-flare", url: "https://github.com/Friedayy/solar-flare" },
      branch: "main",
      commitSha: "a9d0383",
      message: "feat: refine real-time solar flare forecasting telemetry & NOAA GOES parameters",
      time: "2 days ago",
      createdAt: "2026-10-12T15:54:33Z"
    },
    {
      id: "evt-2",
      type: "PushEvent",
      repo: { name: "Friedayy/Portfolio", url: "https://github.com/Friedayy/Portfolio" },
      branch: "main",
      commitSha: "f81c92a",
      message: "feat: add dedicated GitHub Progress page with sidebar and live API synchronization",
      time: "3 days ago",
      createdAt: "2026-10-11T12:30:15Z"
    },
    {
      id: "evt-3",
      type: "PushEvent",
      repo: { name: "Friedayy/JavaScript", url: "https://github.com/Friedayy/JavaScript" },
      branch: "main",
      commitSha: "e34b721",
      message: "docs: add asynchronous JavaScript patterns & event loop demonstrations",
      time: "5 days ago",
      createdAt: "2026-10-09T18:22:45Z"
    },
    {
      id: "evt-4",
      type: "PushEvent",
      repo: { name: "Friedayy/Expense-tracker-ledger", url: "https://github.com/Friedayy/Expense-tracker-ledger" },
      branch: "main",
      commitSha: "c791d04",
      message: "perf: optimize balance calculation hooks and transaction query indexes",
      time: "1 week ago",
      createdAt: "2026-10-06T09:14:02Z"
    },
    {
      id: "evt-5",
      type: "CreateEvent",
      repo: { name: "Friedayy/backend-learning-phase", url: "https://github.com/Friedayy/backend-learning-phase" },
      branch: "main",
      commitSha: "b2184cf",
      message: "Initial commit: Node.js backend microservices and JWT authentication setup",
      time: "2 weeks ago",
      createdAt: "2026-09-29T14:40:10Z"
    },
    {
      id: "evt-6",
      type: "WatchEvent",
      repo: { name: "first-contributions/first-contributions", url: "https://github.com/first-contributions/first-contributions" },
      branch: "",
      commitSha: "",
      message: "Starred open-source initiative for newcomer contributions",
      time: "3 weeks ago",
      createdAt: "2026-09-21T11:15:00Z"
    }
  ],

  // Fallback public repositories
  fallbackRepos: [
    {
      id: 1410799331,
      name: "solar-flare",
      fullName: "Friedayy/solar-flare",
      htmlUrl: "https://github.com/Friedayy/solar-flare",
      description: "Real-time machine learning system forecasting major (M/X class) solar flares within 24 hours using NASA SDO SHARP magnetic parameters and NOAA GOES X-ray data. Benchmarked via True Skill Statistic (TSS = 0.650) with interactive live space-weather dashboard.",
      language: "JavaScript",
      languageColor: "#f7df1e",
      stars: 1,
      forks: 0,
      updatedAt: "2026-10-12T15:54:33Z",
      featured: true,
      category: "Machine Learning / Space Weather"
    },
    {
      id: 99182371,
      name: "Portfolio",
      fullName: "Friedayy/Portfolio",
      htmlUrl: "https://github.com/Friedayy/Portfolio",
      description: "Personal portfolio website built with React, Vite & Vanilla CSS — featuring dark mode, animated backgrounds, live GitHub progress dashboard, and responsive design.",
      language: "CSS",
      languageColor: "#a855f7",
      stars: 9,
      forks: 2,
      updatedAt: "2026-10-14T08:20:00Z",
      featured: true,
      category: "Web Application"
    },
    {
      id: 128918274,
      name: "Expense-tracker-ledger",
      fullName: "Friedayy/Expense-tracker-ledger",
      htmlUrl: "https://github.com/Friedayy/Expense-tracker-ledger",
      description: "Full-stack personal finance and ledger platform with real-time balance calculations, category-based transaction tracking, data visualization charts, and MongoDB persistence.",
      language: "JavaScript",
      languageColor: "#f7df1e",
      stars: 3,
      forks: 1,
      updatedAt: "2026-10-06T09:14:02Z",
      featured: true,
      category: "Full Stack (MERN)"
    },
    {
      id: 139182749,
      name: "ecommerce-platform",
      fullName: "Friedayy/ecommerce-platform",
      htmlUrl: "https://github.com/Friedayy/ecommerce-platform",
      description: "Modern online shopping experience with product catalog filtering, dynamic cart drawers, persistent checkout state, and fluid responsive design.",
      language: "JavaScript",
      languageColor: "#f7df1e",
      stars: 2,
      forks: 0,
      updatedAt: "2026-10-02T16:45:10Z",
      featured: true,
      category: "Frontend Application"
    },
    {
      id: 1328920234,
      name: "JavaScript",
      fullName: "Friedayy/JavaScript",
      htmlUrl: "https://github.com/Friedayy/JavaScript",
      description: "Core JavaScript deep-dives, ES6+ feature benchmarks, functional programming patterns, and DOM manipulation algorithms.",
      language: "HTML",
      languageColor: "#e34f26",
      stars: 1,
      forks: 0,
      updatedAt: "2026-10-09T18:22:45Z",
      featured: false,
      category: "Algorithms & Core Language"
    },
    {
      id: 140182749,
      name: "backend-learning-phase",
      fullName: "Friedayy/backend-learning-phase",
      htmlUrl: "https://github.com/Friedayy/backend-learning-phase",
      description: "Node.js, Express, RESTful APIs, JWT authentication, and MongoDB backend exploration.",
      language: "JavaScript",
      languageColor: "#f7df1e",
      stars: 1,
      forks: 0,
      updatedAt: "2026-09-29T14:40:10Z",
      featured: false,
      category: "Backend Services"
    },
    {
      id: 110293849,
      name: "good-first-issue",
      fullName: "Friedayy/good-first-issue",
      htmlUrl: "https://github.com/Friedayy/good-first-issue",
      description: "Make your first open-source contribution and explore beginner-friendly repository structures.",
      language: "Markdown",
      languageColor: "#8b949e",
      stars: 0,
      forks: 0,
      updatedAt: "2026-09-18T11:00:00Z",
      featured: false,
      category: "Open Source"
    },
    {
      id: 110293850,
      name: "first-contributions",
      fullName: "Friedayy/first-contributions",
      htmlUrl: "https://github.com/Friedayy/first-contributions",
      description: "Help beginners contribute to open source projects through collaborative git practices.",
      language: "Git",
      languageColor: "#f05032",
      stars: 0,
      forks: 0,
      updatedAt: "2026-09-15T09:30:00Z",
      featured: false,
      category: "Open Source"
    }
  ]
};
