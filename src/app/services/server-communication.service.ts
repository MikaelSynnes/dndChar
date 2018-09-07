import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Store, Actions } from '@ngxs/store';
import { tap } from 'rxjs/operators';

@Injectable()
export class ServerCommunicationService {
  constructor(private httpClient: HttpClient, private store: Store, private actions: Actions) {
    this.actions.pipe().subscribe(({payload}) => {
      console.log(payload);
    })
  }

  public async sendToServer(action: any) {
    this.httpClient.patch("", action);
  }
}