

const electron = require('electron')
const {app, BrowserWindow, globalShortcut} = electron

const path = require('path')
const url  = require('url')

let win

function createWindow(){
	win = new BrowserWindow ({width: 1120, height:600})
	win.loadURL(url.format({
		pathname: path.join(__dirname, 'index.html'),
		protocol: 'file',
		slashes: true
	}))

  // Register a 'CommandOrControl+X' shortcut listener.
  const ret = globalShortcut.register('CommandOrControl+X', () => {
    console.log('CommandOrControl+X is pressed')
  })

  if (!ret) {
    console.log('registration failed')
  }

  // Check whether a shortcut is registered.
  console.log(globalShortcut.isRegistered('CommandOrControl+X'))

	//win.webContents.openDevTools()
}

exports.openWindow = () => {
	let newWin = new BrowserWindow ({width: 400, height:200})
	newWin.loadURL(url.format({
		pathname: path.join(__dirname, 'enupal.html'),
		protocol: 'file',
		slashes: true
	}))
}

app.on('ready', createWindow)
