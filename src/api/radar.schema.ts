import { OpenAPIV3 } from "openapi-types";
import { EnemyType } from "../core/model/type/enemyType.enum";
import { ProtocolTypeEnum } from "../core/model/type/protocolType.enum";


export class RadarSchemas {

    public static readonly COORDINATES_OBJECT: OpenAPIV3.SchemaObject = {
        type: 'object',
        properties: {
           x: {
               type: 'number'
           },
           y: {
               type: 'number'
           }
        }
    };

    public static readonly RADAR_BODY: OpenAPIV3.SchemaObject = {
        type: 'object',
        properties: {
            protocols: {
                type: 'array',
                items: {
                    type: 'string',
                    enum: Object.values(ProtocolTypeEnum)
                }
            },
            scan: {
                type: 'array',
                items: {
                    type: 'object',
                    properties: {
                        coordinates: RadarSchemas.COORDINATES_OBJECT,
                        enemies: {
                            type: 'object',
                            properties: {
                                type: {
                                    type: 'string',
                                    enum: Object.values(EnemyType)
                                },
                                number: {
                                    type: 'number'
                                }
                            }
                        },
                        allies: {
                            type: 'number'
                        }
                    }
                }
            }
        }
    };
}
