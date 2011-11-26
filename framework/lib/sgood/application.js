
var http = require('http');

Sgood = (global.Sgood) ? global.Sgood : Sgood;

Sgood.Application = exports.Class = function () {
	this.dispatcher = new Sgood.Dispatcher(Sgood.Config.controllersDirectory);
	
	// Load models if config specifies a model schema
	this.dsmanager = (Sgood.Config.useModels)
		? new Sgood.DataStoreManager(
			Sgood.Config.modelSchema, 
			(Sgood.Config.useModelScaffolding && Sgood.Config.modelScaffolding) 
				? Sgood.Config.modelScaffolding 
				: undefined
		)
		: null;
};

Sgood.Application.prototype.run = function () {	
	var self = this;
	
	http.createServer(function (request, response) {
		self.handleRequest(request, response);
	}).listen(Sgood.Config.bindPort, Sgood.Config.bindIp);

	Sgood.Console.println(
		'Sgood.Application: http server created and bound to ' + 
		Sgood.Config.bindIp + ':' + Sgood.Config.bindPort
	);
};

Sgood.Application.prototype.handleRequest = function (request, response) {
	//try {
		this.dispatcher.dispatch(request, response);
	/*} catch (exception) {
		if (Sgood.Config.catchExceptions) {
			if (exception instanceof Sgood.Exception) {
				response.writeHead(exception.code, { 'Content-Type': 'text/html' });
				response.end('<!DOCTYPE html><html><head><title>Error</title></head><body>' + exception.message + '</body></html>');
			} else {
				response.writeHead(503, { 'Content-Type': 'text/html' });
				response.end('<!DOCTYPE html><html><head><title>Error</title></head><body>' + exception.toString() + '</body></html>');			
			}
		} else {
			throw exception;
		}
	}*/
};
