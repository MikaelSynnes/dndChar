export class UpdateHealthAction {
    static readonly type = "[BASESTATS] update health";
    constructor(public payload: {value: number, fullHeal: boolean}) { }
}