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
    console.log("get")
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
  public getCurrentUser(): User | null {
    
    const id = this.tokenService.getIdByToken()
    if (id){
      this.setCurrentUserByID(id)
    }
    return this.currentUserSubject.value;
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

  public checkVipIsValid(): boolean{
    const currentUser = this.getCurrentUser
    console.log(currentUser)
    return true
  }

}