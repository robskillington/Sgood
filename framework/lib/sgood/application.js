
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
	var dispatcher = this.dispatcher;
	
	http.createServer(function (request, response) {
		dispatcher.dispatch(request, response);
	}).listen(Sgood.Config.bindPort, Sgood.Config.bindIp);

	Sgood.Console.println(
		'Sgood.Application: http server created and bound to ' + 
		Sgood.Config.bindIp + ':' + Sgood.Config.bindPort
	);
};
