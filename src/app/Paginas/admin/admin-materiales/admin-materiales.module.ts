import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms'; // necesario para [(ngModel)]
import { AdminMaterialesComponent } from './admin-materiales.component';
import { NgModule } from '@angular/core';


@NgModule({
  declarations: [AdminMaterialesComponent],
  imports: [
    FormsModule,
    InputTextModule,
    ButtonModule,
    TableModule,
  ],
  exports: [AdminMaterialesComponent]
})
export class FormularioModule { }