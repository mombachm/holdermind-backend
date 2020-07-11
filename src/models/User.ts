import { Model, DataTypes } from "sequelize";
import { PostgresConnection } from "../database/PostgresConnection";

export class User extends Model {
  public id!: number;
  public firstName!: string;
  public lastName!: string;
}

User.init(
  {
    // Model attributes are defined here
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      // allowNull defaults to true
    },
  },
  {
    // Other model options go here
    sequelize: PostgresConnection.getInstance().getConnection(), // We need to pass the connection instance
    modelName: "User", // We need to choose the model name
  }
);
