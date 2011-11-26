
var fs = require('fs');

Sgood = (global.Sgood) ? global.Sgood : Sgood;

Sgood.Tool_Action_New = exports.Class = function () {
	Sgood.Mixin.call(this, Sgood.Tool_Action);
};

Sgood.Tool_Action_New.prototype.run = function (name) {
	if (!name) {
		throw new Sgood.Exception('Sgood.Tool_Action_New.run: no name for new project specified');
	}

	this.copyTemplateFile('new/controllers/index.js', name + '/app/controllers/index.js');
	this.copyTemplateFile('new/layouts/default.ejs', name + '/app/layouts/default.ejs');
	this.copyTemplateFile('new/models/scaffold.js', name + '/app/models/scaffold.js');
	this.copyTemplateFile('new/models/schema.js', name + '/app/models/schema.js');
	this.copyTemplateFile('new/views/index/index.ejs', name + '/app/views/index/index.ejs');
	this.copyTemplateFile('new/config.js', name + '/app/config.js');

	fs.symlinkSync(Sgood.Const.LIB_PATH, name + '/lib');

	this.copyFrameworkFile('run.js', name + '/run.js');

	fs.mkdirSync(name + '/public');

	console.log('');
	console.log(' project "' + name + '" created successfully');
	console.log('');
};
