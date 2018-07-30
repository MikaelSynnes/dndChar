import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { CurrencyState } from '../../state/currency/CurrencyState';
import { Observable } from 'rxjs';
import { CurrencyEnum } from '../../state/currency/CurrencyEnum';
import { UpdateCurrencyAction } from 'src/state/actions/UpdateCurrencyAction';
import { CurrencyStateModel } from '../../state/currency/CurrencyStateModel';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.css']
})
export class CurrencyComponent implements OnInit {
  @Select(CurrencyState.getAll) currencyState$: Observable<CurrencyState>;
  @Select(CurrencyState.getTotals) totals$;
  total;
  CurrencyEnum = CurrencyEnum;
  
  constructor(private store: Store) {
    this.currencyState$.subscribe(e=>e);
  }

  ngOnInit() {
  }

  onCurrencyChange(value: string, currency: string) {
    this.store.dispatch(new UpdateCurrencyAction(+value, currency))
  }
}
