
Sgood = (global.Sgood) ? global.Sgood : Sgood;

Sgood.ClassLoader = exports.Class = function () {

};

Sgood.ClassLoader.prototype.load = function (classes) {
	var loadFromPath = this.loadFromPath;

	if (!classes instanceof Array) {
		classes = [classes];
	}

	_.forEach(classes, function (c) {
		var ptr = Sgood;
		var pieces = c.split('.');
		var path = './' + c.replace(/_/g, '/').toLowerCase() + '.js';

		for (var i = 0; i < pieces.length; i++) {
			var bitName = pieces[i];
			ptr[bitName] = new Object();
			ptr = ptr[bitName];
		}

		ptr = require(path).Class;
	});
};
