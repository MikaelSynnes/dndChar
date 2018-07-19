import { SkillProficiencyBonus } from "../base-stats/SkillProficiencyBonus";

export class AllSkills {
    acrobatics: SkillModel = new SkillModel(Skills.acrobatics);
    animalHandling: SkillModel = new SkillModel(Skills.animalHandling);
    arcana: SkillModel = new SkillModel(Skills.arcana);
    athletics: SkillModel = new SkillModel(Skills.athletics);
    deception: SkillModel = new SkillModel(Skills.deception);
    history: SkillModel = new SkillModel(Skills.history);
    insight: SkillModel = new SkillModel(Skills.insight);
    intimidation: SkillModel = new SkillModel(Skills.intimidation);
    investigation: SkillModel = new SkillModel(Skills.investigation);
    medicine: SkillModel = new SkillModel(Skills.medicine);
    nature: SkillModel = new SkillModel(Skills.nature);
    perception: SkillModel = new SkillModel(Skills.perception);
    performance: SkillModel = new SkillModel(Skills.performance);
    persuasion: SkillModel = new SkillModel(Skills.persuasion);
    religion: SkillModel = new SkillModel(Skills.religion);
    sleightOfHand: SkillModel = new SkillModel(Skills.sleightOfHand);
    stelth: SkillModel = new SkillModel(Skills.stelth);
    survival: SkillModel = new SkillModel(Skills.survival);
}

export class SkillModel {
    constructor(public name: Skills, public proficiency = SkillProficiencyBonus.none) {
    }
}

export enum Skills {
    acrobatics = "acrobatics",
    animalHandling = "animalHandling",
    arcana = "arcana",
    athletics = "athletics",
    deception = "deception",
    history = "history",
    insight = "insight",
    intimidation = "intimidation",
    investigation = "investigation",
    medicine = "medicine",
    nature = "nature",
    perception = "perception",
    performance = "performance",
    persuasion = "persuasion",
    religion = "religion",
    sleightOfHand = "sleightOfHand",
    stelth = "stelth",
    survival = "survival"
}