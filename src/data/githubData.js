export const githubFallbackData = {
  profile: {
    name: 'Mohammad Amaan Bhat',
    login: 'Friedayy',
    avatar_url: '/images/me.jpeg',
    bio: 'Full Stack Developer building polished web experiences.',
    public_repos: 15,
    followers: 10,
    following: 10,
    html_url: 'https://github.com/Friedayy'
  },
  stats: {
    totalRepos: 15,
    totalCommitsLastMonth: 45,
    primaryLanguage: 'JavaScript'
  },
  fallbackEvents: [
    {
      id: 'evt-1',
      repo: {
        name: 'Friedayy/Portfolio',
        url: 'https://github.com/Friedayy/Portfolio'
      },
      branch: 'main',
      commitSha: 'latest',
      message: 'Portfolio updates and UI refinements',
      time: 'Recently'
    },
    {
      id: 'evt-2',
      repo: {
        name: 'Friedayy/react-projects',
        url: 'https://github.com/Friedayy/react-projects'
      },
      branch: 'main',
      commitSha: 'latest',
      message: 'Component improvements and interaction polish',
      time: 'Recently'
    }
  ]
};
