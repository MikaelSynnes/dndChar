import { Component, OnInit } from '@angular/core';
import { allStateModel, allState } from 'src/state/state';
import { Observable } from '../../../node_modules/rxjs';
import { Select } from '../../../node_modules/@ngxs/store';

@Component({
  selector: 'app-top-of-page',
  templateUrl: './top-of-page.component.html',
  styleUrls: ['./top-of-page.component.css']
})
export class TopOfPageComponent implements OnInit {
  @Select(allState.getBaseStats) baseStats$: Observable<allStateModel>;
  @Select(allState.getPlayerName) playerName$: Observable<string>;

  constructor() { }

  ngOnInit() {
  }

}
