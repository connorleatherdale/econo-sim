const githubToken = process.env.GITHUB_TOKEN || process.env.GH_TOKEN;

module.exports = {
  packagerConfig: {
    asar: true,
    icon: './assets/app_Icon.png'
  },
  makers: [
    {
      name: '@electron-forge/maker-zip',
      platforms: ['darwin']
    },
    {
      name: '@electron-forge/maker-squirrel',
      platforms: ['win32']
    }
  ],
  publishers: [
    {
      name: '@electron-forge/publisher-github',
      config: {
        authToken: githubToken,
        repository: {
          owner: 'connorleatherdale',
          name: 'econo-sim'
        },
        prerelease: false,
        draft: true
      }
    }
  ]
};