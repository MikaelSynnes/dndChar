import { Component } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { allStateModel, allState } from '../state/state';
import { UpdateAbilityScore } from "../state/actions/UpdateAbilityScore";
import { AbilityScoreBase } from '../state/base-stats/AbilityScoreBase';
import { AbilityScore } from '../state/base-stats/AbilityScore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  @Select(allState.getBaseStats) baseStats$: Observable<allStateModel>;
  @Select(allState.getAbilityScores) abilityScoresModel$: Observable<AbilityScoreBase>;
  @Select(allState.getPlayerName) playerName$: Observable<string>;

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

  onAbilityScoreChange(event, abilityScore: AbilityScore) {
    let newStat = new AbilityScore(abilityScore.name);
    //event.target.value has the new ability score value.
    //Use the unary operator + to convert the string value to number.
    newStat.stat = +event.target.value;
    this.store.dispatch(new UpdateAbilityScore(newStat));
  }
}
