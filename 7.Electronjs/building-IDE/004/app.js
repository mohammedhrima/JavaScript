const electron = require("electron")
const { app, BrowserWindow, ipcMain, dialog, Notification, Menu } = require("electron")
//require("electron-reloader")(module)
const fs = require("fs")
const isDevEnv = process.env.NODE_ENV === "development"


let mainWindow = null;
app.on("ready", () => {
    mainWindow = new BrowserWindow({
        height: 810,
        width: 800,
        //autoHideMenuBar: true,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
            enableRemoteModule: true
        }
    })
    mainWindow.loadFile(`${__dirname}/src/main.html`)
    Menu.setApplicationMenu(Menu.buildFromTemplate(template));

    ipcMain.on("creat-document", () => {
        console.log("Receive creat document");
        dialog.showSaveDialog(mainWindow, {
            filters: [{ name: "text file", extensions: ["txt"] }]
        }).then(({ filePath }) => {
            console.log("file path", filePath);
            fs.writeFile(filePath, "", (err) => {
                if (err) { console.log(err); }
                else {
                    console.log("send document-created");
                    mainWindow.webContents.send("document-created", filePath)
                }
            })
        })
    })

    ipcMain.on("open-document", () => {
        dialog.showOpenDialog({
            properties: ["openFile"],
            filters: [{ name: "test files", extensions: ["txt"] }]
        }).then(({ filePaths }) => {
            const filePath = filePaths[0]
            fs.readFile(filePath, "utf-8", (err, content) => {
                if (err) {
                    console.log(err);
                    handleError()
                }
                else {
                    mainWindow.webContents.send("document-opened", { filePath, content })
                    console.log("line 51", content);
                }
            })
        })
    })

    if (isDevEnv) {
        try {
            mainWindow.webContents.openDevTools()
        }
        catch { }
    }

    const handleError = () => {
        new Notification({
            title: "Error",
            body: "Sorry something went wrong !"
        }).show()
    }
})

const template = [
    {
        label: "File",
        submenu: [
            {
                label: "Open File",
                click: () => {
                    ipcMain.emit("open-document")
                }
            },
            {
                label: "Add new File",
                click: () => {
                    ipcMain.emit("creat-document")
                }
            },
            { role: 'quit' },

        ]
    },

    {
        label: 'Edit',
        submenu: [
            { role: 'undo' },
            { role: 'redo' },
        ]
    },
    { role: 'reload' },
    { role: 'toggleDevTools' },
]