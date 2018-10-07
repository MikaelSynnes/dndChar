import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { UpdateCurrencyAction } from 'src/state/actions/UpdateCurrencyAction';
import { CurrencyState } from 'src/state/currency/CurrencyState';
import { CurrencyEnum } from 'src/state/currency/CurrencyEnum';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.scss']
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
