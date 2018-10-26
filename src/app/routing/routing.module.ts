import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent }   from '../app.component';
import { StatsPageComponent } from '../stats-page/stats-page.component';
import { InventoryComponent } from '../inventory/inventory.component';

const routes: Routes = [
  { path: '', redirectTo: '/stats', pathMatch: 'full' },
  { path: 'stats', component: StatsPageComponent }
  { path: 'inventory', component: InventoryComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class RoutingModule {}