import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'primer-caso',
    loadChildren: () => import('./primer-caso/primer-caso.component').then((m) => m.PrimerCasoComponent),
  },
  {
    path: 'segundo-caso',
    loadChildren: () => import('./segundo-caso/segundo-caso.component').then((m) => m.SegundoCasoComponent),
  },
  
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];
