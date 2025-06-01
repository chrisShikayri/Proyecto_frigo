import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// PrimeNG módulos necesarios
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';

// Tu componente
import { ListaClienteComponent } from './lista-cliente.component';

@NgModule({
  declarations: [
    ListaClienteComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    TableModule,
    ButtonModule
  ],
  exports: [
    ListaClienteComponent
  ]
})
export class ListaClienteModule {}
