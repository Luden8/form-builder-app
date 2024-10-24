// src/app/guards/auth.guard.ts
import { Injectable } from '@angular/core';
import {
  CanActivate,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { SessionManagerService } from './session-manager.service';
import { Observable, of } from 'rxjs';
import { switchMap, tap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class SessionManagerGuard implements CanActivate {
  constructor(private sessionService: SessionManagerService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {

    const userId = this.sessionService.getUserId();

    if (userId) {
      return this.sessionService.checkUserExists(userId).pipe(
        switchMap(userExists => {
          if (userExists) {
            return of(true);
          } else {
            return this.createAndStoreNewUser();
          }
        })
      );
    } else {
      return this.createAndStoreNewUser();
    }
  }

  private createAndStoreNewUser(): Observable<boolean> {
    return this.sessionService.createNewUser().pipe(
      tap(newUserId => this.sessionService.setUserId(newUserId)),
      map(() => true)
    );
  }
}
