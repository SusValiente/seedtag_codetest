import { Application, Request, Response } from 'express';

export const droidRoutes = (app: Application): void => {
  app.post("/radar", (req: Request, res: Response) => {
    return res.status(200).send({ status: "Success" });
  });
};
