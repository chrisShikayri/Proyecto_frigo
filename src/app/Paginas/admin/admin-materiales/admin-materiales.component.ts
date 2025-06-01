import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';

import { MaterialService } from '../../../servicios/material.service';

interface Material {
  id: string;
  nombre: string;
  descripcion: string;
  stock: number;
  editable: boolean;
}

@Component({
  selector: 'app-admin-materiales',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    TableModule,
    InputTextModule,
    ButtonModule
  ],
  templateUrl: './admin-materiales.component.html',
  styleUrls: ['./admin-materiales.component.scss']
})
export class AdminMaterialesComponent {
  materiales: Material[] = [];

  constructor(private materialService: MaterialService) {
    const base = this.materialService.obtenerMateriales();
    this.materiales = base.map(m => ({ ...m, editable: false }));
  }

  agregarFila() {
    this.materiales.push({
      id: '',
      nombre: '',
      descripcion: '',
      stock: 0,
      editable: true
    });
  }

  guardarFila(index: number) {
    const mat = this.materiales[index];

    if (!mat.id || !mat.nombre || !mat.descripcion) {
      alert('Todos los campos deben estar completos.');
      return;
    }

    if (mat.stock < 0) {
      alert('El stock no puede ser negativo.');
      return;
    }

    mat.editable = false;

    const yaExiste = this.materialService
      .obtenerMateriales()
      .some(m => m.id === mat.id);
    if (!yaExiste) {
      this.materialService.agregarMaterial({
        id: mat.id,
        nombre: mat.nombre,
        descripcion: mat.descripcion,
        stock: mat.stock
      });
    }
  }

  editarFila(index: number) {
    this.materiales[index].editable = true;
  }

  eliminarFila(index: number) {
    this.materiales.splice(index, 1);
  }
}
