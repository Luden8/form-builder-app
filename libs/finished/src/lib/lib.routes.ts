import { Route } from '@angular/router';
import { SessionManagerGuard } from '@form-builder-app/session-manager';

export const finishedRoutes: Route[] = [
  {
    path: 'finished',
    canActivate: [SessionManagerGuard],
    loadComponent: () => import('./finished/finished.component').then(m => m.FinishedComponent),
  },
];
