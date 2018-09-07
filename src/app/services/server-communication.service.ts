import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Store } from '@ngxs/store';

@Injectable({
  providedIn: 'root',
})
export class ServerCommunicationService {
  constructor(private actions$: Actions, private httpClient: HttpClient, private store: Store){
  }

  @Effect({dispatch: false})
  sendToServerActions$ = this.actions$.pipe(tap(action => {
    console.log(action);
  }))
}