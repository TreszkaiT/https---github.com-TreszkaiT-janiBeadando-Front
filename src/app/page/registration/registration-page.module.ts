import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {
  RegistrationFormComponent,
  RegistrationPageComponent,
} from './component';
import { RegistrationPageRoutingModule } from './registration-page-routing.module';

@NgModule({
  declarations: [RegistrationFormComponent, RegistrationPageComponent],
  imports: [
    CommonModule,
    RegistrationPageRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class RegistrationPageModule {}
