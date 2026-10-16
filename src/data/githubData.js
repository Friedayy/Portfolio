export const githubFallbackData = {
  profile: {
    login: "Friedayy",
    name: "Mohammad Amaan Bhat",
    bio: "Pressure is a Privilege!",
    avatar_url: "https://avatars.githubusercontent.com/u/159772893?v=4",
    avatar_svg: "/images/profile-avatar.svg",
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
      id: "evt-7ad3c8f",
      type: "PushEvent",
      repo: { name: "Friedayy/Portfolio", url: "https://github.com/Friedayy/Portfolio" },
      branch: "main",
      commitSha: "7ad3c8f",
      message: "feat(router): switch to clean /ongoing URL path without hash",
      time: "Today",
      createdAt: "2026-10-16T16:46:24Z",
      url: "https://github.com/Friedayy/Portfolio/commit/7ad3c8fc616e1af89e0de11fd0d905dc235253dd"
    },
    {
      id: "evt-1f3ba12",
      type: "PushEvent",
      repo: { name: "Friedayy/Portfolio", url: "https://github.com/Friedayy/Portfolio" },
      branch: "main",
      commitSha: "1f3ba12",
      message: "fix: track src/data, add contact social icons, and remove legacy folder",
      time: "Today",
      createdAt: "2026-10-16T16:28:47Z",
      url: "https://github.com/Friedayy/Portfolio/commit/1f3ba129ffd77fa47988129d80a92341386ad8d4"
    },
    {
      id: "evt-9da5cf8",
      type: "PushEvent",
      repo: { name: "Friedayy/Portfolio", url: "https://github.com/Friedayy/Portfolio" },
      branch: "main",
      commitSha: "9da5cf8",
      message: "feat: complete portfolio rewrite to React + Vite with Midnight Nebula theme and CI/CD deployment",
      time: "Today",
      createdAt: "2026-10-16T16:04:03Z",
      url: "https://github.com/Friedayy/Portfolio/commit/9da5cf81dafe039a439fc5754a7061ea9d1ff40a"
    },
    {
      id: "evt-a9d0383",
      type: "PushEvent",
      repo: { name: "Friedayy/solar-flare", url: "https://github.com/Friedayy/solar-flare" },
      branch: "main",
      commitSha: "a9d0383",
      message: "feat: figures & deliverables report for solar flare forecasting",
      time: "4 days ago",
      createdAt: "2026-10-12T15:54:26Z",
      url: "https://github.com/Friedayy/solar-flare/commit/a9d03839947c42d89b0cf7c95fe34d9c3486dc84"
    },
    {
      id: "evt-78d0a22",
      type: "PushEvent",
      repo: { name: "Friedayy/JavaScript", url: "https://github.com/Friedayy/JavaScript" },
      branch: "main",
      commitSha: "78d0a22",
      message: "Update README.md with core algorithms & event loop patterns",
      time: "4 days ago",
      createdAt: "2026-10-12T06:25:28Z",
      url: "https://github.com/Friedayy/JavaScript/commit/78d0a22c0a0d45c8f1b0e9e5439896ce1ae69a6a"
    },
    {
      id: "evt-e69a2b3",
      type: "PushEvent",
      repo: { name: "Friedayy/JavaScript", url: "https://github.com/Friedayy/JavaScript" },
      branch: "main",
      commitSha: "e69a2b3",
      message: "feat: add asynchronous JavaScript benchmarks & promise chain demos",
      time: "6 days ago",
      createdAt: "2026-10-10T16:33:42Z",
      url: "https://github.com/Friedayy/JavaScript/commit/e69a2b362250edc3ed4300655f52fa8b7a4f7980"
    },
    {
      id: "evt-77f98fb",
      type: "PushEvent",
      repo: { name: "Friedayy/solar-flare", url: "https://github.com/Friedayy/solar-flare" },
      branch: "main",
      commitSha: "77f98fb",
      message: "Add solar flare favicon for browser title bar",
      time: "1 week ago",
      createdAt: "2026-10-08T19:54:14Z",
      url: "https://github.com/Friedayy/solar-flare/commit/77f98fbe9880f95c89a2486eff81179d7d9789aa"
    },
    {
      id: "evt-fb7bb4c",
      type: "PushEvent",
      repo: { name: "Friedayy/solar-flare", url: "https://github.com/Friedayy/solar-flare" },
      branch: "main",
      commitSha: "fb7bb4c",
      message: "Support PORT environment variable for cloud deployment (Render, Railway, Heroku)",
      time: "1 week ago",
      createdAt: "2026-10-08T19:46:12Z",
      url: "https://github.com/Friedayy/solar-flare/commit/fb7bb4c1d417936468c459a75e5a7ad68b0301fb"
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
