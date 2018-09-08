import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Store, Actions } from '@ngxs/store';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServerCommunicationService {
  constructor(private httpClient: HttpClient, private store: Store, private actions: Actions) {
    actions.subscribe((payload) => {
      if(payload.status !== "SUCCESSFUL") {
        return;
      }      
      console.log(payload);
      //debugger;
    })
  }

  public async sendToServer(action: any) {
    this.httpClient.patch("", action);
  }
}