import { abilityScoreName } from "./abilityScoreName";
// Encapsulation class for a ability score to keep track of it and the bonus it might have.
export class AbilityScore {
    private _coreStat: number = 8;
    private _statBonus: number = 0;
    constructor(public name: abilityScoreName) { }

    public get stat() {
        return this._coreStat + this._statBonus;
    }
    
    public set stat(newStat: number) {
        this._coreStat = newStat;
    }
    
    public set bonus(newBonus: number) {
        this._statBonus = newBonus;
    }
    
    public get bonus() {
        return this._statBonus;
    }
    
    public getAbilityScoreModifier() {
        let currentStat = this._coreStat + this._statBonus;
        let bonus = (currentStat - 10) / 2;
        return Math.floor(bonus);
    }
}
