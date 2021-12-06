import * as orm from 'typeorm';
import { EntityManager } from 'typeorm';

export type ObjectType<T> = { new (): T } | Function;

export class GenericEntity<T> {
	private connection: orm.Connection;
	private type: ObjectType<T>;
	private alias: string;
	private manager: EntityManager;

	constructor(type: ObjectType<T>, alias: string, connection: orm.Connection, manager?: EntityManager) {
		this.type = type;
		this.connection = connection;
		this.alias = alias;
		this.manager = manager;
	}

	public async list(): Promise<orm.SelectQueryBuilder<T>> {
		return this.connection.getRepository(this.type).createQueryBuilder(this.alias);
	}

	public async createOrUpdate(model: any): Promise<T> {
		let manager = this.manager;
		if (!manager) {
			manager = this.connection.manager;
		}
		let createdModel = await manager.getRepository(this.type).save(model);
		return createdModel;
	}

	public async delete(modelId: number) {
		let manager = this.manager;
		if (!manager) {
			manager = this.connection.manager;
		}
		return await manager.getRepository(this.type).delete(modelId);
	}
}
