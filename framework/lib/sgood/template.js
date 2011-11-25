
var ejs = require('ejs');
var fs = require('fs');

Sgood = (global.Sgood) ? global.Sgood : Sgood;

Sgood.Template = exports.Class = function (path) {
	this._template = fs.readFileSync(path, 'utf8');
};

Sgood.Template.prototype.render = function (params) {
	return ejs.render(this._template, {locals: params});
};
