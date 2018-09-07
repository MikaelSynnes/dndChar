import { Component, OnInit } from '@angular/core';
import { BaseCharacterModelState } from '../../state/base-stats/BaseCharacterModelState';
import { SkillModel } from '../../state/skills/SkillsModel';
import { Observable } from 'rxjs';
import { Select, Store } from '@ngxs/store';
import { SkillProficiencyBonus } from '../../state/base-stats/SkillProficiencyBonus';
import { UpdateSkillModelAction } from '../../state/actions/UpdateSkillModelAction';
import { SetupSkillsAction } from 'src/state/actions/SetupSkillsAction';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  @Select(BaseCharacterModelState.getSkills) skills$: Observable<SkillModel>;
  SkillProficiencyBonus = SkillProficiencyBonus;
  options: string[];

  constructor(private store: Store) {
    this.options = Object.keys(SkillProficiencyBonus);
  }

  ngOnInit() {
    this.store.dispatch(new SetupSkillsAction());
  }

  parseValue(value : string, ability: SkillModel) {
    let update = new SkillModel(ability.name, ability.coreStat, ability.proficiencyScore, SkillProficiencyBonus[value]);
    
    this.store.dispatch(new UpdateSkillModelAction(update));
  }

}
