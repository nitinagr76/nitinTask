import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from  '@angular/common/http';
// import { Observable, throwError } from 'rxjs';
// import { catchError, retry } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl = 'https://reqres.in/api/users'

  constructor(private _http:HttpClient) {
   
  }

   //Get Customer API CALL
   public getUsers() {
    return this._http.get<any[]>(this.baseUrl);
  };

  public deleteUser(id) {
    return this._http.delete<any[]>(this.baseUrl+'/'+id);
  };
  public getUserByid(id) {
    return this._http.get<any[]>(this.baseUrl+'/'+id);
  };

  
}
