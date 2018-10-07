import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { CurrencyState } from 'src/state/currency/CurrencyState';
import { TreasureModel } from 'src/state/currency/TreasureModel';
import { CurrencyEnum } from 'src/state/currency/CurrencyEnum';
import { UpdateTreasureModelAction } from 'src/state/actions/UpdateTreasureModelAction';

@Component({
  selector: 'app-currency-treasure',
  templateUrl: './treasure.component.html',
  styleUrls: ['./treasure.component.scss']
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
    let tres = {...treasure};
    tres.currency = CurrencyEnum[value];
    console.log(index, tres);
    this.store.dispatch(new UpdateTreasureModelAction(tres, index));
  }
}
