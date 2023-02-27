import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CityAdminPageComponent } from './component/city-admin/city-admin-page.component';
import { CityEditComponent } from './component/city-edit/city-edit.component';
import { CityListComponent } from './component/city-list';
import { CityNewComponent } from './component/city-new/city-new.component';

const routes: Routes = [
  {
    path: '',
    component: CityAdminPageComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'city-list',
      },
      {
        path: 'city-list',
        component: CityListComponent,
        pathMatch: 'full', 
      },
      {
        path: 'city-edit',
        component: CityEditComponent,
        pathMatch: 'full', 
      },
      {
        path: 'city-new',
        component: CityNewComponent,
        pathMatch: 'full', 
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CityAdminPageRoutingModule {}
