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
}
