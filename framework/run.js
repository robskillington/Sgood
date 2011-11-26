/**
 * Preface
 */

var version = require('./lib/sgood/assemblyinfo.js').AssemblyInfo.version;
console.log('');
console.log('[Sgood v' + version + ']: bootstrap');
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
Sgood.ClassLoader = require('./lib/sgood/classloader.js').Class;

// Mixin helper
Sgood.Mixin = require('./lib/sgood/mixin.js').Func;

// Error helper
Sgood.Error = require('./lib/sgood/error.js').Func;

// TODO: fixup loading helpers (above) with a common helperloader like classloader

// Load application classes
var classLoader = new Sgood.ClassLoader();
classLoader.load([
	// Always first
	'Const',

	// Include classes of the framework you want
	'Application',
	'Console',
	'Controller',
	'DataStoreManager',
	'Dispatcher',
	'Exception',
	'Mime',
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
