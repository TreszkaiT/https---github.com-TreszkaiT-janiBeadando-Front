import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudyAdminPageComponent } from './component/study-admin-page/study-admin-page.component';
import { StudyEditComponent } from './component/study-edit/study-edit.component';
import { StudyListComponent } from './component/study-list/study-list.component';
import { StudyNewComponent } from './component/study-new/study-new.component';

const routes: Routes = [
  {
    path: '',
    component: StudyAdminPageComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'study-list',
      },
      {
        path: 'study-list',
        component: StudyListComponent,   // statikus betöltődés, nem Lazy
        pathMatch: 'full', 
      },
      {
        path: 'study-edit',
        component: StudyEditComponent,
        pathMatch: 'full', 
      },
      {
        path: 'study-new',
        component: StudyNewComponent,
        pathMatch: 'full', 
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudyAdminPageRoutingModule { }
