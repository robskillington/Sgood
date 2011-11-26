
Sgood = (global.Sgood) ? global.Sgood : Sgood;

IndexController = exports.Class = Sgood.Controller.create({
	indexAction: function (req) {
		req.render({
			exclamation:'!',
			welcomeText: 'Welcome to Sgood boilerplate, this boilerplate comprises ' +
				'of Bootstrap (by Twitter) and jQuery on a default Bootstrap ' + 
				'supplied template.'
		});
	}
});
