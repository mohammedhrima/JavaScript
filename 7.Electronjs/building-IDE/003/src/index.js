const { ipcRenderer } = require("electron");
const path = require("path")
window.addEventListener("DOMContentLoaded", () => {
    console.log("Start");
    document.getElementById("creatDoc").addEventListener("click", () => {
        console.log("send Creat document");
        ipcRenderer.send("creat-document")
        ipcRenderer.on("document-created", (_, filepath) => {
            console.log("receive document created");
            document.getElementById("document-name").innerHTML = path.parse(filepath).base
            document.getElementById("fileTestarea").removeAttribute("disabled")
            document.getElementById("fileTestarea").value = ""
            document.getElementById("fileTestarea").focus()
        })
    })

    document.getElementById("openDoc").addEventListener("click", () => {
        console.log("send Open document");
        ipcRenderer.send("open-document")
        ipcRenderer.on("document-opened", (_, { filePath, content }) => {
            console.log(filePath);
            document.getElementById("document-name").innerHTML = path.parse(filePath).base
            document.getElementById("fileTestarea").removeAttribute("disabled")
            document.getElementById("fileTestarea").value = content
            document.getElementById("fileTestarea").focus()

        })
    })
})