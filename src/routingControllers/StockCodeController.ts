import * as express from "express";
import { RoutingController } from "./abstractRoutingController/RoutingController";
import { StockCodeService } from "../services/StockCodeService";
import { StockCodeModel } from "../models/StockCode";

export enum StockCodeControllerRoute {
  GetUserStockCodes = "/getUserStockCodes"
}

export enum StockCodeControllerParameter {}

export class StockCodeController extends RoutingController {

  protected assembleRoutes(): void {
    this.router.get(StockCodeControllerRoute.GetUserStockCodes, this.getUserStockCodes);
  }

  public async getUserStockCodes(req: express.Request, res: express.Response): Promise<void> {
    const stockCodes = await StockCodeService.getUserStockCodes();
    res.json(stockCodes);
  }

  public async createStockCodeForUser(req: express.Request, res: express.Response): Promise<void> {
    const stockCode = new StockCodeModel(req.body);
    const newStockCode = await stockCode.save();
    res.json(newStockCode);
  }
}
