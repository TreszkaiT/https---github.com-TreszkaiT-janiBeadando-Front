import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OtherskillAdminPageComponent } from './component/otherskill-admin-page/otherskill-admin-page.component';
import { OtherskillEditComponent } from './component/otherskill-edit/otherskill-edit.component';
import { OtherskillListComponent } from './component/otherskill-list/otherskill-list.component';
import { OtherskillNewComponent } from './component/otherskill-new/otherskill-new.component';

const routes: Routes = [
  {
    path: '',
    component: OtherskillAdminPageComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'otherskill-list',
      },
      {
        path: 'otherskill-list',
        component: OtherskillListComponent,   // statikus betöltődés, nem Lazy
        pathMatch: 'full', 
      },
      {
        path: 'otherskill-edit',
        component: OtherskillEditComponent,
        pathMatch: 'full', 
      },
      {
        path: 'otherskill-new',
        component: OtherskillNewComponent,
        pathMatch: 'full', 
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OtherskillAdminPageRoutingModule { }
