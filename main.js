// this file is for using electron to wrap everything into one .exe file
const { updateElectronApp } = require('update-electron-app')
updateElectronApp()

const { app, BrowserWindow } = require('electron/main')
const { join } = require('node:path')

function createWindow () {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    icon: join(__dirname, "/assets/app_Icon.png"),
    webPreferences: {
      preload: join(__dirname, 'preload.js'),
      nodeIntegration: true,
      devTools: true, // if the user and use the shift inspect element (kept on for debugging and whatnot)
    }
  })

  win.loadFile('index.html')
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})