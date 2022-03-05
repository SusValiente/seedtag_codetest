import { Enemy } from '../../src/core/model/enemy.model';
import { EnemyType } from '../../src/core/model/type/enemyType.enum';

export const enemy = (number: number, type: EnemyType): Enemy => {
    const enemy: Enemy = new Enemy();
    enemy.number = number;
    enemy.type = type;
    return enemy;
};
