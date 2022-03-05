import { Coordinate } from "../src/core/model/coordinate.model";
import { Radar } from "../src/core/model/radar.model";
import { EnemyType } from "../src/core/model/type/enemyType.enum";
import { ProtocolTypeEnum } from "../src/core/model/type/protocolType.enum";
import { RadarService } from "../src/core/service/radar.service";
import * as RadarMother from "./model/radar.mother";

describe('Radar service should', () => {
    
    let radarService: RadarService;

    beforeEach(() => {
        radarService = new RadarService();
    });

    it('Should apply closest enemy protocole successfully', () => {
        const protocols: ProtocolTypeEnum[] = [ProtocolTypeEnum.CLOSEST_ENEMIES];
        const radar: Radar = RadarMother.radar(
            protocols, 
            [
                {
                    enemyType: EnemyType.SOLDIER,
                    numberOfEnemies: 10,
                    coordinateX: 0,
                    coordinateY: 10
                }
            ]
        );

        const coordinate: Coordinate = radarService.scanNextEnemy(radar);
        expect(coordinate).toEqual({x: 0, y: 10});
    });
});
