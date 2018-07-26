import { Component, OnInit } from '@angular/core';
import { allState } from '../../state/state';
import { SkillModel } from '../../state/skills/SkillsModel';
import { AllSkills } from "../../state/skills/AllSkills";
import { Observable } from '../../../node_modules/rxjs';
import { Select, Store } from '../../../node_modules/@ngxs/store';
import { SkillProficiencyBonus } from '../../state/base-stats/SkillProficiencyBonus';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  @Select(allState.getSkills) skills$: Observable<SkillModel>;
  skills: SkillModel[];
  options: string[];

  constructor(private store: Store) {
    store.select(allState.getSkills).subscribe(allSkills => {
      let keys = Object.keys(allSkills);
      this.skills = [];
      for( let prop of keys) {
        if(prop == "_baseStats") {
          continue;
        }
        this.skills.push(allSkills[prop]);
      }
      console.log(this.skills);
    });
    //this.skills[0].proficiency
    this.options = Object.keys(SkillProficiencyBonus);
  }

  ngOnInit() {
  }

  parseValue(value : string, ability: SkillModel) {
    ability.proficiency = SkillProficiencyBonus[value];
  }

}
