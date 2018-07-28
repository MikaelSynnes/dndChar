import { UpdateAbilityScore } from './actions/UpdateAbilityScore';
import { State, StateContext, Selector, Action } from '@ngxs/store';
import { BaseStats } from './base-stats/BaseStatsModel';
import { AbilityScoreBase } from './base-stats/AbilityScoreBase';
import { AbilityScore } from './base-stats/AbilityScore';
import { ResetStateModelAction } from './actions/ResetStateModelAction';
import { AbilitySavingThrow } from './base-stats/AbilitySavingThrow';
import { UpdateInspirationAction } from './actions/UpdateInspirationAction';
import { UpdateCharacterLevelAction } from './actions/UpdateCharacterLevelAction';
import { SkillModel } from './skills/SkillsModel';
import { Skills } from './skills/Skills';
import { SkillProficiencyBonus } from './base-stats/SkillProficiencyBonus';
import { UpdateSkillModelAction } from './actions/UpdateSkillModelAction';
import { UpdateCharacterAlignmentAction } from './actions/UpdateCharacterAlignmentAction';
import { HealthInfoInterface } from './base-stats/HealthInfoInterface';
import { UpdateDamageTakenAction } from './actions/UpdateDamageTakenAction';
import { UpdateTemporaryHitPointsAction } from './actions/UpdateTemporaryHitPointsAction';
import { UpdateHealthAction } from './actions/UpdateHealthAction';

export class allStateModel {
    baseStats: BaseStats = new BaseStats();
    loggedInUser: string = "Test username for it needs a class later";
    savingThrows: Array<AbilitySavingThrow>;
    skills: Array<SkillModel>;
}

@State<allStateModel>({
    name: 'allStateModel',
    defaults: {
        baseStats: new BaseStats(),
        loggedInUser: "Test username for it needs a class later",
        savingThrows: [],
        skills: [],
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
    static getSkills(state: allStateModel) {
        if(state.skills === undefined || state.skills.length === 0) {
            let skills: SkillModel[] = [];
            let proficiency = state.baseStats.proficiencyBonus;
            skills.push(new SkillModel(Skills.acrobatics, state.baseStats.dexterity,proficiency, SkillProficiencyBonus.none));
            skills.push(new SkillModel(Skills.animalHandling, state.baseStats.wisdom, proficiency, SkillProficiencyBonus.half));
            skills.push(new SkillModel(Skills.arcana, state.baseStats.intelligence, proficiency, SkillProficiencyBonus.checked));
            skills.push(new SkillModel(Skills.athletics, state.baseStats.dexterity, proficiency, SkillProficiencyBonus.expertice));
            skills.push(new SkillModel(Skills.deception, state.baseStats.charisma, proficiency));
            skills.push(new SkillModel(Skills.history, state.baseStats.intelligence, proficiency));
            skills.push(new SkillModel(Skills.insight, state.baseStats.wisdom, proficiency));
            skills.push(new SkillModel(Skills.intimidation, state.baseStats.charisma, proficiency));
            skills.push(new SkillModel(Skills.investigation, state.baseStats.intelligence, proficiency));
            skills.push(new SkillModel(Skills.medicine, state.baseStats.wisdom, proficiency));
            skills.push(new SkillModel(Skills.nature, state.baseStats.intelligence, proficiency));
            skills.push(new SkillModel(Skills.perception, state.baseStats.wisdom, proficiency));
            skills.push(new SkillModel(Skills.performance, state.baseStats.charisma, proficiency));
            skills.push(new SkillModel(Skills.persuasion, state.baseStats.charisma, proficiency));
            skills.push(new SkillModel(Skills.religion, state.baseStats.intelligence, proficiency));
            skills.push(new SkillModel(Skills.sleightOfHand, state.baseStats.dexterity, proficiency));
            skills.push(new SkillModel(Skills.stealth, state.baseStats.dexterity, proficiency));
            skills.push(new SkillModel(Skills.survival, state.baseStats.wisdom, proficiency));
            state.skills = skills;
        }        
        return state.skills;
    }

    @Selector()
    static getSavingThrows(state: allStateModel) {
        let savingThrows = [];
        let proficiency = state.baseStats.proficiencyBonus;
        savingThrows.push(new AbilitySavingThrow(state.baseStats.strength, proficiency, SkillProficiencyBonus.half));
        savingThrows.push(new AbilitySavingThrow(state.baseStats.dexterity, proficiency, SkillProficiencyBonus.checked));
        savingThrows.push(new AbilitySavingThrow(state.baseStats.constitution, proficiency, SkillProficiencyBonus.expertice));
        savingThrows.push(new AbilitySavingThrow(state.baseStats.intelligence, proficiency));
        savingThrows.push(new AbilitySavingThrow(state.baseStats.wisdom, proficiency));
        savingThrows.push(new AbilitySavingThrow(state.baseStats.charisma, proficiency));
        return savingThrows;
    }

    @Selector()
    static getHealthInfo(state: allStateModel){
        return state.baseStats as HealthInfoInterface;
    }

    @Action(UpdateAbilityScore)
    updateAbilityScore(context: StateContext<allStateModel>, { payload }: UpdateAbilityScore) {
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
    updateInspirationAction(context: StateContext<allStateModel>, { payload }: UpdateInspirationAction) {
        let state = context.getState();
        state.baseStats.inspiration = payload;
        context.setState(state);
    }

    @Action(UpdateCharacterLevelAction)
    updateCharacterLevelAction(context: StateContext<allStateModel>, { payload }: UpdateCharacterLevelAction) {
        let state = context.getState();
        state.baseStats.level = payload;
        context.setState(state);
    }

    @Action(UpdateSkillModelAction)
    updateSkillModelAction(context: StateContext<allStateModel>, {payload}: UpdateSkillModelAction) {
        let state = context.getState();
        state.skills[payload.name] = payload;
        context.setState(state);
    }

    @Action(UpdateCharacterAlignmentAction)
    updateCharacterAlignmentAction(context: StateContext<allStateModel>, {payload}: UpdateCharacterAlignmentAction) {
        let state = context.getState();
        state.baseStats.characterAlignment = payload;
        context.setState(state);
    }

    @Action(UpdateDamageTakenAction)
    updateDamageTakenAction(context: StateContext<allStateModel>, {payload}: UpdateDamageTakenAction) {
        let state = context.getState();
        state.baseStats.damagedHitPoints = payload;
        context.setState(state);
    }

    @Action(UpdateTemporaryHitPointsAction)
    updateTemporaryHitPointsAction(context: StateContext<allStateModel>, {payload}: UpdateTemporaryHitPointsAction) {
        let state = context.getState();
        state.baseStats.tempHitPoints = payload;
        context.setState(state);
    }

    @Action(UpdateHealthAction)
    updateHealthAction(context: StateContext<allStateModel>, {payload}: UpdateHealthAction) {
        let state = context.getState();
        state.baseStats.setHitPoints(payload.value, payload.fullHeal);
        context.setState(state);
    }
}

