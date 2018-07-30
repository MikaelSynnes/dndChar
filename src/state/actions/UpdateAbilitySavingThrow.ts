import { AbilitySavingThrow } from "../base-stats/AbilitySavingThrow";

export class UpdateAbilitySavingThrowAction {
  static readonly type = "[BASESTATS] update ability saving throw";
    constructor(public payload: AbilitySavingThrow) { }
}