import { Sequelize } from "sequelize";

export class PostgresConnection {
  private static instance: PostgresConnection;
  private connection: Sequelize;

  private constructor() {}

  public static getInstance() {
    if (!this.instance) {
      return this.instance = new PostgresConnection();
    }
    return this.instance;
  }

  public connect() {
    this.connection = new Sequelize(process.env.DATABASE_URL);
    try {
      this.connection.authenticate();
      console.log("Connection has been established successfully.");
    } catch (error) {
      console.error("Unable to connect to the database:", error);
    }
  }

  public getConnection(): Sequelize {
    return this.connection;
  }
}

PostgresConnection.getInstance().connect();
