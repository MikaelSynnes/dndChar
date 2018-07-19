import { UpdateAbilityScore } from './actions/UpdateAbilityScore';

import { State, StateContext, Selector, Action } from '@ngxs/store';
import { BaseStats } from './base-stats/BaseStatsModel';
import { AbilityScoreBase } from './base-stats/AbilityScoreBase';
import { AbilityScore } from './base-stats/AbilityScore';
import { ResetStateModelAction } from './actions/ResetStateModelAction';

export class allStateModel {
    baseStats: BaseStats = new BaseStats();
    loggedInUser: string = "";
}

@State<allStateModel>({
    name: 'allStateModel',
    defaults: {
        baseStats: new BaseStats(),
        loggedInUser: "Test username for it needs a class later"        
    }
})
export class allState {
    @Selector()
    static getAllState(state: allStateModel) {
        return state;
    }

    @Selector()
    static getAbilityScores(state: allStateModel) {
        let s = new AbilityScoreBase();
        s.charisma = state.baseStats.charisma;
        s.constitution = state.baseStats.constitution;
        s.dexterity = state.baseStats.dexterity;
        s.intelligence = state.baseStats.intelligence;
        s.strength = state.baseStats.strength;
        s.wisdom = state.baseStats.wisdom;
        return s;
    }

    @Selector()
    static getBaseStats(state: allStateModel) {
        return state.baseStats;
    }

    @Selector()
    static getPlayerName(state: allStateModel) {
        return state.loggedInUser;
    }

    @Action(UpdateAbilityScore)
    updateAbilityScore(context: StateContext<allStateModel>, {payload}: UpdateAbilityScore) {
        let state = context.getState();
        let ability = state.baseStats[payload.name] as AbilityScore;
        ability.stat = payload.stat;
        state.baseStats[payload.name] = ability;
    }
    
    @Action(ResetStateModelAction)
    ResetStateModelAction(context: StateContext<allStateModel>) {
        let state = context.getState();
        state = new allStateModel();
    }
}

