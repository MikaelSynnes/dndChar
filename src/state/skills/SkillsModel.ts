import { Skills } from "./Skills";
import { SkillProficiencyBonus } from "../base-stats/SkillProficiencyBonus";
import { AbilityScore } from "../base-stats/AbilityScore";

export class SkillModel {
    SkillProficiencyBonus = SkillProficiencyBonus;
    constructor(public name: Skills, public coreStat: AbilityScore, private _proficiencyScore: number, public proficiencyBonus = SkillProficiencyBonus.none) {
    }

    public get proficiencyScore() {
        if(this.proficiencyBonus == SkillProficiencyBonus.none) {
            return this.coreStat.getAbilityScoreModifier();
        }
        let aSM = this.coreStat.getAbilityScoreModifier();
        let bonus = aSM + Math.floor(+this.proficiencyBonus * this._proficiencyScore);
        return Math.floor(bonus);
    }
}

