import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent } from './frames/page-not-found/page-not-found.component';
import { AdminPageGuard } from './page/admin/guard';

const routes: Routes = [
  {
    path: '',                           // a 4200-as portot meghívví
    pathMatch: 'full',
    redirectTo: 'admin',                // átirányít az egyel lejjebb lévő admin poute-ra / page-ra, oldalra
  },
  {
    path: 'admin',                    // ez nem statikus oldal, hanem egy Lazy Load page, mely ezt a három oldalt nem buildeli bele ng build (ng serve) után az alkalmazásba, hanem changot készít belőle, amit csak akkor tölt majd le a szerverről, ha szükség van rá
    loadChildren: () =>
      import('./page/admin/admin-page.module').then(
        (module) => module.AdminPageModule              // Route: URL-el megcímezhető tartalom, mem minig Page!!!
      ),
    canActivate: [AdminPageGuard],              // megvizsgálja, hogy ez a Contetnt engedélyezett-e; azaz ez a Page betöltődjön
    
  },
  {
    path: 'registration',                       // Lazy load ez is és az alatt lévő is
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
