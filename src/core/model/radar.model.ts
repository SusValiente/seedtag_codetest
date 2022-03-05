import { Scan } from "./scan.model";
import { ProtocolTypeEnum } from "./type/protocolType.enum";

export class Radar {
  protocols: ProtocolTypeEnum[];
  scan: Scan[];
}
