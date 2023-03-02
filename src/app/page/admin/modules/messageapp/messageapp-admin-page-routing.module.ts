import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MessageappAdminPageComponent } from './component/messageapp-admin-page/messageapp-admin-page.component';
import { MessageappEditComponent } from './component/messageapp-edit/messageapp-edit.component';
import { MessageappListComponent } from './component/messageapp-list/messageapp-list.component';
import { MessageappNewComponent } from './component/messageapp-new/messageapp-new.component';

const routes: Routes = [
  {
    path: '',
    component: MessageappAdminPageComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'messageapp-list',
      },
      {
        path: 'messageapp-list',
        component: MessageappListComponent,   // statikus betöltődés, nem Lazy
        pathMatch: 'full', 
      },
      {
        path: 'messageapp-edit',
        component: MessageappEditComponent,
        pathMatch: 'full', 
      },
      {
        path: 'messageapp-new',
        component: MessageappNewComponent,
        pathMatch: 'full', 
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MessageappAdminPageRoutingModule { }
