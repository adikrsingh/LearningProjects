//npm init -y
//npm install Electron

const electron = require('electron');

const app = electron.app;

const BrowserWindow = electron.BrowserWindow;

function createWindow () {
    const win = new BrowserWindow({
      width: 800,
      height: 600,
      webPreferences: {
        nodeIntegration: true,
        enableRemoteModule:true
    }
    })
  
    win.loadFile('index.html').then(function(){
        win.maximize();
        win.webContents.openDevTools(); // gives devlepoer tools automatically
    });
}

app.whenReady().then(() => {
    createWindow()
  })
