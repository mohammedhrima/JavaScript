const electron = require("electron");

const { app, BrowserWindow } = electron;

app.on("ready", () => {
  const mainWindow = new BrowserWindow({}); //Creat a window
  //mainWindow.loadURL("http://google.com");
  mainWindow.loadURL(`file://${__dirname}/index.html`);
  //mainWindow.webContents.openDevTools();
});
