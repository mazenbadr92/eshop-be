import * as server from 'routing-controllers';
import 'reflect-metadata';
import * as dependecyInjection from 'typedi';
import { ApplicationSettings } from './utilities/ApplicationServices/ApplicationSettings';
import { CustomAuthorizationChecker } from './utilities/ApplicationServices/AuthorizationChecker';
import { BaseEntity } from './Entities/BaseEntity';

//get global settings
var settings = ApplicationSettings.Current;

// setup routing-controllers to use typedi container.
server.useContainer(dependecyInjection.Container);
//init server
const app = server.createExpressServer({
	authorizationChecker: CustomAuthorizationChecker.validate,
	routePrefix: '/api/',
	defaultErrorHandler: false,
	controllers: [
		__dirname + '/Controllers/*.js'
	],
	middlewares: [__dirname + '/Middlewares/*.js'],
	interceptors: [__dirname + '/Interceptors/*.js'],
});
if (app.get('env') === 'production') {
	app.set('trust proxy', 1);
}
const bodyParser = require('body-parser');
app.use(bodyParser.json({ limit: '500mb' }));
app.use(bodyParser.urlencoded({ limit: '500mb', extended: true, parameterLimit: 100000 }));


const startServer = async () => {
	try {
		//run server
		app.listen(settings.port);
		const databaseConnectionInstance = BaseEntity.initiateBaseEntity();
		console.log(`eshop api instance is working on ports ${settings.port}`)
	} catch (error) {
		console.error(`error occured ${error}`)
		process.exit(1);
	}
};
startServer();

module.exports = app;
