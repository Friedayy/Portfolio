export const githubFallbackData = {
  profile: {
    name: 'Mohammad Amaan Bhat',
    login: 'Friedayy',
    avatar_url: '/images/me.jpeg',
    bio: 'Full Stack Developer passionate about modern web engineering.',
    public_repos: 15,
    followers: 10,
    following: 12,
    html_url: 'https://github.com/Friedayy'
  },
  stats: {
    totalRepos: 15,
    totalCommitsLastMonth: 20,
    primaryLanguage: 'JavaScript'
  },
  milestones: [
    { id: 'm1', title: 'Portfolio v2 polish', progress: 100 },
    { id: 'm2', title: 'GitHub telemetry UX', progress: 85 },
    { id: 'm3', title: 'Performance pass', progress: 70 },
    { id: 'm4', title: 'Content refinement', progress: 60 }
  ],
  fallbackEvents: [
    {
      id: 'evt1',
      repo: { name: 'Friedayy/Portfolio', url: 'https://github.com/Friedayy/Portfolio' },
      branch: 'main',
      commitSha: '9da5cf8',
      message: 'feat: complete portfolio rewrite to React + Vite with Midnight Nebula theme and CI/CD deployment',
      time: 'Recently'
    },
    {
      id: 'evt2',
      repo: { name: 'Friedayy/react-projects', url: 'https://github.com/Friedayy/react-projects' },
      branch: 'main',
      commitSha: 'active',
      message: 'Continued improving component architecture and UI interactions.',
      time: 'Recently'
    }
  ]
};
