
Sgood = (global.Sgood) ? global.Sgood : Sgood;

Sgood.Mixin = exports.Func = function (classDef, constructorArgs) {
	var self = this;

	constructorArgs = (!constructorArgs) 
		? undefined : constructorArgs;

	var classInstance = new classDef(constructorArgs);

	_.forEach(classInstance, function (prop, key) {
		self[key] = prop;
	});

	_.forEach(classDef.prototype, function (prop, key) {
		self[key] = prop;
	});
};

