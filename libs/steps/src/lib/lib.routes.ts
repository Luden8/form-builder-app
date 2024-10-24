import { Route } from '@angular/router';
import { SessionManagerGuard } from '@form-builder-app/session-manager';

export const stepsRoutes: Route[] = [{
  path: 'steps',
  canActivate: [SessionManagerGuard],
  loadComponent: () => import('./steps.component').then(m => m.StepsComponent)}];
