import { Injectable } from '@angular/core';
import {environment} from "../app.component";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {IUser} from "../models/user";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiServerUrl = environment.apiServerUrl;

  constructor(private http: HttpClient) { }

  public getUsers(): Observable<IUser[]> {
    return this.http.get<IUser[]>(`${this.apiServerUrl}/user/all`, {
      params: new HttpParams({
        fromObject: {limit: 5}
      })
    })
    //   .pipe(
    //   catchError(this.errorHandler.bind(this))
    // )
  }

  public getUser(userId: number): Observable<IUser> {
    return this.http.get<IUser>(`${this.apiServerUrl}/user/find/${userId}`)
    // .pipe(
    //   catchError(this.errorHandler.bind(this))
    // )
  }

  public addUser(user: IUser): Observable<IUser> {
    return this.http.post<IUser>(`${this.apiServerUrl}/user/add`, user)
    // .pipe(
    //   catchError(this.errorHandler.bind(this))
    // )
  }

  public updateUser(user: IUser): Observable<IUser> {
    return this.http.put<IUser>(`${this.apiServerUrl}/user/update`, user)
    // .pipe(
    //   catchError(this.errorHandler.bind(this))
    // )
  }

  public deleteUser(userId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/user/delete/${userId}`)
    // .pipe(
    //   catchError(this.errorHandler.bind(this))
    // )
  }
}

