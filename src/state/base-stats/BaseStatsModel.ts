import { AbilityScoreBase } from "./AbilityScoreBase";
import { CharacterAlignment } from "./characterAlignment";
import { characterClass } from "./characterClass";

// Class used for all the base stats for a character sheet.
export class BaseStats extends AbilityScoreBase {
    experience: number = 0;
    class: characterClass = characterClass.barbarian;
    level: number = 1;
    name: string = "test name here";
    race: string = "test race here";
    characterAlignment : CharacterAlignment = CharacterAlignment.CN;
    inspiration: number = 0;
    speed: number = 30;
    maxHitPoints: number = 1;
    tempHitPoints:number = 0;
    damagedHitPoints: number = 0;
    background: string = "peasant";

    private _iniativeBonus: number = 0;
    private _hitPoints: number = 1;

    public get initiative() {
        let dexBonus = this.dexterity.getAbilityScoreModifier();
        return dexBonus + this._iniativeBonus;
    }

    public set initiative(newBonus: number) {
        this._iniativeBonus = newBonus;
    }

    public get currentHitPoint() {
        return this._hitPoints + this.tempHitPoints - this.damagedHitPoints;
    }

    public hitPoints(newHitPoint: number, fullHeal: boolean = false) {
        if(fullHeal) {
            this._hitPoints = newHitPoint;
        }
        this.maxHitPoints = newHitPoint;
    }

    public get proficiencyBonus () {
        //(Level / 4) + 1 rounded up
        return Math.ceil((this.level / 4) + 1);
    }

    public get allAbilityScores() {
        return this as AbilityScoreBase;
    }
    
    public get savingThrows() {
        let savingThrows = Array();
        return savingThrows;
    }
}