import { Route } from '@angular/router';
import { homeRoutes } from '@form-builder-app/home'
import { stepsRoutes } from '@form-builder-app/steps'
import { finishedRoutes } from '@form-builder-app/finished'
export const appRoutes: Route[] = [{
  path: '',
  children: [
    ...homeRoutes, ...stepsRoutes, ...finishedRoutes
  ]
}];
