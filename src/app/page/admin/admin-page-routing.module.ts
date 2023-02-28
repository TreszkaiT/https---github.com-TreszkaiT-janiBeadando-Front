import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminPageComponent } from './component';
import { PersonComponent } from './modules/person/person.component';

const routes: Routes = [
  {
    path: '',                                                             // ha az admin URL meg van hívva
    component: AdminPageComponent,
    children: [
      {
        path: 'person',                                                 // akkor statikusan a persont fogja betölteni
        component: PersonComponent,
      },
      {
        path: 'city',                                                   // Lazy modon meg a city-t, ha szükség lezs rá
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
