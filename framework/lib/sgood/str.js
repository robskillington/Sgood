
Sgood = (global.Sgood) ? global.Sgood : Sgood;

Sgood.Str = exports.Class = function (str) {
	this.str = str;
};

Sgood.Str.prototype.lpad = function (padStr, length) {	
	var str = this.str;
	while (str.length < length) {
		str = padStr + str;
    }
	return str;
};

Sgood.Str.prototype.rpad = function (padStr, length) {	
	var str = this.str;
    while (str.length < length) {
    	str = str + padStr;
    }
    return str;
};
