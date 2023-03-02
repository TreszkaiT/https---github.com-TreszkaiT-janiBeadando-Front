import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SocialmediaListComponent } from './component/socialmedia-list/socialmedia-list.component';
import { SocialmediaAdminPageRoutingModule } from './socialmedia-admin-page-routing.module';
import { SocialmediaEditComponent } from './component/socialmedia-edit/socialmedia-edit.component';
import { SocialmediaNewComponent } from './component/socialmedia-new/socialmedia-new.component';
import { SocialmediaAdminPageComponent } from './component/socialmedia-admin-page/socialmedia-admin-page.component';



@NgModule({
  declarations: [SocialmediaAdminPageComponent, SocialmediaListComponent, SocialmediaEditComponent, SocialmediaNewComponent],
  imports: [CommonModule, SocialmediaAdminPageRoutingModule, FontAwesomeModule, FormsModule],
})
export class SocialmediaAdminPageModule { }
