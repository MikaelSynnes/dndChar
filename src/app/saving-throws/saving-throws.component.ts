import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store,  Select } from '@ngxs/store';
import { BaseCharacterModelState } from '../../state/base-stats/BaseCharacterModelState';
import { Observable } from 'rxjs';
import { AbilitySavingThrow } from '../../state/base-stats/AbilitySavingThrow';
import { SkillProficiencyBonus } from '../../state/base-stats/SkillProficiencyBonus';
import { UpdateAbilitySavingThrowAction } from '../../state/actions/UpdateAbilitySavingThrow';

@Component({
  selector: 'app-saving-throws',
  templateUrl: './saving-throws.component.html',
  styleUrls: ['./saving-throws.component.css']
})
export class SavingThrowsComponent implements OnInit {
  @Select(BaseCharacterModelState.getSavingThrows)savingThrows$: Observable<AbilitySavingThrow[]>;
  options: string[];
  SkillProficiencyBonus = SkillProficiencyBonus;

  constructor(private store: Store) {
    this.options = Object.keys(SkillProficiencyBonus);
  }

  parseValue(value : string, ability: AbilitySavingThrow) {
    ability.proficiencyBonus = SkillProficiencyBonus[value];
    this.store.dispatch(new UpdateAbilitySavingThrowAction(ability));
  }

  ngOnInit() {
  }

}
