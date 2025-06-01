import { Routes } from '@angular/router';
import { AdminMaterialesComponent } from './Paginas/admin/admin-materiales/admin-materiales.component';
import { AdminReporteComponent } from './Paginas/admin/admin-reporte/admin-reporte.component';
import { FormularioComponent } from './Paginas/tecnico/formulario/formulario.component';
import { ticket_tecnicoComponent } from './Paginas/tecnico/ticket-tecnico/ticket-tecnico.component';
import { ListaMaterialesComponent } from './Paginas/tecnico/lista-materiales/lista-materiales.component';
import { TicketsComponent } from './Paginas/admin/tickets/tickets.component';
import { ListaTecnicoComponent } from './Paginas/admin/lista-tecnico/lista-tecnico.component';
import { ListaClienteComponent } from './Paginas/admin/lista-cliente/lista-cliente.component';
import { PedidoClienteComponent } from './Paginas/cliente/pedido-cliente/pedido-cliente.component';

export const routes: Routes = [
  { path: 'formulario', component: FormularioComponent },
  { path: 'tecnico', component: ticket_tecnicoComponent },
  { path: 'lista-tecnico', component: ListaTecnicoComponent },
  { path: 'lista-materiales', component: ListaMaterialesComponent },
  { path: '', redirectTo: 'admin-materiales', pathMatch: 'full' },
  { path: 'admin-materiales', component: AdminMaterialesComponent },
  { path: 'admin-reporte', component: AdminReporteComponent },
  { path: 'tickets', component: TicketsComponent },
  { path: 'cliente', component: ListaClienteComponent },
  {path:'pedido-cliente', component: PedidoClienteComponent},


];

