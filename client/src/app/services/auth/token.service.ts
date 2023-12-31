import { Injectable } from '@angular/core';
import { environment } from '@env';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  private readonly TOKEN_KEY = environment.currentSession;

  constructor(private jwtHelper: JwtHelperService) {}


  setToken(token: string): number {
    localStorage.setItem(this.TOKEN_KEY, token);  
    return this.jwtHelper.decodeToken(token).sub
  }


  getToken(): string | null {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  getIdByToken(): number | null {
    const token = localStorage.getItem(this.TOKEN_KEY);
    if (token){
      return this.jwtHelper.decodeToken(token).sub
    }
    return null    
  }
  


  removeToken(): void {
    localStorage.removeItem(this.TOKEN_KEY);
  }


  isAuthenticated(): boolean {
    return !!this.getToken();
  }
}