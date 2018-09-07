import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NgxsModule } from '@ngxs/store';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { AppComponent } from 'src/app/app.component';
import { CapitalizePipe } from 'src/app/pipes/capitalize.pipe';
import { PassivePerceptionComponent } from 'src/app/passive-perception/passive-perception.component';
import { ProficiencyBonusComponent } from 'src/app/proficiency-bonus/proficiency-bonus.component';
import { SavingThrowsComponent } from 'src/app/saving-throws/saving-throws.component';
import { TopOfPageComponent } from 'src/app/top-of-page/top-of-page.component';
import { CoreStatsComponent } from 'src/app/core-stats/core-stats.component';
import { InspirationComponent } from 'src/app/inspiration/inspiration.component';
import { SkillsComponent } from 'src/app/skills/skills.component';
import { HealthComponent } from 'src/app/health/health.component';
import { InventoryGenericComponent } from 'src/app/inventory/generic/inventory-generic.component';
import { InventoryManagerComponent } from 'src/app/inventory/manager/inventory-manager.component';
import { EnumKeysPipe } from 'src/app/pipes/enum-keys.pipe';
import { CurrencyComponent } from 'src/app/currency/currency.component';
import { CurrencyTreasureComponent } from 'src/app/currency/treasure/treasure.component';
import { ObjectKeysPipe } from 'src/app/pipes/object-keys.pipe';
import { BaseCharacterModelState } from 'src/state/base-stats/BaseCharacterModelState';
import { InventoryState } from 'src/state/inventory/inventoryState';
import { CurrencyState } from 'src/state/currency/CurrencyState';
import { ServerState } from 'src/state/server-state/serverState';
import { ServerCommunicationService } from 'src/app/services/server-communication.service';

@NgModule({
  declarations: [
    AppComponent,
    CapitalizePipe,
    PassivePerceptionComponent,
    ProficiencyBonusComponent,
    SavingThrowsComponent,
    TopOfPageComponent,
    CoreStatsComponent,
    InspirationComponent,
    SkillsComponent,
    HealthComponent,
    InventoryGenericComponent,
    InventoryManagerComponent,
    EnumKeysPipe,
    CurrencyComponent,
    CurrencyTreasureComponent,
    ObjectKeysPipe,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgxsModule.forRoot([BaseCharacterModelState, InventoryState, CurrencyState, ServerState], {developmentMode: true }),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    NgxsLoggerPluginModule.forRoot(),
  ],
  providers: [
    {
      provide: APP_INITIALIZER,      
      useClass: ServerCommunicationService,
      deps: [ServerCommunicationService],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
