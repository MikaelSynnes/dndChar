import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { BaseCharacterModelState } from '../../state/base-stats/BaseCharacterModelState';
import { Observable } from 'rxjs';
import { UpdateInspirationAction } from '../../state/actions/UpdateInspirationAction';
import { BaseCharacterModel } from 'src/state/base-stats/BaseCharacterModel';

@Component({
  selector: 'app-inspiration',
  templateUrl: './inspiration.component.html',
  styleUrls: ['./inspiration.component.scss']
})
export class InspirationComponent implements OnInit {
  @Select(BaseCharacterModelState.getBaseStats) baseStats$: Observable<BaseCharacterModel>;

  constructor(private store: Store) { }

  ngOnInit() {
  }

  updateInspiration(newValue: string) {
    this.store.dispatch(new UpdateInspirationAction(+newValue));
  }
}
