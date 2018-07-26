export class UpdateCharacterLevelAction {
    static readonly type = "[BASESTATS] update character level";
    constructor(public payload: number) { }
}