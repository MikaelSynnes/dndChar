import { Component } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { BaseStatsState} from '../state/base-stats/base-stats-state';
import { allStateModel } from '../state/state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  baseStatNames = ["Strength", "Dexterity", "Wisdom", "Constitution", "Intelligence", "Charisma"];
  baseStats$ : Observable<allStateModel>;

  constructor(private store: Store) {
    this.baseStats$ = this.store.select(state => state);
  }
}
