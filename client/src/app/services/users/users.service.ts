import { Injectable, signal } from "@angular/core";
import { HttpClient } from '@angular/common/http';

import { map, shareReplay } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from "@env";
import { IUser } from "src/app/interfaces/user.model";
import { TokenService } from "@service/auth/token.service";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private apiUrl: string = `${environment.api_url}user`

  public currentUser = signal<IUser>({
    id: 1,
    name: "",
    username: "",
    email: ""
  })

  constructor(
    private http: HttpClient,
    private tokenService: TokenService,
  ) {

  }


  public getUserByID(id: number): Observable<IUser> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<IUser>(url).pipe(
      map((user: IUser) => {
        if (user && user.username) {
          this.currentUser.set(user)
          return user;
        }
        return null as any;
      }),
      shareReplay(1),
    );
  }

  public getUserByIDAndIncreaseVip(id: number, days: number): Observable<IUser> {
    const url = `${this.apiUrl}/vip/${id}`;
    return this.http.patch<IUser>(url, { days }).pipe(
      map((user: IUser) => {
        if (user && user.username) {
          return user;
        }
        return null as any;
      }),
    );
  }



  public getCurrentUser(): IUser {
    const user = this.currentUser()
    
    return user
  }

  public setCurrentUser(user: IUser | null): void {
    user ? this.currentUser.set(user) : null;
  }

  public setCurrentUserByID(id: number): void {
    
    this.getUserByID(id).subscribe((user: IUser | null) => {
      if (user) {
        console.log("set")
        this.currentUser.set(user);
      }
    });
  }



  public checkVipIsValid(user: IUser): boolean {
 
    if (user&&user.expireVipIn) {
      let expireDate = new Date(user.expireVipIn);
      expireDate.setDate(expireDate.getDate() + 1);
      const currentDate = new Date();
      return currentDate < expireDate;
    }
    
    return false;
  }

}
