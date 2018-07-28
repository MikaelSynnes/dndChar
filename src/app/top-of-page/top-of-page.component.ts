import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Select, Store } from '@ngxs/store';
import { UpdateCharacterLevelAction } from '../../state/actions/UpdateCharacterLevelAction';
import { CharacterAlignment } from '../../state/base-stats/characterAlignment';
import { UpdateCharacterAlignmentAction } from '../../state/actions/UpdateCharacterAlignmentAction';
import { BaseCharacterModelState, BaseCharacterModel } from 'src/state/BaseCharacterModelState';

@Component({
  selector: 'app-top-of-page',
  templateUrl: './top-of-page.component.html',
  styleUrls: ['./top-of-page.component.css']
})
export class TopOfPageComponent implements OnInit {
  CharacterAlignment = CharacterAlignment;
  @Select(BaseCharacterModelState.getBaseStats) baseStats$: Observable<BaseCharacterModel>;
  @Select(BaseCharacterModelState.getPlayerName) playerName$: Observable<string>;

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
