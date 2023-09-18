import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';
import { BehaviorSubject, Observable} from 'rxjs';
import { environment } from "@env";
import { User } from "@model/user.model";
import { TokenService } from "@service/auth/token.service";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private apiUrl: string = `${environment.api_url}user`
  private currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<any>;

  constructor(
    private http: HttpClient,
    private tokenService: TokenService,
  ) {
    this.currentUserSubject = new BehaviorSubject<any>(null);
    this.currentUser = this.currentUserSubject.asObservable();
  }


  public getUserByID(id: number): Observable<User> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<User>(url).pipe(
      map((user: User) => {
        if (user&&user.username) {
          return user;
        }
        return null as any;
      }),
    );
  }

  public getUserByIDAndIncreaseVip(body:any): Observable<User> {
    console.log(body)
    const url = `${this.apiUrl}/vip/${body.id}`;
    return this.http.patch<User>(url, {body}).pipe(
      map((user: User) => {
        if (user&&user.username) {
          return user;
        }
        return null as any;
      }),
    );
  }



  public getCurrentUser(): void {
    
    const id = this.tokenService.getIdByToken()
    if (id){
      this.setCurrentUserByID(id)
    }
  }

  public setCurrentUser(user: User | null): void {
    this.currentUserSubject.next(user);
  }

  public setCurrentUserByID(id: number): void {
    console.log("set")
    this.getUserByID(id).subscribe((user: User | null) => {
      if (user) {
        this.currentUserSubject.next(user);
      }
    });
  }

  public checkVipIsValid(): boolean {
    const currentUser = this.currentUserSubject.value; // Get the current user from the BehaviorSubject
  
    if (currentUser && currentUser.expireVipIn) {
      const expireDate = new Date(currentUser.expireVipIn);
      const currentDate = new Date();
      
      // Check if the current date is before or equal to the VIP expiration date
      return currentDate <= expireDate;
    }
  
    return false; // Return false if there's no current user or no VIP expiration date
  }

}