import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AdminPageRoutingModule } from './admin-page-routing.module';
import { AdminPageComponent } from './component';
import { LeftSidebarComponent } from './component/left-sidebar/left-sidebar.component';

@NgModule({
  declarations: [AdminPageComponent, LeftSidebarComponent],
  imports: [CommonModule, AdminPageRoutingModule, FontAwesomeModule],
})
export class AdminPageModule {}
