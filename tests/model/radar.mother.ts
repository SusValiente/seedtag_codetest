import { Coordinate } from '../../src/core/model/coordinate.model';
import { Enemy } from '../../src/core/model/enemy.model';
import { Radar } from '../../src/core/model/radar.model';
import { EnemyType } from '../../src/core/model/type/enemyType.enum';
import { ProtocolTypeEnum } from '../../src/core/model/type/protocolType.enum';
import * as ScanMother from './scan.mother';

export const radar = (protocols: ProtocolTypeEnum[], scan: { coordinates: Coordinate; enemies: Enemy; allies: number }[]): Radar => {
    const radar: Radar = new Radar();
    radar.protocols = protocols;
    radar.scan = [];
    scan.forEach((scan) => {
        radar.scan.push(ScanMother.scan(scan.enemies.type, scan.enemies.number, scan.coordinates.x, scan.coordinates.y, scan.allies));
    });
    return radar;
};
