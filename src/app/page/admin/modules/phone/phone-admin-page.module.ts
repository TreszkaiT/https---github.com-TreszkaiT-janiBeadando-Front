import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PhoneListComponent } from './component/phone-list/phone-list.component';
import { PhoneAdminPageRoutingModule } from './phone-admin-page-routing.module';
import { PhoneEditComponent } from './component/phone-edit/phone-edit.component';
import { PhoneNewComponent } from './component/phone-new/phone-new.component';
import { PhoneAdminPageComponent } from './component/phone-admin-page/phone-admin-page.component';



@NgModule({
  declarations: [PhoneAdminPageComponent, PhoneListComponent, PhoneEditComponent, PhoneNewComponent],
  imports: [CommonModule, PhoneAdminPageRoutingModule, FontAwesomeModule, FormsModule],
})
export class PhoneAdminPageModule { }
