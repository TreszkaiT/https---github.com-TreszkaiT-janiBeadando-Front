import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminPageComponent } from './component';
import { PersonComponent } from './modules/person/person.component';

const routes: Routes = [
  {
    path: '',
    component: AdminPageComponent,
    children: [
      {
        path: 'person',
        component: PersonComponent,
      },
      {
        path: 'city',
        loadChildren: () =>
          import('./modules/city/city-admin-page.module').then(
            (module) => module.CityAdminPageModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminPageRoutingModule {}
