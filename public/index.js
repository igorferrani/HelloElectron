const shell = require('shelljs');

var list = [
	'8.8.8.8',
	'www.google.com'
]

var retorno = shell.exec("ping " + list[1] + " -c 1");

console.log("retorno: ", retorno.stdout);