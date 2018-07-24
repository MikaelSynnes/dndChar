import { Component, OnInit, OnDestroy } from '@angular/core';
import { Select, Store } from '../../../node_modules/@ngxs/store';
import { allState } from '../../state/state';
import { Observable, Subscription } from '../../../node_modules/rxjs';
import { AbilitySavingThrow } from '../../state/base-stats/AbilitySavingThrow';

@Component({
  selector: 'app-saving-throws',
  templateUrl: './saving-throws.component.html',
  styleUrls: ['./saving-throws.component.css']
})
export class SavingThrowsComponent implements OnInit, OnDestroy {
  savingThrows$: Subscription;
  savingThrows: Array<AbilitySavingThrow> = [];

  constructor(private store: Store) {
    this.savingThrows$ = this.store.select(allState.getSavingThrows).subscribe(s => {
      console.log(s);
      this.savingThrows = s;
    });
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.savingThrows$.unsubscribe();
  }
}
