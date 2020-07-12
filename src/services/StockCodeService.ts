import { StockCodeModel } from "../models/StockCode";

export class StockCodeService {
  public static async getUserStockCodes(): Promise<any> {
    const codes = await StockCodeModel.findAll();
    return codes;
  }

  public static async createUserStockCode(stockCode: string): Promise<any> {
    const stockCodeModel = new StockCodeModel({code: stockCode});
    return await stockCodeModel.save();
  }

  public static async deleteStockCodeFromUser(stockCode: string): Promise<number> {
    return StockCodeModel.destroy({where: {code: stockCode}});
  }
}
