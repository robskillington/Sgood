
var fs = require('fs');
var url = require('url');

Sgood = (global.Sgood) ? global.Sgood : Sgood;

Sgood.Dispatcher = exports.Class = function (controllersDirectory) {
	var controllers = this.controllers = new Object();

	fs.readdir(controllersDirectory, function (err, entries) {
		if (err || entries.length < 1) {
			throw new Sgood.Exception(
				503, 'Sgood.Dispatcher.__constructor: could not list controllersDirectory "' + 
				controllersDirectory + '" directory'
			);
		}

		var controllerNames = new Array();

		_.forEach(entries, function (entry) {
			var pieces = entry.split('.');

			if (pieces.length == 2 && pieces[1] == 'js') {
				var name = pieces[0];
				var ControllerClassDef = require(controllersDirectory + '/' + entry).Class;
				controllers[name] = new ControllerClassDef(name);
				Sgood.Console.println('Sgood.Dispatcher: loaded "' + name + '" controller');
			}
		});
	});
};

Sgood.Dispatcher.prototype.dispatch = function (request, response) {
	var params = url.parse(request.url, true);

	if (params.pathname == '/') {
		// Load index controller and index action
		if (!this.controllers['index']) {
			throw new Sgood.Exception(
				404, 'Sgood.Dispatcher.dispatch: no index controller'
			);
		} else {
			this.controllers['index'].invokeAction('index', request, response);
		}
	} else {
		// Dispatch requests
	}
};
