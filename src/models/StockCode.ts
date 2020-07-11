import { Model, DataTypes } from "sequelize";
import { PostgresConnection } from "../database/PostgresConnection";

export class StockCodeModel extends Model {
  public id!: number;
  public code: string;
}

StockCodeModel.init(
  {
    code: {
      type: DataTypes.STRING,
      allowNull: false
    },
  },
  {
    sequelize: PostgresConnection.getInstance().getConnection(), // We need to pass the connection instance
    modelName: "StockCode", // We need to choose the model name
    freezeTableName: true,
  }
);

StockCodeModel.sync({ alter: true });
