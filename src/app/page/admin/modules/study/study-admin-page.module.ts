import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { StudyListComponent } from './component/study-list/study-list.component';
import { StudyAdminPageRoutingModule } from './study-admin-page-routing.module';
import { StudyEditComponent } from './component/study-edit/study-edit.component';
import { StudyNewComponent } from './component/study-new/study-new.component';
import { StudyAdminPageComponent } from './component/study-admin-page/study-admin-page.component';



@NgModule({
  declarations: [StudyAdminPageComponent, StudyListComponent, StudyEditComponent, StudyNewComponent],
  imports: [CommonModule, StudyAdminPageRoutingModule, FontAwesomeModule, FormsModule],
})
export class StudyAdminPageModule { }
