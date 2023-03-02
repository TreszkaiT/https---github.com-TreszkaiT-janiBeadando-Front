import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PictureListComponent } from './component/picture-list/picture-list.component';
import { PictureAdminPageRoutingModule } from './picture-admin-page-routing.module';
import { PictureEditComponent } from './component/picture-edit/picture-edit.component';
import { PictureNewComponent } from './component/picture-new/picture-new.component';
import { PictureAdminPageComponent } from './component/picture-admin-page/picture-admin-page.component';



@NgModule({
  declarations: [PictureAdminPageComponent, PictureListComponent, PictureEditComponent, PictureNewComponent],
  imports: [CommonModule, PictureAdminPageRoutingModule, FontAwesomeModule, FormsModule],
})
export class PictureAdminPageModule { }
