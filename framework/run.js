
// Preface
var version = require('./version.js').version;
console.log('');
console.log('[Sgood v' + (new version()) + ']: bootstrap');
console.log('');

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
		var path = './lib/sgood/' + c.replace(/\./g, '/').toLowerCase() + '.js';

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

// Require application specific config
Sgood.Config = require('./app/config.js').Class;

// Run application
var app = new Sgood.Application();
app.run();
