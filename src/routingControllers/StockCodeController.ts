import * as express from "express";
import { RoutingController } from "./abstractRoutingController/RoutingController";
import { StockCodeService } from "../services/StockCodeService";

export enum StockCodeControllerRoute {
  GetUserStockCodes = "/getUserStockCodes",
  CreateStockCodeForUser = "/createStockCodeForUser",
  DeleteStockCodeFromUser = "/deleteStockCodeFromUser"
}

export enum StockCodeControllerParameter {}

export class StockCodeController extends RoutingController {

  protected assembleRoutes(): void {
    this.router.get(StockCodeControllerRoute.GetUserStockCodes, this.getUserStockCodes);
    this.router.post(StockCodeControllerRoute.CreateStockCodeForUser, this.createStockCodeForUser);
    this.router.post(StockCodeControllerRoute.DeleteStockCodeFromUser, this.deleteStockCodeFromUser);
  }

  public async getUserStockCodes(req: express.Request, res: express.Response): Promise<void> {
    const stockCodes = await StockCodeService.getUserStockCodes();
    res.json(stockCodes);
  }

  public async createStockCodeForUser(req: express.Request, res: express.Response): Promise<void> {
    const newStockCode = await StockCodeService.createUserStockCode(req.body.code);
    res.json(newStockCode);
  }

  public async deleteStockCodeFromUser(req: express.Request, res: express.Response): Promise<void> {
    const deletedCont = await StockCodeService.deleteStockCodeFromUser(req.body.code);
    res.json({ deleted: Boolean(deletedCont) });
  }
}
