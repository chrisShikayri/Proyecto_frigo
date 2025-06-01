import { Routes } from '@angular/router';
import { AdminMaterialesComponent } from './Paginas/Admin/admin-materiales/admin-materiales.component';
import { AdminReporteComponent } from './Paginas/Admin/admin-reporte/admin-reporte.component';
import { FormularioComponent } from './Paginas/tecnico/formulario/formulario.component';
import { ticket_tecnicoComponent } from './Paginas/tecnico/ticket-tecnico/ticket-tecnico.component';
import { ListaMaterialesComponent } from './Paginas/tecnico/lista-materiales/lista-materiales.component';
import { TicketsComponent } from './Paginas/Admin/tickets/tickets.component';

export const routes: Routes = [
  { path: 'formulario', component: FormularioComponent },
  { path: 'tecnico', component: ticket_tecnicoComponent },
  { path: 'lista-materiales', component: ListaMaterialesComponent },
  { path: '', redirectTo: 'admin-materiales', pathMatch: 'full' },
  { path: 'admin-materiales', component: AdminMaterialesComponent },
  { path: 'admin-reporte', component: AdminReporteComponent },
  { path: 'tickets', component: TicketsComponent },
];

