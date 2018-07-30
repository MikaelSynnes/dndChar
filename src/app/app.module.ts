import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { AppComponent } from './app.component';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { CapitalizePipe } from './pipes/capitalize.pipe';
import { ProficiencyBonusComponent } from './proficiency-bonus/proficiency-bonus.component';
import { EnumKeysPipe } from './pipes/enum-keys.pipe';
import { SavingThrowsComponent } from './saving-throws/saving-throws.component';
import { TopOfPageComponent } from './top-of-page/top-of-page.component';
import { CoreStatsComponent } from './core-stats/core-stats.component';
import { InspirationComponent } from './inspiration/inspiration.component';
import { SkillsComponent } from './skills/skills.component';
import { HealthComponent } from './health/health.component';
import { BaseCharacterModelState } from '../state/base-stats/BaseCharacterModelState';
import { InventoryState } from '../state/inventory/inventoryState';
import { InventoryGenericComponent } from './inventory/generic/inventory-generic.component';
import { InventoryManagerComponent } from './inventory/manager/inventory-manager.component';
import { ObjectKeysPipe } from './pipes/object-keys.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CapitalizePipe,
    ProficiencyBonusComponent,
    SavingThrowsComponent,
    TopOfPageComponent,
    CoreStatsComponent,
    InspirationComponent,
    ProficiencyBonusComponent,
    SkillsComponent,
    HealthComponent,
    InventoryGenericComponent,
    InventoryManagerComponent,
    EnumKeysPipe,
    ObjectKeysPipe
  ],
  imports: [
    BrowserModule,
    NgxsModule.forRoot([BaseCharacterModelState, InventoryState]),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    NgxsLoggerPluginModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
