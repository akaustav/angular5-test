import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardCardsService } from './dashboard-cards.service';
import { DashboardCardSpawnerComponent } from './dashboard-card-spawner.component';

@NgModule({
  declarations: [
    DashboardCardSpawnerComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    DashboardCardsService
  ]
})
export class DashboardModule { }
