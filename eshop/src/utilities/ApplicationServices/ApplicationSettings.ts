import set = Reflect.set;
import { MySQLConnectionSettings } from './MySQLConnectionSettings';
import * as config from '../../config.json';
import * as mysqlConfig from '../../ormconfig.json';
export class ApplicationSettings {
	public mysqlDatabaseSettings: MySQLConnectionSettings;
	public port: number;

	//get current application settings depending on environment variable
	static get Current(): ApplicationSettings {
		let settings = ApplicationSettings.GetSettings();
		return settings;
	}

	public static isProduction(): boolean {
		return process.env.NODE_ENV && process.env.NODE_ENV !== 'development' ? true : false;
	}

	public static GetSettings() {
		var settings = new ApplicationSettings();
		try {
			const currentSettings = config[process.env.NODE_ENV || 'development'];

			//load general settings
			settings.port = currentSettings.port;

			// load database info
			settings.mysqlDatabaseSettings = new MySQLConnectionSettings({
				host: mysqlConfig.host,
				name: mysqlConfig.database,
				username: mysqlConfig.username,
				password: mysqlConfig.password,
				type: mysqlConfig.type,
				autoSchemaSync: mysqlConfig.synchronize,
			});
		} catch (error) {
			throw TypeError(
				'Invalid configuration path or bad configuration file schema, Please use the sample config file.'
			);
		}
		return settings;
	}
}
