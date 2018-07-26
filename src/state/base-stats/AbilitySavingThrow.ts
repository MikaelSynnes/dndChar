import { AbilityScore } from "./AbilityScore";
import { SkillProficiencyBonus } from "./SkillProficiencyBonus";

export class AbilitySavingThrow {
    private _proficiencyBonus = SkillProficiencyBonus.none;

    constructor(public ability: AbilityScore, private _proficiencyScore: number) {
    }

    public set proficiencyBonus(proficiency: SkillProficiencyBonus) {
        this._proficiencyBonus = proficiency;
    }

    public get proficiencyBonus() {
        return this._proficiencyBonus;
    }

    public get proficiency() {
        if(this._proficiencyBonus == SkillProficiencyBonus.none) {
            return this.ability.getAbilityScoreModifier();
        }
        let bonus = this.ability.getAbilityScoreModifier() + Math.floor(+this._proficiencyBonus * this._proficiencyScore);
        return Math.floor(bonus);
    }
}
