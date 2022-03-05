import { Radar } from "../../src/core/model/radar.model";
import { EnemyType } from "../../src/core/model/type/enemyType.enum";
import { ProtocolTypeEnum } from "../../src/core/model/type/protocolType.enum";
import * as ScanMother from "./scan.mother";

export const radar = (
    protocols: ProtocolTypeEnum[],
    scan: { enemyType: EnemyType, numberOfEnemies: number, coordinateX: number, coordinateY: number, allies?: number}[]
): Radar => {
    const radar: Radar = new Radar();
    radar.protocols = protocols;
    radar.scan = [];
    scan.forEach(scan => {
        radar.scan.push(ScanMother.scan(scan.enemyType, scan.numberOfEnemies, scan.coordinateX, scan.coordinateY))
    });
    return radar;
};