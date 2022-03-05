import { Coordinate } from '../src/core/model/coordinate.model';
import { Radar } from '../src/core/model/radar.model';
import { EnemyType } from '../src/core/model/type/enemyType.enum';
import { ProtocolTypeEnum } from '../src/core/model/type/protocolType.enum';
import { RadarService } from '../src/core/service/radar.service';
import * as RadarMother from './model/radar.mother';

describe('Radar service should', () => {
    let radarService: RadarService;

    beforeEach(() => {
        radarService = new RadarService();
    });

    it('Should apply avoid mech protocole successfully', () => {
        const protocols: ProtocolTypeEnum[] = [ProtocolTypeEnum.AVOID_MECH];
        const radar: Radar = RadarMother.radar(protocols, [
            {
                coordinates: {
                    x: 0,
                    y: 40
                },
                enemies: {
                    type: EnemyType.SOLDIER,
                    number: 10
                }
            },
            {
                coordinates: {
                    x: 0,
                    y: 80
                },
                enemies: {
                    type: EnemyType.MECH,
                    number: 10
                }
            }
        ] as any);

        const coordinate: Coordinate = radarService.scanNextEnemy(radar);
        expect(coordinate).toEqual({ x: 0, y: 40 });
    });

    it('Should apply prioritize mech protocole successfully', () => {
        const protocols: ProtocolTypeEnum[] = [ProtocolTypeEnum.PRIORITIZE_MECH];
        const radar: Radar = RadarMother.radar(protocols, [
            {
                coordinates: {
                    x: 0,
                    y: 40
                },
                enemies: {
                    type: EnemyType.SOLDIER,
                    number: 10
                }
            },
            {
                coordinates: {
                    x: 0,
                    y: 80
                },
                enemies: {
                    type: EnemyType.MECH,
                    number: 10
                }
            }
        ] as any);

        const coordinate: Coordinate = radarService.scanNextEnemy(radar);
        expect(coordinate).toEqual({ x: 0, y: 80 });
    });

    it('Should apply closest enemies protocole successfully', () => {
        const protocols: ProtocolTypeEnum[] = [ProtocolTypeEnum.CLOSEST_ENEMIES];
        const radar: Radar = RadarMother.radar(protocols, [
            {
                coordinates: {
                    x: 89,
                    y: 13
                },
                enemies: {
                    type: EnemyType.MECH,
                    number: 1
                }
            },
            {
                coordinates: {
                    x: 11,
                    y: 35
                },
                enemies: {
                    type: EnemyType.SOLDIER,
                    number: 10
                }
            },
            {
                coordinates: {
                    x: 19,
                    y: 49
                },
                enemies: {
                    type: EnemyType.SOLDIER,
                    number: 10
                }
            },
            {
                coordinates: {
                    x: 38,
                    y: 21
                },
                enemies: {
                    type: EnemyType.SOLDIER,
                    number: 30
                }
            },
            {
                coordinates: {
                    x: 10,
                    y: 39
                },
                enemies: {
                    type: EnemyType.SOLDIER,
                    number: 30
                }
            },
            {
                coordinates: {
                    x: 13,
                    y: 38
                },
                enemies: {
                    type: EnemyType.SOLDIER,
                    number: 15
                }
            },
            {
                coordinates: {
                    x: 13,
                    y: 15
                },
                enemies: {
                    type: EnemyType.SOLDIER,
                    number: 60
                }
            },
            {
                coordinates: {
                    x: 30,
                    y: 19
                },
                enemies: {
                    type: EnemyType.SOLDIER,
                    number: 40
                }
            },
            {
                coordinates: {
                    x: 3,
                    y: 10
                },
                enemies: {
                    type: EnemyType.SOLDIER,
                    number: 20
                }
            },
            {
                coordinates: {
                    x: 15,
                    y: 19
                },
                enemies: {
                    type: EnemyType.SOLDIER,
                    number: 80
                }
            },
            {
                coordinates: {
                    x: 22,
                    y: 15
                },
                enemies: {
                    type: EnemyType.SOLDIER,
                    number: 10
                }
            },
            {
                coordinates: {
                    x: 10,
                    y: 19
                },
                enemies: {
                    type: EnemyType.SOLDIER,
                    number: 10
                }
            },
            {
                coordinates: {
                    x: 94,
                    y: 11
                },
                enemies: {
                    type: EnemyType.SOLDIER,
                    number: 10
                }
            },
            {
                coordinates: {
                    x: 10,
                    y: 19
                },
                enemies: {
                    type: EnemyType.SOLDIER,
                    number: 30
                }
            }
        ] as any);

        const coordinate: Coordinate = radarService.scanNextEnemy(radar);
        expect(coordinate).toEqual({ x: 3, y: 10 });
    });

    it('Should apply furthest enemies protocole successfully', () => {
        const protocols: ProtocolTypeEnum[] = [ProtocolTypeEnum.FURTHEST_ENEMIES];
        const radar: Radar = RadarMother.radar(protocols, [
            {
                coordinates: {
                    x: 89,
                    y: 13
                },
                enemies: {
                    type: EnemyType.MECH,
                    number: 1
                }
            },
            {
                coordinates: {
                    x: 11,
                    y: 35
                },
                enemies: {
                    type: EnemyType.SOLDIER,
                    number: 10
                }
            },
            {
                coordinates: {
                    x: 19,
                    y: 49
                },
                enemies: {
                    type: EnemyType.SOLDIER,
                    number: 10
                }
            },
            {
                coordinates: {
                    x: 38,
                    y: 21
                },
                enemies: {
                    type: EnemyType.SOLDIER,
                    number: 30
                }
            },
            {
                coordinates: {
                    x: 10,
                    y: 39
                },
                enemies: {
                    type: EnemyType.SOLDIER,
                    number: 30
                }
            },
            {
                coordinates: {
                    x: 13,
                    y: 38
                },
                enemies: {
                    type: EnemyType.SOLDIER,
                    number: 15
                }
            }
        ] as any);

        const coordinate: Coordinate = radarService.scanNextEnemy(radar);
        expect(coordinate).toEqual({ x: 89, y: 13 });
    });

    it('Should apply assists allies protocole successfully', () => {
        const protocols: ProtocolTypeEnum[] = [ProtocolTypeEnum.ASSIST_ALLIES];
        const radar: Radar = RadarMother.radar(protocols, [
            {
                coordinates: {
                    x: 5,
                    y: 35
                },
                enemies: {
                    type: EnemyType.SOLDIER,
                    number: 15
                },
                allies: 3
            },
            {
                coordinates: {
                    x: 35,
                    y: 5
                },
                enemies: {
                    type: EnemyType.SOLDIER,
                    number: 15
                }
            }
        ] as any);

        const coordinate: Coordinate = radarService.scanNextEnemy(radar);
        expect(coordinate).toEqual({ x: 5, y: 35 });
    });

    it('Should apply avoid crossfire protocole successfully', () => {
        const protocols: ProtocolTypeEnum[] = [ProtocolTypeEnum.AVOID_CROSSFIRE];
        const radar: Radar = RadarMother.radar(protocols, [
            {
                coordinates: {
                    x: 5,
                    y: 35
                },
                enemies: {
                    type: EnemyType.SOLDIER,
                    number: 10
                },
                allies: 3
            },
            {
                coordinates: {
                    x: 35,
                    y: 5
                },
                enemies: {
                    type: EnemyType.SOLDIER,
                    number: 15
                }
            }
        ] as any);

        const coordinate: Coordinate = radarService.scanNextEnemy(radar);
        expect(coordinate).toEqual({ x: 35, y: 5 });
    });

    it('Should apply closest enemies & avoid mech protocole successfully', () => {
        const protocols: ProtocolTypeEnum[] = [ProtocolTypeEnum.CLOSEST_ENEMIES, ProtocolTypeEnum.AVOID_MECH];
        const radar: Radar = RadarMother.radar(protocols, [
            {
                coordinates: {
                    x: 0,
                    y: 1
                },
                enemies: {
                    type: EnemyType.MECH,
                    number: 15
                },
                allies: 3
            },
            {
                coordinates: {
                    x: 0,
                    y: 10
                },
                enemies: {
                    type: EnemyType.SOLDIER,
                    number: 20
                }
            },
            {
                coordinates: {
                    x: 0,
                    y: 99
                },
                enemies: {
                    type: EnemyType.MECH,
                    number: 15
                },
                allies: 3
            }
        ] as any);

        const coordinate: Coordinate = radarService.scanNextEnemy(radar);
        expect(coordinate).toEqual({ x: 0, y: 10 });
    });

    it('Should apply closest enemies & avoid mech protocole successfully', () => {
        const protocols: ProtocolTypeEnum[] = [ProtocolTypeEnum.CLOSEST_ENEMIES, ProtocolTypeEnum.AVOID_MECH];
        const radar: Radar = RadarMother.radar(protocols, [
            {
                coordinates: {
                    x: 0,
                    y: 1
                },
                enemies: {
                    type: EnemyType.MECH,
                    number: 15
                },
                allies: 3
            },
            {
                coordinates: {
                    x: 0,
                    y: 10
                },
                enemies: {
                    type: EnemyType.SOLDIER,
                    number: 15
                }
            },
            {
                coordinates: {
                    x: 0,
                    y: 99
                },
                enemies: {
                    type: EnemyType.MECH,
                    number: 15
                }
            }
        ] as any);

        const coordinate: Coordinate = radarService.scanNextEnemy(radar);
        expect(coordinate).toEqual({ x: 0, y: 10 });
    });

    it('Should apply furthest enemies & avoid mech protocole successfully', () => {
        const protocols: ProtocolTypeEnum[] = [ProtocolTypeEnum.FURTHEST_ENEMIES, ProtocolTypeEnum.AVOID_MECH];
        const radar: Radar = RadarMother.radar(protocols, [
            {
                coordinates: {
                    x: 0,
                    y: 1
                },
                enemies: {
                    type: EnemyType.MECH,
                    number: 15
                },
                allies: 3
            },
            {
                coordinates: {
                    x: 0,
                    y: 10
                },
                enemies: {
                    type: EnemyType.SOLDIER,
                    number: 15
                }
            },
            {
                coordinates: {
                    x: 0,
                    y: 99
                },
                enemies: {
                    type: EnemyType.MECH,
                    number: 15
                },
                allies: 3
            }
        ] as any);

        const coordinate: Coordinate = radarService.scanNextEnemy(radar);
        expect(coordinate).toEqual({ x: 0, y: 10 });
    });

    it('Should apply closest enemies & prioritize mech protocole successfully', () => {
        const protocols: ProtocolTypeEnum[] = [ProtocolTypeEnum.CLOSEST_ENEMIES, ProtocolTypeEnum.PRIORITIZE_MECH];
        const radar: Radar = RadarMother.radar(protocols, [
            {
                enemies: {
                    number: 1,
                    type: EnemyType.MECH
                },
                coordinates: {
                    x: 89,
                    y: 13
                }
            },
            {
                enemies: {
                    type: EnemyType.SOLDIER,
                    number: 10
                },
                allies: 3,
                coordinates: {
                    y: 35,
                    x: 11
                }
            },
            {
                enemies: {
                    type: EnemyType.SOLDIER,
                    number: 10
                },
                coordinates: {
                    y: 49,
                    x: 19
                }
            },
            {
                enemies: {
                    type: EnemyType.SOLDIER,
                    number: 30
                },
                allies: 5,
                coordinates: {
                    y: 21,
                    x: 38
                }
            },
            {
                enemies: {
                    number: 30,
                    type: EnemyType.SOLDIER
                },
                allies: 8,
                coordinates: {
                    x: 10,
                    y: 39
                }
            },
            {
                enemies: {
                    type: EnemyType.SOLDIER,
                    number: 15
                },
                coordinates: {
                    x: 13,
                    y: 38
                }
            }
        ] as any);

        const coordinate: Coordinate = radarService.scanNextEnemy(radar);
        expect(coordinate).toEqual({ x: 89, y: 13 });
    });

    it('Should apply closest enemies & prioritize mech protocole successfully', () => {
        const protocols: ProtocolTypeEnum[] = [ProtocolTypeEnum.CLOSEST_ENEMIES, ProtocolTypeEnum.PRIORITIZE_MECH];
        const radar: Radar = RadarMother.radar(protocols, [
            {
                enemies: {
                    number: 1,
                    type: EnemyType.MECH
                },
                coordinates: {
                    x: 89,
                    y: 13
                }
            },
            {
                enemies: {
                    type: EnemyType.SOLDIER,
                    number: 10
                },
                allies: 3,
                coordinates: {
                    y: 35,
                    x: 11
                }
            },
            {
                enemies: {
                    type: EnemyType.SOLDIER,
                    number: 10
                },
                coordinates: {
                    y: 49,
                    x: 19
                }
            },
            {
                enemies: {
                    type: EnemyType.SOLDIER,
                    number: 30
                },
                allies: 5,
                coordinates: {
                    y: 21,
                    x: 38
                }
            },
            {
                enemies: {
                    number: 30,
                    type: EnemyType.SOLDIER
                },
                allies: 8,
                coordinates: {
                    x: 10,
                    y: 39
                }
            },
            {
                enemies: {
                    type: EnemyType.SOLDIER,
                    number: 15
                },
                coordinates: {
                    x: 13,
                    y: 38
                }
            }
        ] as any);

        const coordinate: Coordinate = radarService.scanNextEnemy(radar);
        expect(coordinate).toEqual({ x: 89, y: 13 });
    });

    it('Should apply closest enemies & prioritize mech & avoid crossfire protocole successfully', () => {
        const protocols: ProtocolTypeEnum[] = [ProtocolTypeEnum.CLOSEST_ENEMIES, ProtocolTypeEnum.PRIORITIZE_MECH, ProtocolTypeEnum.AVOID_CROSSFIRE];
        const radar: Radar = RadarMother.radar(protocols, [
            {
                enemies: {
                    number: 1,
                    type: EnemyType.MECH
                },
                coordinates: {
                    x: 89,
                    y: 13
                }
            },
            {
                enemies: {
                    type: EnemyType.SOLDIER,
                    number: 10
                },
                allies: 3,
                coordinates: {
                    y: 35,
                    x: 11
                }
            },
            {
                enemies: {
                    type: EnemyType.SOLDIER,
                    number: 10
                },
                coordinates: {
                    y: 49,
                    x: 19
                }
            },
            {
                enemies: {
                    type: EnemyType.SOLDIER,
                    number: 30
                },
                allies: 5,
                coordinates: {
                    y: 21,
                    x: 38
                }
            },
            {
                enemies: {
                    number: 30,
                    type: EnemyType.SOLDIER
                },
                allies: 8,
                coordinates: {
                    x: 10,
                    y: 39
                }
            },
            {
                enemies: {
                    type: EnemyType.SOLDIER,
                    number: 15
                },
                coordinates: {
                    x: 13,
                    y: 38
                }
            },
            {
                enemies: {
                    number: 60,
                    type: EnemyType.SOLDIER
                },
                coordinates: {
                    x: 13,
                    y: 15
                }
            },
            {
                enemies: {
                    number: 40,
                    type: EnemyType.SOLDIER
                },
                coordinates: {
                    y: 19,
                    x: 30
                }
            },
            {
                coordinates: {
                    x: 30,
                    y: 11
                },
                enemies: {
                    number: 20,
                    type: EnemyType.SOLDIER
                }
            },
            {
                coordinates: {
                    x: 15,
                    y: 19
                },
                allies: 11,
                enemies: {
                    number: 80,
                    type: EnemyType.SOLDIER
                }
            },
            {
                coordinates: {
                    x: 22,
                    y: 15
                },
                allies: 13,
                enemies: {
                    number: 10,
                    type: EnemyType.SOLDIER
                }
            },
            {
                coordinates: {
                    y: 19,
                    x: 10
                },
                enemies: {
                    type: EnemyType.SOLDIER,
                    number: 10
                }
            },
            {
                enemies: {
                    type: EnemyType.SOLDIER,
                    number: 10
                },
                allies: 15,
                coordinates: {
                    x: 94,
                    y: 11
                }
            },
            {
                enemies: {
                    number: 30,
                    type: EnemyType.SOLDIER
                },
                coordinates: {
                    x: 10,
                    y: 19
                }
            },
            {
                enemies: {
                    type: EnemyType.SOLDIER,
                    number: 30
                },
                allies: 16,
                coordinates: {
                    x: 90,
                    y: 18
                }
            },
            {
                enemies: {
                    number: 15,
                    type: EnemyType.SOLDIER
                },
                allies: 5,
                coordinates: {
                    y: 51,
                    x: 80
                }
            },
            {
                enemies: {
                    type: EnemyType.SOLDIER,
                    number: 60
                },
                allies: 5,
                coordinates: {
                    y: 91,
                    x: 70
                }
            },
            {
                enemies: {
                    type: EnemyType.SOLDIER,
                    number: 40
                },
                coordinates: {
                    y: 11,
                    x: 30
                }
            },
            {
                enemies: {
                    type: EnemyType.MECH,
                    number: 20
                },
                coordinates: {
                    y: 95,
                    x: 30
                }
            },
            {
                enemies: {
                    type: EnemyType.SOLDIER,
                    number: 80
                },
                allies: 8,
                coordinates: {
                    x: 1,
                    y: 89
                }
            },
            {
                enemies: {
                    number: 10,
                    type: EnemyType.SOLDIER
                },
                coordinates: {
                    x: 3,
                    y: 11
                }
            },
            {
                enemies: {
                    number: 10,
                    type: EnemyType.SOLDIER
                },
                coordinates: {
                    x: 54,
                    y: 19
                }
            },
            {
                enemies: {
                    type: EnemyType.SOLDIER,
                    number: 10
                },
                coordinates: {
                    x: 22,
                    y: 38
                }
            },
            {
                enemies: {
                    number: 30,
                    type: EnemyType.SOLDIER
                },
                allies: 10,
                coordinates: {
                    y: 10,
                    x: 3
                }
            },
            {
                coordinates: {
                    x: 43,
                    y: 13
                },
                enemies: {
                    number: 30,
                    type: EnemyType.SOLDIER
                }
            },
            {
                enemies: {
                    number: 15,
                    type: EnemyType.SOLDIER
                },
                allies: 10,
                coordinates: {
                    x: 51,
                    y: 13
                }
            },
            {
                coordinates: {
                    y: 30,
                    x: 91
                },
                allies: 10,
                enemies: {
                    type: EnemyType.SOLDIER,
                    number: 60
                }
            },
            {
                coordinates: {
                    y: 30,
                    x: 11
                },
                enemies: {
                    number: 40,
                    type: EnemyType.SOLDIER
                }
            },
            {
                enemies: {
                    type: EnemyType.SOLDIER,
                    number: 20
                },
                coordinates: {
                    x: 91,
                    y: 15
                }
            },
            {
                enemies: {
                    number: 80,
                    type: EnemyType.SOLDIER
                },
                allies: 10,
                coordinates: {
                    y: 22,
                    x: 51
                }
            },
            {
                coordinates: {
                    x: 91,
                    y: 10
                },
                enemies: {
                    number: 10,
                    type: EnemyType.MECH
                }
            },
            {
                enemies: {
                    type: EnemyType.SOLDIER,
                    number: 10
                },
                coordinates: {
                    x: 11,
                    y: 84
                }
            },
            {
                enemies: {
                    number: 10,
                    type: EnemyType.SOLDIER
                },
                allies: 10,
                coordinates: {
                    x: 91,
                    y: 65
                }
            },
            {
                enemies: {
                    number: 30,
                    type: EnemyType.MECH
                },
                allies: 3,
                coordinates: {
                    y: 53,
                    x: 81
                }
            },
            {
                coordinates: {
                    y: 70,
                    x: 15
                },
                allies: 4,
                enemies: {
                    type: EnemyType.SOLDIER,
                    number: 30
                }
            },
            {
                enemies: {
                    type: EnemyType.SOLDIER,
                    number: 15
                },
                allies: 4,
                coordinates: {
                    y: 83,
                    x: 19
                }
            },
            {
                enemies: {
                    number: 60,
                    type: EnemyType.SOLDIER
                },
                coordinates: {
                    y: 46,
                    x: 11
                }
            },
            {
                coordinates: {
                    y: 26,
                    x: 59
                },
                allies: 6,
                enemies: {
                    type: EnemyType.SOLDIER,
                    number: 40
                }
            },
            {
                enemies: {
                    number: 20,
                    type: EnemyType.SOLDIER
                },
                allies: 6,
                coordinates: {
                    x: 98,
                    y: 57
                }
            },
            {
                enemies: {
                    number: 80,
                    type: EnemyType.MECH
                },
                coordinates: {
                    x: 11,
                    y: 58
                }
            },
            {
                enemies: {
                    number: 10,
                    type: EnemyType.MECH
                },
                coordinates: {
                    x: 91,
                    y: 39
                }
            },
            {
                coordinates: {
                    x: 83,
                    y: 37
                },
                enemies: {
                    type: EnemyType.MECH,
                    number: 10
                }
            },
            {
                enemies: {
                    type: EnemyType.MECH,
                    number: 1
                },
                allies: 6,
                coordinates: {
                    y: 11,
                    x: 0
                }
            }
        ] as any);

        const coordinate: Coordinate = radarService.scanNextEnemy(radar);
        expect(coordinate).toEqual({ x: 11, y: 58 });
    });
});
