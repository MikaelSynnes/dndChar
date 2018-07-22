import { Component, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { allState } from '../../state/state';

@Component({
  selector: 'app-proficiency-bonus',
  templateUrl: './proficiency-bonus.component.html',
  styleUrls: ['./proficiency-bonus.component.css']
})
export class ProficiencyBonusComponent implements OnInit {
  @Select(allState.getProficiencyBonus) proficiencyBonus$: Observable<number>;
  proficiencyBonus: number = 0;

  constructor() {
    this.proficiencyBonus$.subscribe(p => {
      this.proficiencyBonus = p;
    })
  }

  ngOnInit() {
  }

}
