import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardCardsService } from './dashboard-cards.service';
import { DashboardCardSpawnerComponent } from './dashboard-card-spawner.component';
import { DashboardComponent } from './dashboard.component';

@NgModule({
  declarations: [
    DashboardCardSpawnerComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    DashboardCardsService
  ]
})
export class DashboardModule { }
