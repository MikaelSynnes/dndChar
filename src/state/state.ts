import { UpdateAbilityScore } from './actions/UpdateAbilityScore';

import { State, StateContext, Selector, Action } from '@ngxs/store';
import { BaseStats } from './base-stats/BaseStatsModel';
import { AbilityScoreBase } from './base-stats/AbilityScoreBase';
import { AbilityScore } from './base-stats/AbilityScore';
import { ResetStateModelAction } from './actions/ResetStateModelAction';
import { AbilitySavingThrow } from './base-stats/AbilitySavingThrow';
import { UpdateInspirationAction } from './actions/UpdateInspirationAction';

export class allStateModel {
    baseStats: BaseStats = new BaseStats();
    loggedInUser: string = "";
    savingThrows: Array<AbilitySavingThrow>;
}

@State<allStateModel>({
    name: 'allStateModel',
    defaults: {
        baseStats: new BaseStats(),
        loggedInUser: "Test username for it needs a class later",
        savingThrows: []       
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
    static getProficiencyBonus(state: allStateModel) {
        return state.baseStats.proficiencyBonus;
    }

    @Selector()
    static getBaseStats(state: allStateModel) {
        return state.baseStats;
    }

    @Selector()
    static getPlayerName(state: allStateModel) {
        return state.loggedInUser;
    }

    @Selector()
    static getSavingThrows(state: allStateModel) {
        let savingThrows = [];
        let proficiency = state.baseStats.proficiencyBonus;
        savingThrows.push(new AbilitySavingThrow(state.baseStats.strength, proficiency));
        savingThrows.push(new AbilitySavingThrow(state.baseStats.dexterity, proficiency));
        savingThrows.push(new AbilitySavingThrow(state.baseStats.constitution, proficiency));
        savingThrows.push(new AbilitySavingThrow(state.baseStats.intelligence, proficiency));
        savingThrows.push(new AbilitySavingThrow(state.baseStats.wisdom, proficiency));
        savingThrows.push(new AbilitySavingThrow(state.baseStats.charisma, proficiency));
        return savingThrows;
    }

    @Action(UpdateAbilityScore)
    updateAbilityScore(context: StateContext<allStateModel>, {payload}: UpdateAbilityScore) {
        let state = context.getState();
        let ability = state.baseStats[payload.name] as AbilityScore;
        ability.stat = payload.stat;
        state.baseStats[payload.name] = ability;
        context.setState(state);
    }
    
    @Action(ResetStateModelAction)
    resetStateModelAction(context: StateContext<allStateModel>) {
        let state = context.getState();
        state = new allStateModel();
        context.setState(state);
    }

    @Action(UpdateInspirationAction)
    UpdateInspirationAction(context: StateContext<allStateModel>, {payload}: UpdateInspirationAction) {
        let state = context.getState();
        state.baseStats.inspiration = payload;
        context.setState(state);
    }
}

