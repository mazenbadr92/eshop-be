import * as orm from "typeorm";
import { ConnectionManager } from "../TYPEOrmEngine/MYSQLConnectionManager";

export class BaseEntity {
    protected connection: orm.Connection;
    private static _instace: BaseEntity;
    constructor() {
        this.initiateConnection();    }

    public static initiateBaseEntity()  {
        if (!this._instace) {
            this._instace = new BaseEntity();
        }
        return this._instace;
    }


    protected async initiateConnection() {
        this.connection = await ConnectionManager.getConnection();
    }

}