export class UpdateTemporaryHitPointsAction {
    static readonly type = "[BASESTATS] update temporary hit points";
    constructor(public payload: number) { }
}