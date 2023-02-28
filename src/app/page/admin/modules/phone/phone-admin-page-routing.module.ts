import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PhoneAdminPageComponent } from './component/phone-admin-page/phone-admin-page.component';
import { PhoneEditComponent } from './component/phone-edit/phone-edit.component';
import { PhoneListComponent } from './component/phone-list/phone-list.component';
import { PhoneNewComponent } from './component/phone-new/phone-new.component';

const routes: Routes = [
  {
    path: '',
    component: PhoneAdminPageComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'phone-list',
      },
      {
        path: 'phone-list',
        component: PhoneListComponent,   // statikus betöltődés, nem Lazy
        pathMatch: 'full', 
      },
      {
        path: 'phone-edit',
        component: PhoneEditComponent,
        pathMatch: 'full', 
      },
      {
        path: 'phone-new',
        component: PhoneNewComponent,
        pathMatch: 'full', 
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PhoneAdminPageRoutingModule { }
