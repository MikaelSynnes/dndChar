import { Skills } from "./Skills";
import { SkillProficiencyBonus } from "../base-stats/SkillProficiencyBonus";
import { AbilityScore } from "src/state/base-stats/AbilityScore";

export class SkillModel {
    constructor(public name: Skills, public coreStat: AbilityScore, public proficiency = SkillProficiencyBonus.none) {
    }
}

