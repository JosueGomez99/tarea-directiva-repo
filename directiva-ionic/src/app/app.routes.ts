import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'primer-caso',
    loadComponent: () => import('./primer-caso/primer-caso.component').then((m) => m.PrimerCasoComponent),
  },
  {
    path: 'segundo-caso',
    loadComponent: () => import('./segundo-caso/segundo-caso.component').then((m) => m.SegundoCasoComponent),
  },
  {
    path: 'tercer-caso',
    loadComponent: () => import('./tercer-caso/tercer-caso.component').then((m) => m.TercerCasoComponent),
  },
  {
    path: 'cuarto-caso',
    loadComponent: () => import('./cuarto-caso/cuarto-caso.component').then((m) => m.CuartoCasoComponent),
  },
  {
    path: 'quinto-caso',
    loadComponent: () => import('./quinto-caso/quinto-caso.component').then((m) => m.QuintoCasoComponent),
  },
  
  
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];
