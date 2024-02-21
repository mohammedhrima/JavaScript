const { app, BrowserWindow } = require("electron");
const path = require("path");

const mainWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, "server.js"),
    },
  });
  win.loadFile("main.html");
};

app.whenReady().then(() => {
  mainWindow();
  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) mainWindow();
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
