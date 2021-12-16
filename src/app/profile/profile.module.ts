import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { httpInterceptors } from '../core/interceptor';
import { ProfileService } from './services/profile.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [CommonModule, HttpClientModule, ProfileRoutingModule],
  providers: [httpInterceptors, ProfileService],
})
export class ProfileModule {}
