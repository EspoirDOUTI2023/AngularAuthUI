import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = "http://localhost:5000/api/admins/"
  constructor(private http : HttpClient) { }

  login(loginObj:any){
    return this.http.post<any>(`${this.baseUrl}login`, loginObj);
  }



}
