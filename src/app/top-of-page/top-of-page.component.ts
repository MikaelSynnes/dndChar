import { Component, OnInit } from '@angular/core';
import { allStateModel, allState } from 'src/state/state';
import { Observable } from '../../../node_modules/rxjs';
import { Select, Store } from '../../../node_modules/@ngxs/store';
import { UpdateCharacterLevelAction } from '../../state/actions/UpdateCharacterLevelAction';
import { CharacterAlignment } from '../../state/base-stats/characterAlignment';
import { UpdateCharacterAlignmentAction } from '../../state/actions/UpdateCharacterAlignmentAction';

@Component({
  selector: 'app-top-of-page',
  templateUrl: './top-of-page.component.html',
  styleUrls: ['./top-of-page.component.css']
})
export class TopOfPageComponent implements OnInit {
  CharacterAlignment = CharacterAlignment;
  @Select(allState.getBaseStats) baseStats$: Observable<allStateModel>;
  @Select(allState.getPlayerName) playerName$: Observable<string>;

  charAlignments: string[];

  constructor(private store: Store) { 

    this.charAlignments = Object.keys(CharacterAlignment);
  }

  ngOnInit() {
  }

  onLevelChange(newValue: string) {
    this.store.dispatch(new UpdateCharacterLevelAction(+newValue));
  }

  parseAlignment(value : string) {
    this.store.dispatch(new UpdateCharacterAlignmentAction(CharacterAlignment[value]));
  }
}
