import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FormularioComponent } from './formulario.component';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { TextareaModule } from 'primeng/textarea';
import { TableModule } from 'primeng/table';
import { PanelModule } from 'primeng/panel';

@NgModule({
  declarations: [FormularioComponent],
  imports: [
    CommonModule,
    FormsModule,
    InputTextModule,
    DropdownModule,
    ButtonModule,
    TextareaModule,
    TableModule,
    PanelModule
  ],
  exports: [FormularioComponent]
})
export class FormularioModule { }
