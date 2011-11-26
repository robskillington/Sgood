
var fs = require('fs');
var path = require('path');

Sgood = (global.Sgood) ? global.Sgood : Sgood;

Sgood.Tool_Action = exports.Class = function () {

};

Sgood.Tool_Action.prototype.copyTemplateFile = function (tplFilePath, toPath) {
	var tplDirPath = Sgood.Const.CODEGEN_TEMPLATE_PATH;

	if (tplDirPath[tplDirPath.length-1] == '/') {
		tplDirPath = tplDirPath.substr(0, tplDirPath.length-1);
	}

	var filePath = tplDirPath + '/' + tplFilePath;

	var templateFileContents = fs.readFileSync(filePath);

	var pieces = toPath.split('/');
	var resolvedPath = '.';

	if (pieces.length > 1) {
		// Create directories in directory path if necessary
		for (var i = 0; i < pieces.length-1; i++) {
			var bitName = pieces[i];
			resolvedPath += '/' + bitName;
			if (!path.existsSync(resolvedPath)) {
				fs.mkdirSync(resolvedPath, 0755);
			}
		}
	}

	fs.writeFileSync(toPath, templateFileContents);
}


Sgood.Tool_Action.prototype.copyFrameworkFile = function (fwFilePath, toPath) {
	var fwDirPath = Sgood.Const.FRAMEWORK_BASE_PATH;

	if (fwDirPath[fwDirPath.length-1] == '/') {
		fwDirPath = fwDirPath.substr(0, fwDirPath.length-1);
	}

	var filePath = fwDirPath + '/' + fwFilePath;

	var fwFileContents = fs.readFileSync(filePath);

	var pieces = toPath.split('/');
	var resolvedPath = '.';

	if (pieces.length > 1) {
		// Create directories in directory path if necessary
		for (var i = 0; i < pieces.length-1; i++) {
			var bitName = pieces[i];
			resolvedPath += '/' + bitName;
			if (!path.existsSync(resolvedPath)) {
				fs.mkdirSync(resolvedPath, 0755);
			}
		}
	}

	fs.writeFileSync(toPath, fwFileContents);
}
