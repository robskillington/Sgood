
var fs = require('fs');
var schema

Sgood = (global.Sgood) ? global.Sgood : Sgood;

Sgood.DataStoreManager = exports.Class = function (modelSchemaFile, modelScaffoldFile) {
	Sgood.Console.println('Sgood.DataStoreManager: loading model schema');

	// Ensure schema present
	if (!fs.statSync(modelSchemaFile).isFile()) {
		throw new Sgood.Exception(
			503, 'Sgood.DataStoreManager.__constructor: modelSchemaFile does not exist'
		);
	}

	// Load the schema
	require(modelSchemaFile);

	if (modelScaffoldFile) {
		Sgood.Console.println('Sgood.DataStoreManager: loading model scaffolding');

		if (!fs.statSync(modelScaffoldFile).isFile()) {
			throw new Sgood.Exception(
				503, 'Sgood.DataStoreManager.__constructor: modelScaffoldFile does not exist'
			);			
		}

		// Load scaffolding
		require(modelScaffoldFile);
	}
};


