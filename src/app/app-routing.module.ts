import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent } from './frames/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'admin'
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./page/admin/admin-page.module').then(
        (module) => module.AdminPageModule
      ),
  },
  {
    path: 'registration',
    loadChildren: () =>
      import('./page/registration/registration-page.module').then(
        (module) => module.RegistrationPageModule
      ),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./page/login/login-page.module').then(
        (module) => module.LoginPageModule
      ),
  },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
