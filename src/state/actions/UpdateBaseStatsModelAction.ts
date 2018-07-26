import { BaseStats } from "../base-stats/BaseStatsModel";

export class UpdateBaseStatsModelAction {
    static readonly type = "[BASESTATS] update";
    constructor(public payload: BaseStats) { }
}