import * as orm from "typeorm";
import { ApplicationSettings } from "../utilities/ApplicationServices/ApplicationSettings";

export class ConnectionManager {
    public static connectionInstance: orm.Connection;

    public static async getConnection() {
        if (!this.connectionInstance) {
            this.connectionInstance = await this.Start();
        }
        return this.connectionInstance;
    }
    private static async Start(): Promise<orm.Connection> {

        let config = ApplicationSettings.Current;

        let connection: orm.Connection;
        if (orm.getConnectionManager().has("default")) {
            connection = orm.getConnection("default");
            if (connection.isConnected) {
                return connection;
            }
        }
        connection = <orm.Connection>await orm.createConnection({
            type: "mysql",
            host: config.mysqlDatabaseSettings.host,
            username: config.mysqlDatabaseSettings.username,
            password: config.mysqlDatabaseSettings.password,
            database: config.mysqlDatabaseSettings.name,
            maxQueryExecutionTime: 1000000000,
            entities: [
                __dirname + "/DatabaseModels/*.js",
                __dirname + "/DatabaseModels/*.*.js",
                __dirname + "/DatabaseModels/**/*.js",
            ],
            synchronize: config.mysqlDatabaseSettings.autoSchemaSync,
            logging: ["error"]
        }).catch((error) => {
            console.error(error);
        });

        return connection;
    }
}

