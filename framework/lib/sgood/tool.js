
Sgood = (global.Sgood) ? global.Sgood : Sgood;

Sgood.Tool = exports.Class = function () {
	this.args = arguments;
};

Sgood.Tool.prototype.run = function () {
	var args = this.args[0];

	//try {
		var action = args[0];
		
		var actionArgs = args.slice(1);

		var actionClassName = action[0].toUpperCase() + action.slice(1);

		var ActionClassDef = eval('Sgood.Tool_Action_' + actionClassName);

		var actionClassInstance = new ActionClassDef();

		actionClassInstance.run.apply(actionClassInstance, actionArgs);
	//} catch (exception) {
	//	this.usage();
	//}

};

Sgood.Tool.prototype.usage = function () {
	console.log('Usage: sgood cmd [proj_path] [--options]');
	console.log('');
	console.log('cmds are,  new         Create a new project');
	console.log('           run         Run a project');
	console.log('           help [cmd]  Show Sgood help or help for specific cmd');
	console.log('');
};
