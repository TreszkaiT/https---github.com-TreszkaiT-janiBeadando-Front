import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProofexperienceListComponent } from './component/proofexperience-list/proofexperience-list.component';
import { ProofexperienceAdminPageRoutingModule } from './proofexperience-admin-page-routing.module';
import { ProofexperienceEditComponent } from './component/proofexperience-edit/proofexperience-edit.component';
import { ProofexperienceNewComponent } from './component/proofexperience-new/proofexperience-new.component';
import { ProofexperienceAdminPageComponent } from './component/proofexperience-admin-page/proofexperience-admin-page.component';



@NgModule({
  declarations: [ProofexperienceAdminPageComponent, ProofexperienceListComponent, ProofexperienceEditComponent, ProofexperienceNewComponent],
  imports: [CommonModule, ProofexperienceAdminPageRoutingModule, FontAwesomeModule, FormsModule],
})
export class ProofexperienceAdminPageModule { }
