import { DatabaseInfo } from './DatabaseInfo';

export class MySQLConnectionSettings extends DatabaseInfo {
	autoSchemaSync?: boolean;
	constructor(init?: MySQLConnectionSettings) {
		super();
		if (init) {
			Object.assign(this, init);
		}
	}
}
