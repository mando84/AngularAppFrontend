import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { httpInterceptors } from '../core/interceptor';
import { DisplayEduComponent } from './components/display-edu/display-edu.component';
import { DisplayExpComponent } from './components/display-exp/display-exp.component';
import { DashboardActionsComponent } from './components/dashboard-actions/dashboard-actions.component';
import { HttpClientModule } from '@angular/common/http';
import { ProfileService } from '../profile/services/profile.service';

@NgModule({
  declarations: [
    DashboardComponent,
    DisplayEduComponent,
    DisplayExpComponent,
    DashboardActionsComponent,
  ],
  imports: [CommonModule, HttpClientModule, DashboardRoutingModule],
  providers: [httpInterceptors, ProfileService],
})
export class DashboardModule {}
