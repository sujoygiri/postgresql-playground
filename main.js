const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("node:path")


const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname,'preload.js'),
      // nodeIntegration: true,
			// contextIsolation: false
    }
  });
  win.loadFile("./index.html");
  win.webContents.closeDevTools()
  // win.webContents.openDevTools()
};

app.whenReady().then(() => {
  ipcMain.handle('ping',(event,args) => {
    console.log(args);
    return 'pong';
  })
  createWindow()
});
