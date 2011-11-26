
// Load JugglingDb
var Schema = require('../../lib/jugglingdb').Schema;
var schema = new Schema(
	Sgood.Config.jugglingDbConf.adapter
);

// Define models
//
//   Note: see JugglingDB documentation at 
//     https://github.com/1602/jugglingdb/ 
//     for more information on schema definition

User = schema.define('User', {
	name: String
});

