import { Routes } from '@angular/router';
import { AdminMaterialesComponent } from './admin-materiales/admin-materiales.component';
import { AdminReporteComponent } from './admin-reporte/admin-reporte.component';

export const routes: Routes = [
  { path: '', redirectTo: 'admin-materiales', pathMatch: 'full' },
  { path: 'admin-materiales', component: AdminMaterialesComponent },
  { path: 'admin-reporte', component: AdminReporteComponent }
];

