import { AbilityScore } from '../base-stats/AbilityScore';
export class UpdateAbilityScore {
    static readonly type = "[ABILITYSCORE] update";
    constructor(public payload: AbilityScore) { }
}