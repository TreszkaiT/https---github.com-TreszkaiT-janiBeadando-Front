import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { ImageModule } from 'primeng/image';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { MenubarModule } from 'primeng/menubar';
import { TableModule } from 'primeng/table';
import { TabViewModule } from 'primeng/tabview';
import { ToolbarModule } from 'primeng/toolbar';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

@NgModule({
  exports: [
    CommonModule,
    ButtonModule,
    DropdownModule,
    FormsModule,
    ImageModule,
    InputTextareaModule,
    InputTextModule,
    MenubarModule,
    TableModule,
    TabViewModule,
    ToolbarModule,
  ],
  imports: [
    CommonModule,
    ButtonModule,
    DropdownModule,
    FormsModule,
    ImageModule,
    InputTextareaModule,
    InputTextModule,
    MenubarModule,
    TableModule,
    TabViewModule,
    ToolbarModule,
  ],
})
export class SharedModule {}
