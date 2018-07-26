import { Component, OnInit } from '@angular/core';
import { allState } from '../../state/state';
import { SkillModel } from '../../state/skills/SkillsModel';
import { Observable } from '../../../node_modules/rxjs';
import { Select, Store } from '../../../node_modules/@ngxs/store';
import { SkillProficiencyBonus } from '../../state/base-stats/SkillProficiencyBonus';
import { UpdateSkillModelAction } from '../../state/actions/UpdateSkillModelAction';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  @Select(allState.getSkills) skills$: Observable<SkillModel>;
  skills: SkillModel[];
  SkillProficiencyBonus = SkillProficiencyBonus;
  options: string[];

  constructor(private store: Store) {
    store.select(allState.getSkills).subscribe(allSkills => {
      this.skills = allSkills;
    });
    this.options = Object.keys(SkillProficiencyBonus);
  }

  ngOnInit() {
  }

  parseValue(value : string, ability: SkillModel) {
    ability.proficiencyBonus = SkillProficiencyBonus[value];
    this.store.dispatch(new UpdateSkillModelAction(ability));
  }

}
