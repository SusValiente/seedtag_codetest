export class Coordinate {
  x: number;
  y: number;

  public getDistance(): number {
    // we assume that droid is placed in (0,0) coordinate
    return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
  }
}
