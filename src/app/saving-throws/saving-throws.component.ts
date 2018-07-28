import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngxs/store';
import { allState } from '../../state/state';
import { Subscription } from 'rxjs';
import { AbilitySavingThrow } from '../../state/base-stats/AbilitySavingThrow';
import { SkillProficiencyBonus } from '../../state/base-stats/SkillProficiencyBonus';

@Component({
  selector: 'app-saving-throws',
  templateUrl: './saving-throws.component.html',
  styleUrls: ['./saving-throws.component.css']
})
export class SavingThrowsComponent implements OnInit, OnDestroy {
  savingThrows$: Subscription;
  savingThrows: Array<AbilitySavingThrow> = [];
  options: string[];
  SkillProficiencyBonus = SkillProficiencyBonus;

  constructor(private store: Store) {
    this.savingThrows$ = this.store.select(allState.getSavingThrows).subscribe(s => {
      this.savingThrows = s;
    });
    this.options = Object.keys(SkillProficiencyBonus);
  }

  parseValue(value : string, ability: AbilitySavingThrow) {
    ability.proficiencyBonus = SkillProficiencyBonus[value];
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.savingThrows$.unsubscribe();
  }
}
