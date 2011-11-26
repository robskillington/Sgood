
Sgood = (global.Sgood) ? global.Sgood : Sgood;

Sgood.Error = exports.Func = function (request, response, exception) {
	Sgood.Console.println('Sgood.Error: exception occurred while processing request');
	console.log('  ' + request.method + ' ' + request.url);

	if (exception instanceof Sgood.Exception) {
		console.log('  [Exception]: ' + exception.message);

		response.writeHead(exception.code, { 'Content-Type': 'text/html' });
		response.end('<!DOCTYPE html><html><head><title>Error</title></head><body>' + exception.message + '</body></html>');
	} else {
		console.log('  [Exception]: ' + exception);

		response.writeHead(503, { 'Content-Type': 'text/html' });
		response.end('<!DOCTYPE html><html><head><title>Error</title></head><body>' + exception.toString() + '</body></html>');			
	}

	return undefined;
};

