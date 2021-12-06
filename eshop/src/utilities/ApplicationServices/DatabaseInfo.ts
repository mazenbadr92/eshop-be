export class DatabaseInfo {
	host: string;
	name: string;
	username: string;
	password: string;
	type: string;
	constructor(init?: DatabaseInfo) {
		if (init) {
			Object.assign(this, init);
		}
	}
}
