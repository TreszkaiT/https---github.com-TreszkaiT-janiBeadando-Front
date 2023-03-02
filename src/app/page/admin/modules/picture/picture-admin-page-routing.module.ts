import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PictureAdminPageComponent } from './component/picture-admin-page/picture-admin-page.component';
import { PictureEditComponent } from './component/picture-edit/picture-edit.component';
import { PictureListComponent } from './component/picture-list/picture-list.component';
import { PictureNewComponent } from './component/picture-new/picture-new.component';

const routes: Routes = [
  {
    path: '',
    component: PictureAdminPageComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'picture-list',
      },
      {
        path: 'picture-list',
        component: PictureListComponent,   // statikus betöltődés, nem Lazy
        pathMatch: 'full', 
      },
      {
        path: 'picture-edit',
        component: PictureEditComponent,
        pathMatch: 'full', 
      },
      {
        path: 'picture-new',
        component: PictureNewComponent,
        pathMatch: 'full', 
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PictureAdminPageRoutingModule { }
