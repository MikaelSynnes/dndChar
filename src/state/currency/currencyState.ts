import { State, Selector, StateContext, Action } from "@ngxs/store";

export enum CurrencyEnum {
  cp = "copper",
  sp = "silver",
  ep = "electrum",
  gp = "gold",
  pp = "platinum",
}

export class TreasureModel {
  item: string = "";
  worth: number = 0;
  currency: CurrencyEnum = CurrencyEnum.cp;
}

export class CurrencyStateModel {
  treasure: TreasureModel[];
  copper: number;
  silver: number;
  electrum: number;
  gold: number;
  platinum: number;
}

@State<CurrencyStateModel>({
    name: 'CurrencyState',
    defaults: {
      treasure: Array(new TreasureModel()),
      copper: 1,
      silver: 2,
      electrum: 3,
      gold: 4,
      platinum: 5
    }    
})
export class CurrencyState {
}