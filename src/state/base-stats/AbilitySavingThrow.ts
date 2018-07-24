import { AbilityScore } from "./AbilityScore";
import { SkillProficiencyBonus } from "./SkillProficiencyBonus";

export class AbilitySavingThrow {
    private _proficiencyBonus = SkillProficiencyBonus.none;

    constructor(public ability: AbilityScore) {
    }

    public set proficiencyBonus(proficiency: SkillProficiencyBonus) {
        this._proficiencyBonus = proficiency;
    }

    public get proficiency() {
        let bonus = this.ability.getAbilityScoreModifier() * this._proficiencyBonus;

        return bonus;
    }
}
