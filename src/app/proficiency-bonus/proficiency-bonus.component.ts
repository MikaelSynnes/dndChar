import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { Subscription, Observable } from 'rxjs';
import { BaseCharacterModelState } from '../../state/base-stats/BaseCharacterModelState';

@Component({
  selector: 'app-proficiency-bonus',
  templateUrl: './proficiency-bonus.component.html',
  styleUrls: ['./proficiency-bonus.component.scss']
})
export class ProficiencyBonusComponent implements OnInit, OnDestroy {
  proficiencyBonus: number = 0;
  @Select(BaseCharacterModelState.getProficiencyBonus)proficiencyBonus$: Observable<number>;

  constructor(private store: Store) {
    
    this.proficiencyBonus$.subscribe(bonus => {
      this.proficiencyBonus = bonus;
    });
  }

  ngOnInit() {
  }

  ngOnDestroy() {
  }
}
