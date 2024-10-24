// src/app/services/user.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class SessionManagerService {
  private USER_ID_KEY = 'user_id';
  private apiUrl = 'http://localhost:4200/api/users'; // Replace with your backend URL

  constructor(private http: HttpClient) {}

  getUserId(): string | null {
    return localStorage.getItem(this.USER_ID_KEY);
  }

  setUserId(id: string): void {
    localStorage.setItem(this.USER_ID_KEY, id);
  }

  checkUserExists(userId: string): Observable<boolean> {
    return this.http.get(`${this.apiUrl}/${userId}`).pipe(
      map(() => true),
      catchError(() => of(false))
    );
  }

  createNewUser(): Observable<string> {
    return this.http.post<{ id: string }>(this.apiUrl, {}).pipe(
      map(response => response.id)
    );
  }

  dropSession(): void {
    console.log('Dropping session');
    const id = this.getUserId()
    localStorage.removeItem(this.USER_ID_KEY);
    this.http.delete(`${this.apiUrl}/${id}`).subscribe();
  }
}
