import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { PanelModule } from 'primeng/panel';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    InputTextModule,
    DropdownModule,
    ButtonModule,
    TableModule,
    PanelModule
  ],
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {
  empresa = 'Empresa Kfc';
  ticketId = '001';
  estado: string = '';
  horaEntrada: string = '';
  horaSalida: string = '';
  descripcion: string = '';
  recomendacion: string = '';

  datosEquipo: { [key: string]: string } = {};

  materialesDisponibles = [
    { nombre: 'Plomo' },
    { nombre: 'Cobre' },
    { nombre: 'Silicona' },
    { nombre: 'Cable' }
  ];

  materialSeleccionado: any = null;
  materialesSeleccionados: { nombre: string; cantidad: number }[] = [];

  ngOnInit() {}

  agregarMaterial() {
    if (this.materialSeleccionado) {
      const yaExiste = this.materialesSeleccionados.some(
        m => m.nombre === this.materialSeleccionado.nombre
      );
      if (!yaExiste) {
        this.materialesSeleccionados.push({
          nombre: this.materialSeleccionado.nombre,
          cantidad: 1
        });
      }
      this.materialSeleccionado = null;
    }
  }

  eliminarMaterial(nombre: string) {
    this.materialesSeleccionados = this.materialesSeleccionados.filter(m => m.nombre !== nombre);
  }

  guardarReporte() {
    const reporte = {
      empresa: this.empresa,
      ticketId: this.ticketId,
      estado: this.estado,
      horaEntrada: this.horaEntrada,
      horaSalida: this.horaSalida,
      datosEquipo: this.datosEquipo,
      descripcion: this.descripcion,
      materiales: this.materialesSeleccionados,
      recomendacion: this.recomendacion
    };
    console.log('Reporte guardado:', reporte);
  }
}
