import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { CityAdminPageRoutingModule } from './city-admin-page-routing.module';
import { CityAdminPageComponent } from './component/city-admin/city-admin-page.component';
import { CityEditComponent } from './component/city-edit/city-edit.component';
import { CityListComponent } from './component/city-list';
import { CityNewComponent } from './component/city-new/city-new.component';

@NgModule({
  declarations: [CityAdminPageComponent, CityListComponent, CityNewComponent, CityEditComponent],
  imports: [CommonModule, CityAdminPageRoutingModule, FontAwesomeModule, FormsModule],
})
export class CityAdminPageModule {}
