import { Application, Request, Response } from 'express';
import { ValidationError, Validator } from 'express-json-validator-middleware';

import { RadarController } from './radar.controller';
import { RadarSchemas } from './radar.schema';

const validator = new Validator({ allErrors: true, removeAdditional: true, coerceTypes: true, nullable: true });
const scanController: RadarController = new RadarController();

export const droidRoutes = (app: Application): void => {
    app.post('/radar', validator.validate({ body: RadarSchemas.RADAR_BODY }), (req: Request, res: Response) => {
        return res.status(200).send(scanController.scanNextEnemy(req));
    });

    app.use((error: any, request: Request, response: Response, next: any) => {
        if (error instanceof ValidationError) {
            response.status(400).send(error.validationErrors);
            next();
        } else {
            next(error);
        }
    });
};
