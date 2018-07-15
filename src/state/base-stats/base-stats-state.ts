import { State, Selector } from '@ngxs/store';
import { BaseStats } from './base-stats-model';

@State<BaseStats>({
    name: "baseStats"
})
export class BaseStatsState {
    @Selector()
    static getBaseStats(state: BaseStats) {
        return state;
    }
}