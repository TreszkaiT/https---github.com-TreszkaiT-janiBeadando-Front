import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegistrationPageComponent } from './component';

const routes: Routes = [
	{
		path: '',
		pathMatch: 'full',
		component: RegistrationPageComponent,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class RegistrationPageRoutingModule {}
