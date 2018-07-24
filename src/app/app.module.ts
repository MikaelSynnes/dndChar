import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { AppComponent } from './app.component';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { allState } from '../state/state';
import { CapitalizePipe } from './pipes/capitalize.pipe';
import { ProficiencyBonusComponent } from './proficiency-bonus/proficiency-bonus.component';
import { EnumKeysPipe } from './pipes/enum-keys.pipe';
import { SavingThrowsComponent } from './saving-throws/saving-throws.component';

@NgModule({
  declarations: [
    AppComponent,
    CapitalizePipe,
    ProficiencyBonusComponent,
    SavingThrowsComponent,
    EnumKeysPipe
  ],
  imports: [
    BrowserModule,
    NgxsModule.forRoot([allState]),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    NgxsLoggerPluginModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
