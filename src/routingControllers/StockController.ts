import * as express from "express";
import { RoutingController } from "./abstractRoutingController/RoutingController";
import { StockService } from "../services/StockService";

export enum StockControllerRoute {
  getStockMainInfo = "/getStockMainInfo",
  GetStocksInfo = "/getStocksInfo"
}

export enum StockControllerParameter {
  StockCode = "stockCode",
  StocksCode = "stocksCode"
}

export class StockController extends RoutingController {

  protected assembleRoutes(): void {
    this.router.get(StockControllerRoute.GetStocksInfo, this.getStocksInfo);
    this.router.get(StockControllerRoute.getStockMainInfo, this.getStockMainInfo);
  }

  public async getStocksInfo(req: express.Request, res: express.Response): Promise<void> {
    res.json({});
  }

  public async getStockMainInfo(req: express.Request, res: express.Response): Promise<void> {
    res.json({"test": "Test"});
  }
}
