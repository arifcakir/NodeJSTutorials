const { app, BrowserWindow,Menu } = require('electron');
const electron = require('electron');


app.on("ready", () => {
    var mainWindow = new BrowserWindow({ height: 800, width: 800,show:false ,resizable:false});
    mainWindow.loadURL('file://'+__dirname+'/index.html');

    mainWindow.once("ready-to-show",()=>{
        mainWindow.show();
    });
});



app.on("window-all-closed", () => {
    app.quit();
});



app.on('ready', function () {
    const menuTemplate = [
        {
            label: 'Electron',
            submenu: [
                {
                    label: 'About ...',
                    click: () => {
                        console.log('About Clicked');
                    }
                }, {
                    type: 'separator'
                }, {
                    label: 'Quit',
                    click: () => {
                        app.quit();
                    }
                }
            ]
        }
    ];
    const menu = Menu.buildFromTemplate(menuTemplate);
    Menu.setApplicationMenu(null);
});