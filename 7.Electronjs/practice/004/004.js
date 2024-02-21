const electron = require("electron"); /*import electron*/
const ffmpeg = require("fluent-ffmpeg"); /*import ffmpeg from electron*/

const { app, BrowserWindow, ipcMain } =
  electron; /*import objects from electron*/

/*we declare mainWindow here so we don't get undefind error in mainWindow.webContent.send()*/
let mainWindow;

app.on("ready", () => {
  mainWindow = new BrowserWindow({
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      enableRemoteModule: true,
    },
  });
  mainWindow.loadURL(`file://${__dirname}/004.html`);
});

/*ipcMain.on to receive from MainWindow to Electron App */
/*wait for the message (Video submited) */
ipcMain.on(
  "Video submited",
  /*function to handel the video*/ (event, path) => {
    /*get duration of video*/
    ffmpeg.ffprobe(path, (err, metadata) => {
      //console.log(`Video duration is ${metadata.format.duration}`);
      /*to send data to html file*/
      mainWindow.webContents.send("Got video lenght", metadata.format.duration);
    });
  }
);
