
Sgood = (global.Sgood) ? global.Sgood : Sgood;

Sgood.Tool_Action_Run = exports.Class = function () {
	Sgood.Mixin.call(this, Sgood.Tool_Action);
};

Sgood.Tool_Action_Run.prototype.run = function (name) {
	throw new Sgood.Exception('Sgood.Tool_Action_Run.run: not implemented');
};
