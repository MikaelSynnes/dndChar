import { Skills } from "./Skills";
import { BaseStats } from "../base-stats/BaseStatsModel";
import { SkillModel } from "./SkillsModel";

export class AllSkills {
    acrobatics: SkillModel;
    animalHandling: SkillModel;
    arcana: SkillModel;
    athletics: SkillModel;
    deception: SkillModel;
    history: SkillModel;
    insight: SkillModel;
    intimidation: SkillModel;
    investigation: SkillModel;
    medicine: SkillModel;
    nature: SkillModel;
    perception: SkillModel;
    performance: SkillModel;
    persuasion: SkillModel;
    religion: SkillModel;
    sleightOfHand: SkillModel;
    stelth: SkillModel;
    survival: SkillModel;
    
    constructor(private _baseStats: BaseStats) {
        this.acrobatics = new SkillModel(Skills.acrobatics, _baseStats.dexterity);
        this.animalHandling = new SkillModel(Skills.animalHandling, _baseStats.wisdom);
        this.arcana = new SkillModel(Skills.arcana, _baseStats.intelligence);
        this.athletics = new SkillModel(Skills.athletics, _baseStats.dexterity);
        this.deception = new SkillModel(Skills.deception, _baseStats.charisma);
        this.history = new SkillModel(Skills.history, _baseStats.intelligence);
        this.insight = new SkillModel(Skills.insight, _baseStats.wisdom);
        this.intimidation = new SkillModel(Skills.intimidation, _baseStats.charisma);
        this.investigation = new SkillModel(Skills.investigation, _baseStats.intelligence);
        this.medicine = new SkillModel(Skills.medicine, _baseStats.wisdom);
        this.nature = new SkillModel(Skills.nature, _baseStats.intelligence);
        this.perception = new SkillModel(Skills.perception, _baseStats.wisdom);
        this.performance = new SkillModel(Skills.performance, _baseStats.charisma);
        this.persuasion = new SkillModel(Skills.persuasion, _baseStats.charisma);
        this.religion = new SkillModel(Skills.religion, _baseStats.intelligence);
        this.sleightOfHand = new SkillModel(Skills.sleightOfHand, _baseStats.dexterity);
        this.stelth = new SkillModel(Skills.stelth, _baseStats.dexterity);
        this.survival = new SkillModel(Skills.survival, _baseStats.wisdom);
    }
}