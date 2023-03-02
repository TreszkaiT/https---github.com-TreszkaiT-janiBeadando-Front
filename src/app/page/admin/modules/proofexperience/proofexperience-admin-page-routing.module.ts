import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProofexperienceAdminPageComponent } from './component/proofexperience-admin-page/proofexperience-admin-page.component';
import { ProofexperienceEditComponent } from './component/proofexperience-edit/proofexperience-edit.component';
import { ProofexperienceListComponent } from './component/proofexperience-list/proofexperience-list.component';
import { ProofexperienceNewComponent } from './component/proofexperience-new/proofexperience-new.component';

const routes: Routes = [
  {
    path: '',
    component: ProofexperienceAdminPageComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'proofexperience-list',
      },
      {
        path: 'proofexperience-list',
        component: ProofexperienceListComponent,   // statikus betöltődés, nem Lazy
        pathMatch: 'full', 
      },
      {
        path: 'proofexperience-edit',
        component: ProofexperienceEditComponent,
        pathMatch: 'full', 
      },
      {
        path: 'proofexperience-new',
        component: ProofexperienceNewComponent,
        pathMatch: 'full', 
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProofexperienceAdminPageRoutingModule { }
