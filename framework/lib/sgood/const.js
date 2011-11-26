
Sgood = (global.Sgood) ? global.Sgood : Sgood;

// Singleton for constants
//	Note: obviously can be mangled but intended 
//		not to be set nor mangled 
var baseDir = (function () {
	var invokePath = process.env._;
	if (invokePath) {
		var pieces = invokePath.split('/');
		var dirPathOneRemoved = pieces.splice(0, pieces.length-2);
		return dirPathOneRemoved.join('/');		
	} else {
		return process.cwd();
	}
})();

Sgood.Const = exports.Class = {
	APP_PATH: process.cwd() + '/app',
	PUBLIC_PATH: process.cwd() + '/public',
	EXT_TEMPLATE: '.ejs',
	FRAMEWORK_BASE_PATH: baseDir + '/framework',
	CODEGEN_TEMPLATE_PATH: baseDir + '/templates',
	LIB_PATH: baseDir + '/framework/lib'
};
