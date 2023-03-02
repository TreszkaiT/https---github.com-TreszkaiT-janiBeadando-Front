import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MessageappListComponent } from './component/messageapp-list/messageapp-list.component';
import { MessageappAdminPageRoutingModule } from './messageapp-admin-page-routing.module';
import { MessageappEditComponent } from './component/messageapp-edit/messageapp-edit.component';
import { MessageappNewComponent } from './component/messageapp-new/messageapp-new.component';
import { MessageappAdminPageComponent } from './component/messageapp-admin-page/messageapp-admin-page.component';



@NgModule({
  declarations: [MessageappAdminPageComponent, MessageappListComponent, MessageappEditComponent, MessageappNewComponent],
  imports: [CommonModule, MessageappAdminPageRoutingModule, FontAwesomeModule, FormsModule],
})
export class MessageappAdminPageModule { }
