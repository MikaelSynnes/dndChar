import { CurrencyEnum } from "./CurrencyEnum";
export class TreasureModel {
  constructor(public item: string = "", public worth = 0, public currency = CurrencyEnum.cp) {
  }
}