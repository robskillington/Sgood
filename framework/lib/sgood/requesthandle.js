
var ejs = require(process.cwd() + '/lib/ejs/ejs.js');
var fs = require('fs');

Sgood = (global.Sgood) ? global.Sgood : Sgood;

Sgood.RequestHandle = exports.Class = function (controller, activeAction, request, response) {
	this.controller = controller;
	this.activeAction = activeAction;	
	this.request = request;
	this.response = response;
};

Sgood.RequestHandle.prototype.render = function (data, layout) {
	this.controller.render(this, data, layout);	
};

Sgood.RequestHandle.prototype.renderJson = function (obj) {
	this.controller.renderJson(this, obj);		
};
