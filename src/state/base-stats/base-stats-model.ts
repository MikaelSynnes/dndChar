export class BaseStats {
    strength: number = 8;
    dexterity: number = 8;
    constitution: number = 8;
    intelligence: number = 8;
    wisdom: number = 8;
    charisma: number = 8;
    experience: number = 8;
    inspiraction: number = 8;
    class: characterClass = characterClass.barbarian;
    level: number = 1;
    name: string = "test";
    race: string = "test";
    characterAlignment : characterAlignment = characterAlignment.CN;
    inspiration: number = 0;
    initiative: number = 10;
    speed: number = 30;
    hitPoints: number = 1;
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