const {contextBridge, ipcRenderer} = require("electron/renderer");

contextBridge.exposeInMainWorld('platform',{
    name:() => process.platform,
    ping:(val) => ipcRenderer.invoke('ping',val)
})