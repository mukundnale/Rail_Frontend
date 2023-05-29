import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl: string = "https://localhost:7115/api/Auth/"
  constructor(private http : HttpClient ) { }

  register(userObj:any){
    return this.http.post<any>(`${this.baseUrl}register`,userObj)
  }

  login(loginObj:any){
    return this.http.post<any>(`${this.baseUrl}Login`,loginObj)
  }

  addToken(accessToken: string){
    localStorage.setItem('token', accessToken);
  }
}
