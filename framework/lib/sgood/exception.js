
Sgood = (global.Sgood) ? global.Sgood : Sgood;

Sgood.Exception = exports.Class = function (code, message) {
	this.code = code;
	this.message = (message) ? message : '';
};

