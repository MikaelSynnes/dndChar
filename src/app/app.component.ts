import { Component } from '@angular/core';
import { ServerCommunicationService } from './services/server-communication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private serverCom: ServerCommunicationService) {}
}
