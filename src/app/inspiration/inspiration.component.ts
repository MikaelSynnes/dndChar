import { Component, OnInit } from '@angular/core';
import { Select } from '../../../node_modules/@ngxs/store';
import { allState, allStateModel } from 'src/state/state';
import { Observable } from '../../../node_modules/rxjs';

@Component({
  selector: 'app-inspiration',
  templateUrl: './inspiration.component.html',
  styleUrls: ['./inspiration.component.css']
})
export class InspirationComponent implements OnInit {
  @Select(allState.getBaseStats) baseStats$: Observable<allStateModel>;

  constructor() { }

  ngOnInit() {
  }

}
