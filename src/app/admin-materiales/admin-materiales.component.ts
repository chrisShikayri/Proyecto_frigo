import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialService } from '../servicios/material.service';
import { RouterModule } from '@angular/router'; // <- importante


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
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './admin-materiales.component.html',
  styleUrls: ['./admin-materiales.component.scss']
})
export class AdminMaterialesComponent {
  materiales: Material[] = [];

  constructor(private materialService: MaterialService) {
    // Cargar materiales iniciales desde el servicio
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

    // Guardar en el servicio (si aún no existe por ID)
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




