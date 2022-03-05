import { Application, Request, Response } from "express";

import { RadarController } from "./radar.controller";

const scanController: RadarController = new RadarController();

export const droidRoutes = (app: Application): void => {
  app.post("/radar", (req: Request, res: Response) => {
    return res.status(200).send(scanController.scanNextEnemy(req));
  });
};
