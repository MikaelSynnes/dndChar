export class BaseStats {
    strength: AbilityScore = new AbilityScore(abilityScoreName.strength);
    dexterity: AbilityScore = new AbilityScore(abilityScoreName.dexterity);
    constitution: AbilityScore = new AbilityScore(abilityScoreName.constitution);
    intelligence: AbilityScore = new AbilityScore(abilityScoreName.intelligence);
    wisdom: AbilityScore = new AbilityScore(abilityScoreName.wisdom);
    charisma: AbilityScore = new AbilityScore(abilityScoreName.charisma);
    experience: number = 0;
    inspiraction: number = 0;
    class: characterClass = characterClass.barbarian;
    level: number = 1;
    name: string = "test";
    race: string = "test";
    characterAlignment : characterAlignment = characterAlignment.CN;
    inspiration: number = 0;
    speed: number = 30;
    maxHitPoints: number = 1;
    tempHitPoints:number = 0;
    damagedHitPoints: number = 0;

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
}

export enum characterAlignment {
    LG = "lawful good",
    NG = "neutral good",
    CG = "chaotic good",
    LN = "lawful neutral",
    TN = "true neutral",
    CN = "chaotic neutral",
    LE = "lawful evil",
    NE = "neutral evil",
    CE = "chaotic evil"
}

export enum characterClass {
    barbarian = "barbarian",
    bard = "bard",
    cleric = "cleric",
    druid = "druid",
    hunter = "hunter",
    rogue = "rogue",
    palading = "paladin",
    sorcerer = "sorcerer",
    warlock = "warlock",
    wizard = "wizard",
}

export class AbilityScore {
    private _coreStat: number = 8;
    private _statBonus: number = 0;

    constructor(public name: abilityScoreName){}

    public get stat() {
        return this._coreStat + this._statBonus;
    }

    public set stat(newStat: number) {
        this._coreStat = newStat;
    }

    public set bonus(newBonus: number) {
        this._statBonus = newBonus;
    }

    public getAbilityScoreModifier() {
        let currentStat = this._coreStat + this._statBonus;
        let bonus = (currentStat - 10) / 2;
        return bonus;
    }
}

export enum abilityScoreName {
    strength = "strength",
    dexterity = "dexterity",
    constitution = "constitution",
    intelligence = "intelligence",
    wisdom = "widwom",
    charisma = "charisma"
}