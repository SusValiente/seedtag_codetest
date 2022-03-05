import { Coordinate } from "../model/coordinate.model";
import { Scan } from "../model/scan.model";

export class RadarService {
  public scanNextEnemy(scan: Scan): Coordinate {
    const coordinate: Coordinate = new Coordinate();
    coordinate.x = 7;
    coordinate.y = 3;
    return coordinate;
  }
}
