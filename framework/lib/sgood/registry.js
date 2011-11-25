
Sgood = (global.Sgood) ? global.Sgood : Sgood;

// Singleton
Sgood.Registry = exports.Class = {};

Sgood.Registry._registry = new Object();

Sgood.Registry.get = function (key) {
	return this._registry[key];
}; 

Sgood.Registry.set = function (key, value) {
	this._registry[key] = value;
};
