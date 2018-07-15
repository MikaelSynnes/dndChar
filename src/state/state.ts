import { State, Action, StateContext, Selector } from '@ngxs/store';
import { BaseStats, characterAlignment } from './base-stats/base-stats-model';

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