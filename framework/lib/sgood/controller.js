
Sgood = (global.Sgood) ? global.Sgood : Sgood;

Sgood.Controller = exports.Class = function (controllerName) {
	this.controllerName = controllerName;
	this.templates = new Object();
	this.useLayout = Sgood.Config.useLayoutByDefault;
	this.defaultLayout = Sgood.Config.defaultLayout;
	this.defaultLayoutTemplate = null;
};

Sgood.Controller.create = function (implementation) {
	return function (name) {
		var self = this;
		var controller = new Sgood.Controller(name);
		_.forEach(controller, function (prop, key) {
			self[key] = prop;
		});
		_.forEach(Sgood.Controller.prototype, function (prop, key) {
			self[key] = prop;
		});
		_.extend(self, implementation);
	};
};
	
Sgood.Controller.prototype.invokeAction = function (actionName, request, response) {
	var actionMethodName = actionName + 'Action';

	if (!_.isFunction(this[actionMethodName])) {
		throw new Sgood.Exception(404, 'Sgood.Controller.invokeAction: ' + actionMethodName + ' action method not found');
	}

	var requestHandle = new Sgood.RequestHandle(
		this, activeAction, request, response
	);

	var actionMethod = this[actionMethodName];

	actionMethod.call(this, this, requestHandle);
};

Sgood.Controller.prototype.render = function (reqh, data, layout) {
	if (!this.activeAction) {
		throw new Sgood.Exception(503, 'Sgood.Controller.render: no active action');
	}

	var template = this.templates[this.activeAction] = 
		(!this.templates[this.activeAction]) 
			? new Sgood.Template(
				Sgood.Config.viewsDirectory + '/' + 
				this.controllerName + '/' +
				this.activeAction + Sgood.Const.EXT_TEMPLATE
			)
			: this.templates[this.activeAction];

	reqh.response.writeHead(200, { 'Content-Type': 'text/html' });

	if (!this.useLayout) {
		reqh.response.end(template.render(data));
	} else {
		if (layout) {
			layout = new Sgood.Template(
				Sgood.Config.layoutsDirectory + '/' + layout + Sgood.Const.EXT_TEMPLATE
			);
		} else {
			if (!this.defaultLayout || this.defaultLayout.length < 1) {
				throw new Sgood.Exception(503, 'Asking to render with layout but no default layout specified');
			}

			layout = this.defaultLayoutTemplate = (!this.defaultLayoutTemplate)
				? new Sgood.Template(this.defaultLayout)
				: this.defaultLayoutTemplate;
		}

		var layoutData = {
			content: template.render(data)
		};

		if (data && data.title) {
			layoutData.title = data.title;
		}

		reqh.response.end(layout.render(layoutData));
	}
};

Sgood.Controller.prototype.renderJson = function (reqh, obj) {
	reqh.response.writeHead(200, { 'Content-Type': 'application/javascript' });
	reqh.response.end(JSON.stringify(obj));
};
