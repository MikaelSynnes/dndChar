export class UpdateDamageTakenAction {
    static readonly type = "[BASESTATS] update damage taken";
    constructor(public payload: number){}
}