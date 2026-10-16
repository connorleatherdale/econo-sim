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
    ]
  };   