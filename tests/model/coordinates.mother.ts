import { Coordinate } from "../../src/core/model/coordinate.model";


export const coordinate = (x: number, y: number): Coordinate => {
    const coordinate: Coordinate = new Coordinate();
    coordinate.x = x;
    coordinate.y = y;
    return coordinate;
};

