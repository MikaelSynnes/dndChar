import { Component } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { allStateModel } from '../state/state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  baseStatNames = ["Strength", "Dexterity", "Wisdom", "Constitution", "Intelligence", "Charisma"];
  @Select() allStateModel$: Observable<allStateModel>;

  constructor(private store: Store) {
  }
}
