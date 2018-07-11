import { State } from '@ngxs/store';

@State<baseStat[]>({
    name: `baseStat`,
    defaults: [
    ]
})
export class BaseStatsState {}

export class baseStats {
    strength: 8;
    dexterity: 8;
    constitution: 8;
    intelligence: 8;
    wisdom: 8;
    charisma: 8;
}

export class baseStat {
    type: "";
    value: 8;
}