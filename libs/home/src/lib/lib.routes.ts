import { Route } from '@angular/router';
import { SessionManagerGuard } from '@form-builder-app/session-manager';

export const homeRoutes: Route[] = [{
    path: '',
    canActivate: [SessionManagerGuard],
    loadComponent: () => import('./home.component')
      .then(m => m.HomeComponent)
  }];
