import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LanguageAdminPageComponent } from './component/language-admin/language-admin-page.component';
import { LanguageListComponent } from './component/language-list/language-list.component';

const routes: Routes = [
  {
    path: '',
    component: LanguageAdminPageComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'language-list',
      },
      {
        path: 'language-list',
        component: LanguageListComponent,   // statikus betöltődés, nem Lazy
        pathMatch: 'full', 
      },
      // {
      //   path: 'language-edit',
      //   component: LanguageEditComponent,
      //   pathMatch: 'full', 
      // },
      // {
      //   path: 'language-new',
      //   component: LanguageNewComponent,
      //   pathMatch: 'full', 
      // },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LanguageAdminPageRoutingModule { }
