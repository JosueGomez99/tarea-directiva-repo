import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'primer-caso',
    loadComponent: () => import('./primer-caso/primer-caso.component').then((m) => m.PrimerCasoComponent),
  },
  {
    path: '',
    redirectTo: 'primer-caso',
    pathMatch: 'full',
  },
];
