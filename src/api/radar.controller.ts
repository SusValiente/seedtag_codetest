import { Request } from "express";

import { Coordinate } from "../core/model/coordinate.model";
import { Radar } from "../core/model/radar.model";
import { RadarService } from "../core/service/radar.service";

export class RadarController {
  private service: RadarService = new RadarService();

  /**
   * Returns the coordinate of the next enemy to be eliminated
   * following the protocol rules specified
   *
   * @param {Request} request
   * @return {*}  {Coordinate}
   * @memberof RadarController
   */
  public scanNextEnemy(request: Request): Coordinate {
    const radar: Radar = request.body;
    return this.service.scanNextEnemy(radar);
  }
}
