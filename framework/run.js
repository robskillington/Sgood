
// Preface
var version = function () {
	this.value = '0.1.0';
};
version.prototype.toString = function () {
	return this.value;	
};

console.log('[Sgood v' + (new version()) + ']: boot');

/**
 * Imports
 */

// General purpose libs
global._ = require('./lib/underscore/underscore.js');

/**
 * Application
 */

// Namespace
Sgood = global.Sgood = new Object();
Sgood.Version = version;

// Loader
Sgood.ClassLoader = {load: function (classes) {
	_.forEach(classes, function (c) {
		var ptr = Sgood;
		var pieces = c.split('.');
		var path = './lib/sgood/' + c.replace('.', '/').toLowerCase() + '.js';

		for (var i = 0; i < pieces.length; i++) {
			var bitName = pieces[i];
			ptr[bitName] = new Object();
			ptr = ptr[bitName];
		}

		ptr = require(path).Class;
	});
}};

// Load application classes
Sgood.ClassLoader.load([
	// Always first
	'Const',

	// Include classes of the framework you want
	'Application',
	'Config',
	'Console',
	'Controller',
	'DataStoreManager',
	'Dispatcher',
	'Exception',
	'Registry',
	'RequestHandle',
	'Str',
	'Template'
]);

// Run application
var app = new Sgood.Application();
app.run();
