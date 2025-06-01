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
import { LoginComponent } from './auth/components/login/login.component';
import { RegisterComponent } from './auth/components/register/register.component';
import { ChangePasswordComponent } from './auth/components/change-password/change-password.component';
import { ForgotPasswordComponent } from './auth/components/forgot-password/forgot-password.component';
import { AdminPedidoComponent } from './Paginas/admin/admin-pedido/admin-pedido.component';
import { VerifyCodeComponent } from './auth/components/verify-code/verify-code.component';

export const routes: Routes = [
  { path: 'formulario', component: FormularioComponent },
  { path: 'tecnico', component: ticket_tecnicoComponent },
  { path: 'lista-tecnico', component: ListaTecnicoComponent },
  { path: 'lista-materiales', component: ListaMaterialesComponent },
  { path: 'admin-materiales', component: AdminMaterialesComponent },
  { path: 'admin-reporte', component: AdminReporteComponent },
  { path: 'tickets', component: TicketsComponent },
  { path: 'cliente', component: ListaClienteComponent },
  { path: 'pedido-cliente', component: PedidoClienteComponent},
  {path:'pedido-admin', component: AdminPedidoComponent},
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'change-password', component: ChangePasswordComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'verify-code', component: VerifyCodeComponent},
  {path:'admin-ListaCliente', component: ListaClienteComponent},
];

