import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/home/home.component').then((m) => m.HomeComponent),
    title: 'Inicio - NGX Material Extra',
  },
  {
    path: 'avatars',
    loadComponent: () =>
      import('./pages/avatars/avatars.component').then(
        (m) => m.AvatarsComponent
      ),
    title: 'Avatars - NGX Material Extra',
  },
];
