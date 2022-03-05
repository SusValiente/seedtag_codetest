import { Scan } from '../../src/core/model/scan.model';
import { EnemyType } from '../../src/core/model/type/enemyType.enum';
import * as CoordinatesMother from './coordinates.mother';
import * as EnemyMother from './enemies.mother';

export const scan = (enemyType: EnemyType, numberOfEnemies: number, coordinateX: number, coordinateY: number, allies?: number): Scan => {
    const scan: Scan = new Scan();
    scan.coordinates = CoordinatesMother.coordinate(coordinateX, coordinateY);
    scan.enemies = EnemyMother.enemy(numberOfEnemies, enemyType);
    scan.allies = allies;
    return scan;
};
