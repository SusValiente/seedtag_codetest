export class Coordinate {
  x: number;
  y: number;

  /**
   * By using the pythagorean theorem returns the distance
   * between the target and the droid
   *
   * @return {*}  {number}
   * @memberof Coordinate
   */
  public getDistance(): number {
    // we assume that droid is placed in (0,0) coordinate
    return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
  }
}
