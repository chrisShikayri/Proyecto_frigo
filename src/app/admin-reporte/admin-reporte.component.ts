import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

interface Material {
  id: string;
  nombre: string;
  descripcion: string;
  stock: number;
}

@Component({
  selector: 'app-admin-reporte',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './admin-reporte.component.html',
  styleUrls: ['./admin-reporte.component.scss']
})
export class AdminReporteComponent {
  empresa = '';
  descripcion = '';
  recomendacion = '';
  modalAbierto = false;

  // Simula el inventario disponible
  materialesDisponibles: Material[] = [
    { id: '01', nombre: 'Plomo', descripcion: 'Metal pesado', stock: 100 },
    { id: '02', nombre: 'Aceite', descripcion: 'Lubricante para motor', stock: 50 },
    { id: '03', nombre: 'Tornillo', descripcion: 'Fijación mecánica', stock: 200 }
  ];

  materialesUsados: { nombre: string; cantidad: number }[] = [];

  materialBuscado = '';
  resultadosBusqueda: Material[] = [];

  guardar() {
    this.modalAbierto = true;
  }

  generarPDF() {
    console.log('Generar PDF...');
  }

  buscarMaterial() {
    const termino = this.materialBuscado.toLowerCase().trim();
    this.resultadosBusqueda = this.materialesDisponibles.filter(m =>
      m.nombre.toLowerCase().includes(termino)
    );
  }

  seleccionarMaterial(material: Material) {
    const yaAgregado = this.materialesUsados.some(m => m.nombre === material.nombre);
    if (!yaAgregado) {
      this.materialesUsados.push({ nombre: material.nombre, cantidad: 1 });
    }
    this.materialBuscado = '';
    this.resultadosBusqueda = [];
  }
}
