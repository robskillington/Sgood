
var fs = require('fs');
var url = require('url');
var path = require('path');

Sgood = (global.Sgood) ? global.Sgood : Sgood;

Sgood.Dispatcher = exports.Class = function (controllersDirectory) {
	var controllers = this.controllers = new Object();

	fs.readdir(controllersDirectory, function (err, entries) {
		if (err || entries.length < 1) {
			throw new Sgood.Exception(
				'Sgood.Dispatcher.__constructor: could not list controllersDirectory "' + 
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
	var dispatcher = this;
	var params = url.parse(request.url, true);

	var publicFilePath = Sgood.Const.PUBLIC_PATH + params.pathname;

	fs.stat(publicFilePath, function (err, stats) {
		if (!err && stats.isFile()) {
			dispatcher.serveStaticFile(publicFilePath, response);
		} else {
			dispatcher.serveRequest(params, request, response);
		}
	});
};

/**
 * Serve the request from our framework
 */
Sgood.Dispatcher.prototype.serveRequest = function (params, request, response) {
	if (params.pathname == '/') {
		// Load index controller and index action
		if (!this.controllers['index']) {
			Sgood.Error(request, response, new Sgood.Exception(
				404, 'Sgood.Dispatcher.dispatch: no index controller'
			));
		} else {
			this.controllers['index'].invokeAction('index', request, response);
		}
	} else {		
		// Route request
		var pathPieces = params.pathname.split('/');

		if (pathPieces[0].length < 1) {
			pathPieces.shift();
		}

		// TODO: implement custom specific routing here based on regex
		//   supplied in a file like ./app/routes.js

		var controller = pathPieces[0].replace('-', '').toLowerCase();
		var action = (pathPieces.length > 1) 
			? this.normalize(pathPieces[1])
			: 'index';

		if (!this.controllers[controller]) {
			Sgood.Error(request, response, new Sgood.Exception(
				404, 'Sgood.Dispatcher.serveRequest: no route matched'
			));
		} else {
			this.controllers[controller].invokeAction(action, request, response);
		}
	}
};

Sgood.Dispatcher.prototype.serveStaticFile = function (path, response) {
	// Load the static public asset file
	fs.readFile(path, function (err, data) {
		if (err) {
			Sgood.Error(request, response, new Sgood.Exception(
				503, 'Sgood.Dispatcher.serveStaticFile: error reading public file asset ' +
				'"' + publicFilePath + '"'
			));
		} else {
			// TODO: improve performance of line below by doing string search instead
			var ext = path.split('.').splice(-1);

			var contentType = (Sgood.Mime[ext]) 
				? Sgood.Mime[ext] 
				: 'application/octet-stream';
			
			response.writeHead(200, { 'Content-Type': contentType });
			response.end(data);
		}
	});
};

Sgood.Dispatcher.prototype.normalize = function (str) {
	return str.replace(/(-)([a-zA-Z]){1}/g, function (s, dash, firstChar) {
		return firstChar.toUpperCase();
	});
};
