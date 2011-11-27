
Sgood = (global.Sgood) ? global.Sgood : Sgood;

// Singleton
Sgood.Config = exports.Class = {
	// Binding for http server
	bindPort: 8080,
	bindIp: '127.0.0.1',

	// Caching
	cacheTemplates: false,

	// Directories
	controllersDirectory: Sgood.Const.APP_PATH + '/controllers',
	viewsDirectory: Sgood.Const.APP_PATH + '/views',
	layoutsDirectory: Sgood.Const.APP_PATH + '/layouts',

	// Layouts
	useLayoutByDefault: true,
	defaultLayout: Sgood.Const.APP_PATH + '/layouts/default' + Sgood.Const.EXT_TEMPLATE,

	// Models
	useModels: true,
	modelSchema: Sgood.Const.APP_PATH + '/models/schema.js',
	useModelScaffolding: true,
	modelScaffolding: Sgood.Const.APP_PATH + '/models/scaffold.js',
	jugglingDbConf: {
		// Use in memory for development
		adapter: 'memory'
	}
};
