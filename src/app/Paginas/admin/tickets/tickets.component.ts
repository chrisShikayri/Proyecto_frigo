import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextarea } from 'primeng/inputtextarea';
import { ButtonModule } from 'primeng/button';

// Definir interfaz para el modelo Ticket
interface Ticket {
  id?: number;
  fechaVisita?: Date;
  horaVisita?: string;
  tecnico?: any;
  estado?: string;
  detalle?: string;
}

@Component({
  selector: 'app-tickets',
  standalone: true, // Si estás usando Angular 17+ con standalone
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.scss'],
  imports: [ // Importar módulos necesarios para el template
    FormsModule,
    CalendarModule,
    DropdownModule,
    InputTextModule,
    InputTextarea,
    ButtonModule
  ]
})
export class TicketsComponent implements OnInit {
  // Definir propiedad ticket con valores iniciales
  ticket: Ticket = {
    id: 0,
    fechaVisita: new Date(),
    horaVisita: '',
    tecnico: null,
    estado: 'Pendiente',
    detalle: ''
  };

  // Definir lista de técnicos para el dropdown
  tecnicos = [
    { name: 'Técnico 1', id: 1 },
    { name: 'Técnico 2', id: 2 },
    { name: 'Técnico 3', id: 3 }
  ];

  ngOnInit(): void {
    // Lógica de inicialización si es necesario
  }

  // Implementar método guardarTicket
  guardarTicket() {
    console.log('Guardando ticket:', this.ticket);
    // Aquí iría la lógica para guardar el ticket
  }
}