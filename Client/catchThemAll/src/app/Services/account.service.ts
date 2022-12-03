import {Injectable} from '@angular/core';
import {map, of, ReplaySubject} from "rxjs";
import {IUser} from "../Interfaces/User";
import {HttpClient,HttpClientModule ,HttpHeaders} from "@angular/common/http";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})

export class AccountService {
  private currentUserSource = new ReplaySubject<IUser>(1);
  currentUser$ = this.currentUserSource.asObservable();

  constructor(private http: HttpClient, private router: Router) {
  }

  login(values: any) {
    return this.http.post<IUser>('SOME URL', values).pipe(
      map((user: IUser) => {
        if (user) {
          localStorage.setItem('token', user.token);
          this.currentUserSource.next(user);
        }
      })
    );
  }

  getToken() {
    return localStorage.getItem('token')
  }

  logout() {
    localStorage.removeItem('token')
    // @ts-ignore
    this.currentUserSource.next(null);
    this.router.navigateByUrl('/');
  }

  loadCurrentUser(token: String) {
    if (token === null) {
      // @ts-ignore
      this.currentUserSource.next(null);
      return of(null);
    }

    let headers = new HttpHeaders();
    headers = headers.set('Authorization', `Bearer ${token}`);

    return this.http.get<IUser>('account', { headers }).pipe(
      map((user: IUser) => {
        if (user) {
          localStorage.setItem('token', user.token);
          this.currentUserSource.next(user);
        }
      })
    );
  }


}