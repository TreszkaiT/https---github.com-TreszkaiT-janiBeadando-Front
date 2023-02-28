import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LanguageAdminPageComponent } from './component/language-admin/language-admin-page.component';
import { LanguageListComponent } from './component/language-list/language-list.component';
import { LanguageAdminPageRoutingModule } from './language-admin-page-routing.module';



@NgModule({
  declarations: [LanguageAdminPageComponent, LanguageListComponent],
  imports: [CommonModule, LanguageAdminPageRoutingModule, FontAwesomeModule, FormsModule],
})
export class LanguageAdminPageModule { }
