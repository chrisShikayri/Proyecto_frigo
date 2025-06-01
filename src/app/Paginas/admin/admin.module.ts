import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// PrimeNG
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';

// Routing del módulo admin
import { AdminRoutingModule } from './admin-routing.module';

// Componentes del módulo admin
import { TicketsComponent } from './tickets/tickets.component';

@NgModule({
  declarations: [
    TicketsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AdminRoutingModule,
    CalendarModule,
    DropdownModule,
    InputTextModule,
    ButtonModule
  ]
})
export class AdminModule { }
