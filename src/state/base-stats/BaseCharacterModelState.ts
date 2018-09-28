import { UpdateAbilityScore } from '../actions/UpdateAbilityScore';
import { State, StateContext, Selector, Action } from '@ngxs/store';
import { BaseStats } from './BaseStatsModel';
import { AbilityScoreBase } from './AbilityScoreBase';
import { AbilityScore } from './AbilityScore';
import { ResetStateModelAction } from '../actions/ResetStateModelAction';
import { AbilitySavingThrow } from './AbilitySavingThrow';
import { UpdateInspirationAction } from '../actions/UpdateInspirationAction';
import { UpdateCharacterLevelAction } from '../actions/UpdateCharacterLevelAction';
import { SkillModel } from '../skills/SkillsModel';
import { Skills } from '../skills/Skills';
import { SkillProficiencyBonus } from './SkillProficiencyBonus';
import { UpdateSkillModelAction } from '../actions/UpdateSkillModelAction';
import { UpdateCharacterAlignmentAction } from '../actions/UpdateCharacterAlignmentAction';
import { HealthInfoInterface } from './HealthInfoInterface';
import { UpdateDamageTakenAction } from '../actions/UpdateDamageTakenAction';
import { UpdateTemporaryHitPointsAction } from '../actions/UpdateTemporaryHitPointsAction';
import { UpdateHealthAction } from '../actions/UpdateHealthAction';
import { UpdateAbilitySavingThrowAction } from '../actions/UpdateAbilitySavingThrow';
import { BaseCharacterModel } from './BaseCharacterModel';
import { SetupSkillsAction } from 'src/state/actions/SetupSkillsAction';
import { SetupSavingThrowsAction } from '../actions/SetupSavingThrowsAction';

@State<BaseCharacterModel>({
    name: 'BaseCharacterModelState',
    defaults: {
        baseStats: new BaseStats(),
        savingThrows: [],
        skills: [],
    }
})
export class BaseCharacterModelState {

    @Selector()
    static getAllState(state: BaseCharacterModel) {
        return state;
    }

    @Selector()
    static getAbilityScores(state: BaseCharacterModel) {
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
    static getProficiencyBonus(state: BaseCharacterModel) {
        return state.baseStats.proficiencyBonus;
    }

    @Selector()
    static getBaseStats(state: BaseCharacterModel) {
        return state.baseStats;
    }

    @Selector()
    static getSkills(state: BaseCharacterModel) {
        return state.skills;
    }

    @Selector()
    static getSavingThrows(state: BaseCharacterModel) {
        return state.savingThrows;
    }

    @Selector()
    static getHealthInfo(state: BaseCharacterModel) {
        return state.baseStats as HealthInfoInterface;
    }

    @Action(UpdateAbilityScore)
    updateAbilityScore(context: StateContext<BaseCharacterModel>, { payload }: UpdateAbilityScore) {
        let state = {...context.getState()};
        let ability = {...state.baseStats[payload.name]} as AbilityScore;
        ability.stat = payload.stat;
        let baseStats = Object.assign(new BaseStats(), state.baseStats);
        baseStats[payload.name] = ability;
        context.patchState({baseStats: baseStats});
    }

    @Action(ResetStateModelAction)
    resetStateModelAction(context: StateContext<BaseCharacterModel>) {
        context.setState(new BaseCharacterModel());
    }

    @Action(UpdateInspirationAction)
    updateInspirationAction(context: StateContext<BaseCharacterModel>, { payload }: UpdateInspirationAction) {
        let state = {...context.getState()};
        let baseStats = Object.assign(new BaseStats(), state.baseStats);
        baseStats.inspiration = payload;
        context.patchState({baseStats: baseStats});
    }

    @Action(UpdateCharacterLevelAction)
    updateCharacterLevelAction(context: StateContext<BaseCharacterModel>, { payload }: UpdateCharacterLevelAction) {
        let state = {...context.getState()};
        let baseStats = Object.assign(new BaseStats(), state.baseStats);
        baseStats.level = payload;
        context.patchState({baseStats: baseStats});
    }

    @Action(UpdateSkillModelAction)
    updateSkillModelAction(context: StateContext<BaseCharacterModel>, { payload }: UpdateSkillModelAction) {
        let state = {...context.getState()};
        let skills = [...state.skills];
        skills[payload.name] = payload;
        context.patchState({skills: skills});
    }

    @Action(UpdateCharacterAlignmentAction)
    updateCharacterAlignmentAction(context: StateContext<BaseCharacterModel>, { payload }: UpdateCharacterAlignmentAction) {
        let state = {...context.getState()};
        let baseStats = Object.assign(new BaseStats(), state.baseStats);
        baseStats.characterAlignment = payload
        context.patchState({baseStats: baseStats});
    }

    @Action(UpdateDamageTakenAction)
    updateDamageTakenAction(context: StateContext<BaseCharacterModel>, { payload }: UpdateDamageTakenAction) {
        let state = {...context.getState()};
        let baseStats = Object.assign(new BaseStats(), state.baseStats);
        baseStats.damagedHitPoints = payload;
        context.patchState({baseStats: baseStats});
    }

    @Action(UpdateTemporaryHitPointsAction)
    updateTemporaryHitPointsAction(context: StateContext<BaseCharacterModel>, { payload }: UpdateTemporaryHitPointsAction) {
        let state = {...context.getState()};
        let baseStats = Object.assign(new BaseStats(), state.baseStats);
        baseStats.tempHitPoints = payload
        context.patchState({baseStats: baseStats});
    }

    @Action(UpdateHealthAction)
    updateHealthAction(context: StateContext<BaseCharacterModel>, { payload }: UpdateHealthAction) {
        let state = {...context.getState()};
        state.baseStats.setHitPoints(payload.value, payload.fullHeal);
        let baseStats = Object.assign(new BaseStats(), state.baseStats);
        baseStats.setHitPoints(payload.value, payload.fullHeal);
        context.patchState({baseStats: baseStats});
    }

    @Action(UpdateAbilitySavingThrowAction)
    updateAbilitySavingThrowAction(context: StateContext<BaseCharacterModel>, { payload }: UpdateAbilitySavingThrowAction) {
        let state = {...context.getState()};
        let abilityIndex = state.savingThrows.findIndex(x => x.ability.name === payload.ability.name);
        let savingThrows = [...state.savingThrows];
        savingThrows[abilityIndex] = payload;
        context.patchState({savingThrows: savingThrows});
    }

    @Action(SetupSkillsAction)
    setupSkillsAction(context: StateContext<BaseCharacterModel>) {
        let state = {...context.getState()};
        let skills: SkillModel[] = [];
        if (state.skills === undefined || state.skills.length === 0) {            
            let proficiency = state.baseStats.proficiencyBonus;
            skills.push(new SkillModel(Skills.acrobatics, state.baseStats.dexterity, proficiency, SkillProficiencyBonus.none));
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

            context.patchState({skills: skills})
        }
    }

    @Action(SetupSavingThrowsAction)
    setupSavingThrowsAction(context: StateContext<BaseCharacterModel>) {
        let state = {...context.getState()};
        
        if(state.savingThrows === undefined || state.savingThrows.length === 0) {
            let savingThrows = [];
            let proficiency = state.baseStats.proficiencyBonus;
            savingThrows.push(new AbilitySavingThrow(state.baseStats.strength, proficiency, SkillProficiencyBonus.half));
            savingThrows.push(new AbilitySavingThrow(state.baseStats.dexterity, proficiency, SkillProficiencyBonus.checked));
            savingThrows.push(new AbilitySavingThrow(state.baseStats.constitution, proficiency, SkillProficiencyBonus.expertice));
            savingThrows.push(new AbilitySavingThrow(state.baseStats.intelligence, proficiency));
            savingThrows.push(new AbilitySavingThrow(state.baseStats.wisdom, proficiency));
            savingThrows.push(new AbilitySavingThrow(state.baseStats.charisma, proficiency));
            
            context.patchState({savingThrows: savingThrows});
        }
    }
}
