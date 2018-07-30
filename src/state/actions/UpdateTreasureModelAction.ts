import { TreasureModel } from "../currency/TreasureModel";

export class UpdateTreasureModelAction {
  static readonly type = "[TREASURE] update treasure model";
  constructor(public payload: TreasureModel, public index: number) { }
}