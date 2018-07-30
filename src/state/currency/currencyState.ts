import { CurrencyStateModel } from "./CurrencyStateModel";
import { TreasureModel } from "./TreasureModel";
import { CurrencyEnum } from "./CurrencyEnum";
import { State, Selector, StateContext, Action } from "@ngxs/store";
import { UpdateTreasureModelAction } from "src/state/actions/UpdateTreasureModelAction";
import { UpdateCurrencyAction } from "src/state/actions/UpdateCurrencyAction";
import { UpdateCurrencyTotalsActions } from "../actions/UpdateCurrencyTotalsActions";
import { CurrencyModel } from "./CurrencyModel";

@State<CurrencyStateModel>({
    name: 'CurrencyState',
    defaults: {
      treasure: Array(new TreasureModel("Dagger", 1, CurrencyEnum.cp), new TreasureModel("Sword", 2, CurrencyEnum.sp),new TreasureModel("Axe", 3, CurrencyEnum.ep),new TreasureModel("Spoon", 4, CurrencyEnum.gp),new TreasureModel("Fork", 95, CurrencyEnum.pp)),
      copper: 1,
      silver: 2,
      electrum: 3,
      gold: 4,
      platinum: 5,
      totals: new CurrencyModel()
    }    
})
export class CurrencyState {
  static currencyOptions: string[] = Object.keys(CurrencyEnum);
  
  @Selector()
  static getAll(state: CurrencyStateModel) {
      return state;
  }

  @Selector()
  static getTreasure(state: CurrencyStateModel) {
    return state.treasure;
  }

  @Selector()
  static getTotals(state: CurrencyStateModel) {
    let localObject = state.totals;

    for(let enumOption of CurrencyState.currencyOptions) {
      localObject[CurrencyEnum[enumOption]] = state.treasure.filter((e) =>e.currency === CurrencyEnum[enumOption]).reduce(((acc, obj) =>{return acc + obj.worth}), 0);
      localObject[CurrencyEnum[enumOption]] += state[CurrencyEnum[enumOption]];
    }

    if(localObject != state.totals) {
      state.totals = localObject;
    }
    
    console.warn("Ran getTotals");
    console.log(localObject);
    
    return state.totals;
  }

  @Action(UpdateTreasureModelAction)
  updateTreasureModelAction(context: StateContext<CurrencyStateModel>, {payload, index}: UpdateTreasureModelAction) {
    let state = {...context.getState()};
    state.treasure = {...state.treasure};
    state.treasure[index] = payload;
    context.setState({...state});
  }

  @Action(UpdateCurrencyAction)
  updateCurrencyAction(context: StateContext<CurrencyStateModel>, {payload, currency}: UpdateCurrencyAction) {
    let state = {...context.getState()};
    state[currency] = payload;
    context.setState(state);
  }

  @Action(UpdateCurrencyTotalsActions)
  updateCurrencyTotalsActions(context: StateContext<CurrencyStateModel>) {
    //Not implemented not sure what or where here to do.
  }
}