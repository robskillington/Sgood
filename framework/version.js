var version = exports.version = function () {
	this.value = '0.1.0';
};
version.prototype.toString = function () {
	return this.value;	
};