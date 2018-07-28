import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { BaseCharacterModelState, BaseCharacterModel } from 'src/state/BaseCharacterModelState';
import { Observable } from 'rxjs';
import { UpdateInspirationAction } from '../../state/actions/UpdateInspirationAction';

@Component({
  selector: 'app-inspiration',
  templateUrl: './inspiration.component.html',
  styleUrls: ['./inspiration.component.css']
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
