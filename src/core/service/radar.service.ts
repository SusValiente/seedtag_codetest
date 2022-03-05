import * as _ from 'lodash';

import { Coordinate } from '../model/coordinate.model';
import { Radar } from '../model/radar.model';
import { Scan } from '../model/scan.model';
import { EnemyType } from '../model/type/enemyType.enum';
import { ProtocolTypeEnum } from '../model/type/protocolType.enum';
import { validateProtocolInconsistencies } from './validation/protocol.validate';

export class RadarService {
    /**
     * Returns coordinate of the next enemy to eliminate using the
     * protocols specified
     *
     * @param {Radar} radar
     * @return {*}  {Coordinate}
     * @memberof RadarService
     */
    public scanNextEnemy(radar: Radar): Coordinate {
        validateProtocolInconsistencies(radar.protocols);
        const scans: Scan[] = this.sortScansByDistance(radar);
        return this.getNextTargetCoordinate(scans, radar.protocols);
    }

    /**
     * Sorts radar scans by distance depending on the protocol
     *
     * @private
     * @param {Radar} radar
     * @return {*}  {Scan[]}
     * @memberof RadarService
     */
    private sortScansByDistance(radar: Radar): Scan[] {
        const closestEnemiesIsActive: boolean = radar.protocols.includes(ProtocolTypeEnum.CLOSEST_ENEMIES);
        const furthestEnemiesIsActive: boolean = radar.protocols.includes(ProtocolTypeEnum.FURTHEST_ENEMIES);

        let scans: Scan[] = radar.scan;

        if (closestEnemiesIsActive || furthestEnemiesIsActive) {
            scans = _.orderBy(
                scans,
                (scan) => {
                    const coordinate: Coordinate = new Coordinate();
                    coordinate.x = scan.coordinates.x;
                    coordinate.y = scan.coordinates.y;
                    return coordinate.getDistance();
                },
                closestEnemiesIsActive ? 'asc' : 'desc'
            );
        }

        return scans;
    }

    /**
     * Returns next target to be eliminated coordinates
     *
     * @private
     * @param {Scan[]} scans
     * @param {ProtocolTypeEnum[]} protocols
     * @return {*}  {Coordinate}
     * @memberof RadarService
     */
    private getNextTargetCoordinate(scans: Scan[], protocols: ProtocolTypeEnum[]): Coordinate {
        const assistAlliesIsActive: boolean = protocols.includes(ProtocolTypeEnum.ASSIST_ALLIES);
        const avoidCrossfireIsActive: boolean = protocols.includes(ProtocolTypeEnum.AVOID_CROSSFIRE);
        const prioritizeMechIsActive: boolean = protocols.includes(ProtocolTypeEnum.PRIORITIZE_MECH);
        const avoidMechIsActive: boolean = protocols.includes(ProtocolTypeEnum.AVOID_MECH);

        for (const scan of scans) {
            const obeyAssistAlliesProtocole: boolean = (assistAlliesIsActive && !_.isNil(scan.allies)) || !assistAlliesIsActive;
            const obeyAvoidCrossfireProtocole: boolean = (avoidCrossfireIsActive && _.isNil(scan.allies)) || !avoidCrossfireIsActive;
            const obeyPrioritizeMechProtocole: boolean = (prioritizeMechIsActive && scan.enemies.type === EnemyType.MECH) || !prioritizeMechIsActive;
            const obeyAvoidMechProtocole: boolean = (avoidMechIsActive && scan.enemies.type !== EnemyType.MECH) || !avoidMechIsActive;

            if (obeyAssistAlliesProtocole && obeyAvoidCrossfireProtocole && obeyPrioritizeMechProtocole && obeyAvoidMechProtocole) {
                return scan.coordinates;
            }
        }
        return null;
    }
}
