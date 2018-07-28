export interface HealthInfoInterface {
    maxHitPoints: number;
    tempHitPoints: number;
    damagedHitPoints: number;
    getCurrentHitPoints(): number;
    setHitPoints(newHitPoint: number, fullHeal: boolean): void;
}