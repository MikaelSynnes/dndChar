import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { Store, Actions, ofActionSuccessful } from '@ngxs/store';
import {pipe} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ServerCommunicationService {
  constructor(private httpClient: HttpClient, private store: Store, private actions: Actions) {
    this.actions.subscribe((payload) => {
      if(payload.status !== "SUCCESSFUL") {
        return;
      }
      //console.log(payload.action);
      this.sendToServer(payload.action);
    });
  }

  public async sendToServer(action: any) {
    let local = {...action};
    local.type = this.getTypeFromAction(action);
    this.httpClient.post("http://localhost:50116/CharacterSheet/update", local).subscribe(
      (val) => {console.log("PATCH call successful value returned in body", val);},
      response => {console.log("PATCH call in error", response);},
      () => {console.log("The PATCH observable is now completed.");});
  }

  private getTypeFromAction(action: any): string{
    if(action.constructor && action.constructor.type) {
      return action.constructor.type;
    }
    return action.type;
  }
}