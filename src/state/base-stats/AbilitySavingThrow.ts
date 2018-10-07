import { AbilityScore } from "src/state/base-stats/AbilityScore";
import { SkillProficiencyBonus } from "src/state/base-stats/SkillProficiencyBonus";

export class AbilitySavingThrow {
    constructor(public ability: AbilityScore, private _proficiencyScore: number,public proficiencyBonus = SkillProficiencyBonus.none) {
    }

    public get proficiency() {
        if(this.proficiencyBonus == SkillProficiencyBonus.none) {
            return this.ability.getAbilityScoreModifier();
        }
        let bonus = this.ability.getAbilityScoreModifier() + Math.floor(+this.proficiencyBonus * this._proficiencyScore);
        return Math.floor(bonus);
    }
}
