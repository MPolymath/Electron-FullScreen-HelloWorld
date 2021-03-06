const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

electron.crashReporter.start();

var mainWindow = null;

app.on('window-all-closed', function(){
    if (process.platform != 'darwin') {
      app.quit();
    }
});

app.on('ready', function () {
    mainWindow = new BrowserWindow({
    });
    mainWindow.loadURL('file://' + __dirname + '/index.html')
    mainWindow.setFullScreen(true)
    mainWindow.on('closed', function() {
      mainWindow = null;
    })

    mainWindow.on('closed', function() {
      mainWindow = null;
    });
});
