const { app, protocol, BrowserWindow, globalShortcut } = require('electron')
// 需在当前文件内开头引入 Node.js 的 'path' 模块
const path = require('path')
app.commandLine.appendSwitch("--ignore-certificate-errors", "true");
// Scheme must be registered before the app is ready
protocol.registerSchemesAsPrivileged([
    { scheme: "app", privileges: { secure: true, standard: true } }
]);
app.disableHardwareAcceleration()
const createWindow = () => {
    const win = new BrowserWindow({
        minWidth: 960,
        minHeight: 540,
        width: 960,
        height: 540,
        //窗口是否在屏幕居中. 默认值为 false
        center: true,
        transparent: true, 
        //设置为 false 时可以创建一个无边框窗口 默认值为 true。
        frame: false,
        //窗口是否在创建时显示。 默认值为 true。
        show: true,
        webPreferences: {
            nodeIntegration: true,
            nodeIntegrationInWorker: true,
            preload: path.join(__dirname, 'preload.js'),
            webSecurity: false,
        }
    })
    win.webContents.once('did-fail-load', function () {
        setTimeout(()=>{
            win.reload();
        }, 1000);
    });
    // win.setMenu(null)
    if (app.isPackaged) {
        win.loadURL(`file://${path.join(__dirname, '../dist/index.html')}`)
    } else {
        // win.loadURL('http://127.0.0.1:5173/')
        win.loadURL('http://localhost:5173/')
        win.webContents.openDevTools()
    }
    globalShortcut.register("CommandOrControl+Shift+i", function () {
        win.webContents.openDevTools();
    });
 
}
 
app.whenReady().then(() => {
 
    createWindow()
 
    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
})
 
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})