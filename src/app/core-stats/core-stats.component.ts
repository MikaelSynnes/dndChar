import { Component, OnInit } from '@angular/core';
import { Select, Store } from '../../../node_modules/@ngxs/store';
import { allState } from 'src/state/state';
import { Observable } from '../../../node_modules/rxjs';
import { AbilityScoreBase } from '../../state/base-stats/AbilityScoreBase';
import { AbilityScore } from '../../state/base-stats/AbilityScore';
import { UpdateAbilityScore } from '../../state/actions/UpdateAbilityScore';

@Component({
  selector: 'app-core-stats',
  templateUrl: './core-stats.component.html',
  styleUrls: ['./core-stats.component.css']
})
export class CoreStatsComponent implements OnInit {
  @Select(allState.getAbilityScores) abilityScoresModel$: Observable<AbilityScoreBase>;
  abilityScores = Array<AbilityScore>();

  constructor(private store: Store) {
    this.abilityScoresModel$.subscribe(abilityScoreBase => {
      let keys = Object.keys(abilityScoreBase);
      this.abilityScores = [];
      for( let prop of keys) {
        this.abilityScores.push(abilityScoreBase[prop]);
      }
    });
  }

  ngOnInit() {
  }

  onAbilityScoreChange(event, abilityScore: AbilityScore) {
    let newStat = new AbilityScore(abilityScore.name);
    //event.target.value has the new ability score value.
    //Use the unary operator + to convert the string value to number.
    newStat.stat = +event.target.value;
    this.store.dispatch(new UpdateAbilityScore(newStat));
  }
}
