
Sgood = (global.Sgood) ? global.Sgood : Sgood;

// Singleton
Sgood.Console = exports.Class = {};

Sgood.Console.println = function (str) {
	var d = new Date();
	var zeroPad = function (o) {
		return (new Sgood.Str(o.toString())).lpad('0', 2);
	};
	var now = d.getFullYear() + '-' +
		zeroPad(d.getMonth() + 1) + '-' + 
		zeroPad(d.getDate()) + ' ' +  
		zeroPad(d.getHours() + 1) + ':' + 
		zeroPad(d.getMinutes()) + ':' + 
		zeroPad(d.getSeconds());
	console.log('[' + now + ']: ' + str);
};
