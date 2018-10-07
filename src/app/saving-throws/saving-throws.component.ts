import { Component, OnInit } from '@angular/core';
import { Store,  Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { BaseCharacterModelState } from 'src/state/base-stats/BaseCharacterModelState';
import { AbilitySavingThrow } from 'src/state/base-stats/AbilitySavingThrow';
import { SkillProficiencyBonus } from 'src/state/base-stats/SkillProficiencyBonus';
import { UpdateAbilitySavingThrowAction } from 'src/state/actions/UpdateAbilitySavingThrow';
import { SetupSavingThrowsAction } from 'src/state/actions/SetupSavingThrowsAction';

@Component({
  selector: 'app-saving-throws',
  templateUrl: './saving-throws.component.html',
  styleUrls: ['./saving-throws.component.scss']
})
export class SavingThrowsComponent implements OnInit {
  @Select(BaseCharacterModelState.getSavingThrows)savingThrows$: Observable<AbilitySavingThrow[]>;
  options: string[];
  SkillProficiencyBonus = SkillProficiencyBonus;

  constructor(private store: Store) {
    this.options = Object.keys(SkillProficiencyBonus);
  }

  parseValue(value : string, ability: AbilitySavingThrow) {
    let update = Object.assign(new AbilitySavingThrow(ability.ability, ability.proficiency), ability);
    update.proficiencyBonus = SkillProficiencyBonus[value];
    this.store.dispatch(new UpdateAbilitySavingThrowAction(update));
  }

  ngOnInit() {
    this.store.dispatch(new SetupSavingThrowsAction());
  }
}
