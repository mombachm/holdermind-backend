import * as express from "express";
import { RoutingController } from "./abstractRoutingController/RoutingController";
import { StockCodeModel } from "../models/StockCode";

export enum MainRoute {
  RootRoute = "/"
}

export class MainController extends RoutingController {

  protected assembleRoutes(): void {
    this.router.get(MainRoute.RootRoute, this.rootRoute);
  }

  public async rootRoute(req: express.Request, res: express.Response): Promise<void> {
    // const newCode = await (await StockCodeModel.create({ code: "ITSA4" })).save();
    // console.log("Jane's auto-generated ID:", jane.id);
    res.status(200).send({
        message: "Test"
    });
  }
}
