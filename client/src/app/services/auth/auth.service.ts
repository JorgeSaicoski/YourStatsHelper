import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of, throwError } from 'rxjs';
import { environment } from '@env';
import { TokenService } from './token.service';
import { User } from '@model/user.model';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private backendUrl = `${environment.api_url}auth`

  constructor(
    private http: HttpClient,
    private tokenService: TokenService
  ) { }

  login(username: string, password: string): Observable<any> {
    const signInDto = { username, password };
    return this.http.post(`${this.backendUrl}/login`, signInDto).pipe(
      map((response: any) => {
        const token = response.token;
        if (token) {
          this.tokenService.setToken(token)
          return response
        }
        throw new Error("Invalid response format")
      }),
      catchError((error: any) => {
        console.error('Login failed:', error);
        return throwError('Invalid credentials')
      })
    );;
  }

  register(user: User): Observable<any> {
    return this.http.post(`${this.backendUrl}/register`, user).pipe(
      map((response: any) => {
        const token = response.access_token;
        if (token) {
          this.tokenService.setToken(token);
          return response;
        }
        throw new Error('Invalid response format'); // Handle unexpected response
      }),
      catchError((error: any) => {
        console.error('Registration failed:', error);
        return of(0);
      })
    );
  }
  logout() {
    this.tokenService.removeToken();
  }
}


