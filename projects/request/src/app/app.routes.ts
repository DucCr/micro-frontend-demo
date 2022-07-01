import { Routes } from '@angular/router';
import { RequestComponent } from './request/request.component';

export const REQUEST_ROUTES: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: RequestComponent,
        pathMatch: 'full',
      },
    ],
  },
];

export const APP_ROUTES: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'request',
  },
  {
    path: 'request',
    loadChildren: () => import('./request.module').then((m) => m.RequestModule),
  },
];
