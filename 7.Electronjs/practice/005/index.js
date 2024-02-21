const electron = require("electron");

const { app, BrowserWindow, Menu, ipcMain } = electron;

let mainWindow, addWindow;

app.on("ready", () => {
    mainWindow = new BrowserWindow({
        /*to run node in app console*/
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
            enableRemoteModule: true,
        },
    });
    mainWindow.loadURL(
        `file://${__dirname}/main.html`
    ); /*__dirname: select main directory*/
    /*make menu button*/
    mainWindow.on("closed", () => app.quit());
    const mainMenu = Menu.buildFromTemplate(menuTemplate);
    Menu.setApplicationMenu(mainMenu);
});

function creatAddWindow() {
    addWindow = new BrowserWindow({
        width: 600 /*in pixels */,
        height: 400,
        title: "Add New Todo",
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
            enableRemoteModule: true,
        },
    });
    addWindow.loadURL(`file://${__dirname}/add.html`);
    /*Whenever we close the window the variable will be set to null so it doesn't
  take space on memory anymore*/
    addWindow.on("closed", () => (addWindow = null));
}

ipcMain.on("value", (event, todo) => {
    //console.log("value is index.js: ", todo);
    mainWindow.webContents.send("request", todo);
    /*to close window */
    addWindow.close();
});

/*Menu bar object*/
const menuTemplate = [
    /*buttons in menu templates*/
    {
        label: "File" /*label name */,
        submenu: [
            {
                /*label menu*/
                label: "New Todo",
                accelerator: "Ctrl+N",
                click() {
                    creatAddWindow();
                },
            },
            {
                label: "clear todo-list" /*Clear to-list */,
                click() {
                    mainWindow.webContents.send("clear");
                },
            },
            {
                label: "Quit" /*Quit button*/,
                accelerator:
                    process.platform === "darwin" ? "Command+Q" : "Ctrl+Q",
                click() {
                    app.quit();
                },
            },
        ],
    },
];

/*for more details */
/*Electron Js Tutorial #22 - On menu click functionality*/
/*darwin refer to Mac OS */
if (process.platform === "darwin") {
    menuTemplate.unshift({});
}
if (process.platform === "linux") {
    menuTemplate.unshift({ label: "linux" });
}
if (process.platform === "windows") {
    menuTemplate.unshift({ label: "windows" });
}

///Get Developper menu
/*
Procces Envirenment
+production
+development
+staging
+test
*/
if (process.env.NODE_ENV !== "production") {
    menuTemplate.push({
        label: "Developer",
        submenu: [
            {
                role: "reload" /*functions already exist in electron like reload to refesh*/,
            },
            {
                label: "Toggle Developer Tools",
                accelerator: "Ctrl+Shift+i",
                click(item, focusedWindow) {
                    focusedWindow.toggleDevTools();
                },
            },
        ],
    });
}
