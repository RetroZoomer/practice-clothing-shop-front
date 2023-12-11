import { Injectable } from '@angular/core';
import {environment} from "../app.component";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {IUser} from "../models/user";
import {TokenStorageService} from "../auth/_services/token-storage.service";

const API = 'http://localhost:8080/user/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {
  currentUser: IUser;

  constructor(private http: HttpClient,
              private token: TokenStorageService) { }

  public getUsers(): Observable<IUser[]> {
    return this.http.get<IUser[]>(API + 'all', {
      params: new HttpParams({
        fromObject: {limit: 5}
      })
    })
  }

  public getUser(userId: number): Observable<IUser> {
    return this.http.get<IUser>(API + `find/${userId}`)
  }

  // public addUser(user: IUser): Observable<IUser> {
  //   return this.http.post<IUser>(`${this.apiServerUrl}/user/add`, user)
  // }

  public updateUser(user: IUser): Observable<IUser> {
    this.currentUser = this.token.getUser();
    this.currentUser.password = user.password;
    return this.http.put<IUser>(API + 'update', this.currentUser, httpOptions)
  }

  public deleteUser(userId: number): Observable<void> {
    return this.http.delete<void>(API + `delete/${userId}`)
  }
}

