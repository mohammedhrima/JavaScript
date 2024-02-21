// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts

const { contextBridge } = require("electron");
const { ipcRenderer } = require("electron");
const fs = require("fs");
const { spawn } = require("child_process");

contextBridge.exposeInMainWorld("versions", {
  node: () => process.versions.node,
  chrome: () => process.versions.chrome,
  electron: () => process.versions.electron,

  // we can also expose variables, not just functions
});

contextBridge.exposeInMainWorld("ipcRenderer", {
  send: (channel, data) => ipcRenderer.send(channel, data),
  on: (channel, func) =>
    ipcRenderer.on(channel, (event, ...args) => func(...args)),
});

contextBridge.exposeInMainWorld("spawn", (py_version, arr) =>
  spawn(py_version, arr)
);

contextBridge.exposeInMainWorld("fs", {
  readdir: (path, func) => fs.readdir(path, (...args) => func(...args)),
});
