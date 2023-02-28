import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { OtherskillListComponent } from './component/otherskill-list/otherskill-list.component';
import { OtherskillAdminPageRoutingModule } from './otherskill-admin-page-routing.module';
import { OtherskillEditComponent } from './component/otherskill-edit/otherskill-edit.component';
import { OtherskillNewComponent } from './component/otherskill-new/otherskill-new.component';
import { OtherskillAdminPageComponent } from './component/otherskill-admin-page/otherskill-admin-page.component';



@NgModule({
  declarations: [OtherskillAdminPageComponent, OtherskillListComponent, OtherskillEditComponent, OtherskillNewComponent],
  imports: [CommonModule, OtherskillAdminPageRoutingModule, FontAwesomeModule, FormsModule],
})
export class OtherskillAdminPageModule { }
