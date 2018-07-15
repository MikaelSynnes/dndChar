import { BaseStats } from "./base-stats-model";

export class UpdateBaseStats {
    static readonly type = '[BASESTAT] update';

    constructor(public payload: BaseStats) {}
}

export class ResetBaseStats {
    static readonly type = '[BASESTAT] restet';

    constructor(){}
}