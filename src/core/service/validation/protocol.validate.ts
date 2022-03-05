import { ProtocolTypeEnum } from '../../model/type/protocolType.enum';

export function validateProtocolInconsistencies(protocols: ProtocolTypeEnum[]): void {
    if (protocols.includes(ProtocolTypeEnum.ASSIST_ALLIES) && protocols.includes(ProtocolTypeEnum.AVOID_CROSSFIRE)) {
        throw new Error(`Incompatible combat protocols ${ProtocolTypeEnum.ASSIST_ALLIES}/${ProtocolTypeEnum.AVOID_CROSSFIRE}`);
    }

    if (protocols.includes(ProtocolTypeEnum.CLOSEST_ENEMIES) && protocols.includes(ProtocolTypeEnum.FURTHEST_ENEMIES)) {
        throw new Error(`Incompatible combat protocols ${ProtocolTypeEnum.CLOSEST_ENEMIES}/${ProtocolTypeEnum.FURTHEST_ENEMIES}`);
    }

    if (protocols.includes(ProtocolTypeEnum.PRIORITIZE_MECH) && protocols.includes(ProtocolTypeEnum.AVOID_MECH)) {
        throw new Error(`Incompatible combat protocols ${ProtocolTypeEnum.PRIORITIZE_MECH}/${ProtocolTypeEnum.AVOID_MECH}`);
    }
}
