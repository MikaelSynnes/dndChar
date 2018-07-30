export class UpdateCurrencyAction {
  static readonly type = "[TREASURE] update currency";
  constructor(public payload: number, public currency: string) { }
}