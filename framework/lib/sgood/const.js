
Sgood = (global.Sgood) ? global.Sgood : Sgood;

// Singleton for constants
//	Note: obviously can be mangled but intended 
//		not to be set nor mangled 
Sgood.Const = exports.Class = {
	APP_PATH: process.cwd() + '/app/',
	EXT_TEMPLATE: '.ejs'
};
