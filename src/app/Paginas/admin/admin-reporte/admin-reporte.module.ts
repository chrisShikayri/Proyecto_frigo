import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { FormsModule } from '@angular/forms';
import { AdminReporteComponent } from './admin-reporte.component';
import { NgModule } from '@angular/core';


@NgModule({
  declarations: [AdminReporteComponent],
  imports: [
    FormsModule,
    InputTextModule,
    ButtonModule,
    TableModule,
  ],
  exports: [AdminReporteComponent]
})
export class FormularioModule { }