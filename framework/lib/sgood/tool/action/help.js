
Sgood = (global.Sgood) ? global.Sgood : Sgood;

Sgood.Tool_Action_Help = exports.Class = function () {
	Sgood.Mixin.call(this, Sgood.Tool_Action);
};

Sgood.Tool_Action_Help.prototype.run = function (cmd) {
	if (cmd && _.isFunction(this[cmd + 'Help'])) {
		this[cmd + 'Help']();
	} else {
		this.help();
	}
};

Sgood.Tool_Action_Help.prototype.help = function () {
	var cmds = [
		['new', 'Create a new project'],
		['run', 'Run a project from local directory'],
		['help', 'Show Sgood help or help for specific cmd']
	];

	console.log('Use "sgood help cmd" to get help on a specific cmd');
	console.log('');
	console.log(' cmds');
	console.log(' --');
	
	_.forEach(cmds, function (cmd) {
		var name = new Sgood.Str(cmd[0]);
		console.log(' ' + name.rpad(' ', 8) + cmd[1]);
	});

	console.log('');
};

Sgood.Tool_Action_Help.prototype.helpHelp = function () {
	this.help();
};

Sgood.Tool_Action_Help.prototype.newHelp = function () {
	console.log(' "new" cmd');
	console.log('');
	console.log(' Usage: sgood new proj_path');
	console.log('');
	console.log(' Description: Create a new project in the proj_path');
	console.log('   directory. The specified directory will be created ');
	console.log('   and must not already exist.');
	console.log('');
};

Sgood.Tool_Action_Help.prototype.runHelp = function () {
	console.log(' "run" cmd');
	console.log('');
	console.log(' Usage: sgood run');
	console.log('');
	console.log(' Description: Not implemented.  In future will run an');
	console.log('   instance of the application that reloads on file');
	console.log('   updates.');
	console.log('');
};

