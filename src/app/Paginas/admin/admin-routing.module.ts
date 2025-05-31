import { Routes } from '@angular/router';
import { TicketsComponent } from './tickets/tickets.component';

const routes: Routes = [
  {
    path: 'tickets',
    loadComponent: () => import('./tickets/tickets.component').then(m => m.TicketsComponent)
  }
];
