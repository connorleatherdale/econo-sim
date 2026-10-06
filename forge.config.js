module.exports = {
    packagerConfig: {
      asar: true,
      icon: './assets/icon'
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
    ]
  };   