import { Request } from "express";

import { Coordinate } from "../core/model/coordinate.model";
import { Scan } from "../core/model/scan.model";
import { RadarService } from "../core/service/radar.service";

export class RadarController {
  private service: RadarService = new RadarService();

  public scanNextEnemy(request: Request): Coordinate {
    const scan: Scan = request.body;
    return this.service.scanNextEnemy(scan);
  }
}
