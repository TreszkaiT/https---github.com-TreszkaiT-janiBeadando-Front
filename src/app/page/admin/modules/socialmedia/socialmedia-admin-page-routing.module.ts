import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SocialmediaAdminPageComponent } from './component/socialmedia-admin-page/socialmedia-admin-page.component';
import { SocialmediaEditComponent } from './component/socialmedia-edit/socialmedia-edit.component';
import { SocialmediaListComponent } from './component/socialmedia-list/socialmedia-list.component';
import { SocialmediaNewComponent } from './component/socialmedia-new/socialmedia-new.component';

const routes: Routes = [
  {
    path: '',
    component: SocialmediaAdminPageComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'socialmedia-list',
      },
      {
        path: 'socialmedia-list',
        component: SocialmediaListComponent,   // statikus betöltődés, nem Lazy
        pathMatch: 'full', 
      },
      {
        path: 'socialmedia-edit',
        component: SocialmediaEditComponent,
        pathMatch: 'full', 
      },
      {
        path: 'socialmedia-new',
        component: SocialmediaNewComponent,
        pathMatch: 'full', 
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SocialmediaAdminPageRoutingModule { }
