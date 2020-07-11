import * as express from "express";
import { RoutingController } from "./abstractRoutingController/RoutingController";
import { User } from "../models/User";

export enum MainRoute {
  RootRoute = "/"
}

export class MainController extends RoutingController {

  protected assembleRoutes(): void {
    this.router.get(MainRoute.RootRoute, this.rootRoute);
  }

  public async rootRoute(req: express.Request, res: express.Response): Promise<void> {
    const jane = await User.create({ firstName: "Jane", lastName: "Doe" });
    console.log("Jane's auto-generated ID:", jane.id);
    res.status(200).send({
        message: "GET request test!!"
    });
  }
}
