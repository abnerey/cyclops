const electron = require('electron');
const {app, BrowserWindow} = electron;

const path = require('path');
const url = require('url');

function windowBounds() {
  const workAreaSize = electron.screen.getPrimaryDisplay().workAreaSize;
  return {
    width: workAreaSize.width,
    height: workAreaSize.height
  }
}

let mainWindow;

function createWindow () {
  const bounds = windowBounds();
  let options = {
    webPreferences: {
      experimentalFeatures: true,
      experimentalCanvasFeatures: true
    },
    minWidth: 800,
    minHeigth: 500,
    width: bounds.width,
    height: bounds.height
  }
  mainWindow = new BrowserWindow(options);

  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }))
  mainWindow.loadURL(`file://${__dirname}/index.html`);

  // Discomment to open the console on startup
  //mainWindow.toggleDevTools();

  // Open the DevTools: mainWindow.webContents.openDevTools()
  mainWindow.on('closed', function () {
    mainWindow = null
  })
}

app.on('ready', createWindow);

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit()
  }
});

app.on('activate', function () {
  if (mainWindow === null) {
    createWindow()
  }
});
