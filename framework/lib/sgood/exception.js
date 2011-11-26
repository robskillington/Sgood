
Sgood = (global.Sgood) ? global.Sgood : Sgood;

Sgood.Exception = exports.Class = function (code, message) {
	if (code && !message) {
		this.code = 503;
		this.message = code;
	} else {
		this.code = code;
		this.message = (message.length && message.length > 0) 
			? message 
			: '';		
	}
};

