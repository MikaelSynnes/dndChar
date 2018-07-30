import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.css']
})
export class CurrencyComponent implements OnInit {

  constructor(private store: Store) { }

  ngOnInit() {
  }
}
