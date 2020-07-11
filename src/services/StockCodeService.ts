import { StockCodeModel } from "../models/StockCode";

export class StockCodeService {
  public static async getUserStockCodes(): Promise<any> {
    const codes = await StockCodeModel.findAll();
    return codes;
  }
}
