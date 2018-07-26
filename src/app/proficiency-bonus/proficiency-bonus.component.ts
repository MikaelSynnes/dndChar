import { Component, OnInit, OnDestroy } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable, Subscription } from 'rxjs';
import { allState, allStateModel } from '../../state/state';

@Component({
  selector: 'app-proficiency-bonus',
  templateUrl: './proficiency-bonus.component.html',
  styleUrls: ['./proficiency-bonus.component.css']
})
export class ProficiencyBonusComponent implements OnInit, OnDestroy {
  proficiencyBonus: number = 0;
  proficiencyBonus$: Subscription;

  constructor(private store: Store) {
    
    this.proficiencyBonus$ = this.store.select(state => {
      return state.allStateModel.baseStats.proficiencyBonus;
    }).subscribe(e => {
      this.proficiencyBonus = e;
    });
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.proficiencyBonus$.unsubscribe();
  }
}
