import { State, Action, StateContext, Selector } from '@ngxs/store';
import { BaseStats } from './base-stats/BaseStatsModel';

export class allStateModel {
    baseStats: BaseStats;
}

@State<allStateModel>({
    name: 'allStateModel',
    defaults: {
        baseStats: new BaseStats()
    }
})
export class allState {
    @Selector()
    static getAllState(state: allStateModel) {
        return state;
    }

    @Selector()
    static getBaseStats(state: allStateModel) {
        return state.baseStats;
    }
}