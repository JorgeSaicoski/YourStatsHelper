import { Injectable, signal } from "@angular/core";
import { HttpClient } from '@angular/common/http';

import { map, shareReplay } from 'rxjs/operators';
import { BehaviorSubject, Observable} from 'rxjs';
import { environment } from "@env";
import { User } from "@model/user.model";
import { TokenService } from "@service/auth/token.service";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private apiUrl: string = `${environment.api_url}user`
  
  public currentUser = signal<User>({
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


  public getUserByID(id: number): Observable<User> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<User>(url).pipe(
      map((user: User) => {
        if (user&&user.username) {
          this.currentUser.set(user)
          return user;
        }
        return null as any;
      }),
      shareReplay(1),
    );
  }

  public getUserByIDAndIncreaseVip(id:number, days: number): Observable<User> {
    const url = `${this.apiUrl}/vip/${id}`;
    return this.http.patch<User>(url, {days}).pipe(
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
      this.getUserByID(id).subscribe((user)=>{
        this.currentUser.set(user);
      })
    } 
  }

  public setCurrentUser(user: User | null): void {
    user?this.currentUser.set(user):null;
  }

  public setCurrentUserByID(id: number): void {
    console.log("set")
    this.getUserByID(id).subscribe((user: User | null) => {
      if (user) {
        this.currentUser.set(user);
      }
    });
  }



  public checkVipIsValid(): boolean {
    this.getCurrentUser()
    const currentUser = this.currentUser();
    console.log("currentUser")
    console.log(currentUser)
  
    if (currentUser && currentUser.expireVipIn) {
      const expireDate = new Date(currentUser.expireVipIn);
      const currentDate = new Date();
      
      return currentDate <= expireDate;
    }
  
    return false; 
  }

}
