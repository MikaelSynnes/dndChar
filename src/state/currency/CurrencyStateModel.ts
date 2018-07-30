import { TreasureModel } from "./TreasureModel";
import { CurrencyModel } from "./CurrencyModel";

export class CurrencyStateModel extends CurrencyModel {
  treasure: TreasureModel[];
  totals: CurrencyModel;
}