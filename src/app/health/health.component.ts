import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { BaseCharacterModelState, BaseCharacterModel } from '../../state/base-stats/BaseCharacterModelState';
import { Observable } from 'rxjs';
import { HealthInfoInterface } from '../../state/base-stats/HealthInfoInterface';
import { UpdateHealthAction } from '../../state/actions/UpdateHealthAction';
import { UpdateTemporaryHitPointsAction } from '../../state/actions/UpdateTemporaryHitPointsAction';
import { UpdateDamageTakenAction } from '../../state/actions/UpdateDamageTakenAction';

@Component({
  selector: 'app-health',
  templateUrl: './health.component.html',
  styleUrls: ['./health.component.css']
})
export class HealthComponent implements OnInit {
    @Select(BaseCharacterModelState.getHealthInfo) healthInfo$: Observable<HealthInfoInterface>;

  constructor(private store: Store) { }

  ngOnInit() {
  }

  onHealthChange(value: string) {
      this.store.dispatch(new UpdateHealthAction({
          value: +value,
          fullHeal: false
      }));
  }

  onHealthTempChange(value: string) {
      this.store.dispatch(new UpdateTemporaryHitPointsAction(+value));
  }

  onDamageTaken(value: string) {
      this.store.dispatch(new UpdateDamageTakenAction(+value));
  }

}
