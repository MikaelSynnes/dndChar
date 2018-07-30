import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { CurrencyState } from '../../../state/currency/CurrencyState';
import { TreasureModel } from "../../../state/currency/TreasureModel";
import { CurrencyEnum } from "../../../state/currency/CurrencyEnum";
import { Observable } from 'rxjs';
import { UpdateTreasureModelAction } from '../../../state/actions/UpdateTreasureModelAction';

@Component({
  selector: 'app-currency-treasure',
  templateUrl: './treasure.component.html',
  styleUrls: ['./treasure.component.css']
})
export class CurrencyTreasureComponent implements OnInit {
  @Select(CurrencyState.getTreasure) treasure$: Observable<TreasureModel[]>;
  currencyOptions: string[];
  CurrencyEnum = CurrencyEnum;

  constructor(private store: Store) {
    this.currencyOptions = Object.keys(CurrencyEnum);
  }


  ngOnInit() {
  }

  trackByFn(index: any, item: any) {
    return index;
  }
 
  updateCurrencyType(value : string, treasure: TreasureModel, index: number) {
    let tres = treasure;
    tres.currency = CurrencyEnum[value];
    this.store.dispatch(new UpdateTreasureModelAction(tres, index));
  }
}
