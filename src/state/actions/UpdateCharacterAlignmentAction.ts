import { CharacterAlignment } from "../base-stats/characterAlignment";

export class UpdateCharacterAlignmentAction {
    static readonly type = "[BASESTATS] update character alignment";
    constructor(public payload: CharacterAlignment) { }
}