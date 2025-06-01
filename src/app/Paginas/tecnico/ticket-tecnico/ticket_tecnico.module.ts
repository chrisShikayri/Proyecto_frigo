import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { TextareaModule } from 'primeng/textarea';
import { TableModule } from 'primeng/table';
import { PanelModule } from 'primeng/panel';
import { ticket_tecnicoComponent } from './ticket-tecnico.component';

@NgModule({
  declarations: [ticket_tecnicoComponent],
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
  exports: [ticket_tecnicoComponent]
})
export class FormularioModule { }
