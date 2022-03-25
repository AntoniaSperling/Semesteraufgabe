import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Dienst } from './dienst';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  baseUrl = 'http://localhost:3000/dienste';
  userRoute = 'http://localhost:3000/users';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Dienst[]>{
    return this.http.get<Dienst[]>(this.baseUrl);
  }

  getOne(id: string): Observable<Dienst>{
    return this.http.get<Dienst>(this.baseUrl + '/' + id);
  }

  update(id: string, data: Dienst): Observable<Dienst> {
    return this.http.patch<Dienst>(this.baseUrl + '/' + id, data);
  }

  create(data: Dienst): Observable<Dienst> {
    return this.http.post<Dienst>(this.baseUrl, data);
  }

  deleteOne(id: string): Observable<any>{
    return this.http.delete<any>(this.baseUrl + '/' + id, {observe: 'response'});
  } 
 // User
  registerNewUser(user: User): Observable<User>{
    return this.http.post<User>(this.userRoute, user);
  }

  checkIfExist(email: string): Observable<User>{
    return this.http.get<User>(this.userRoute + '/' + email);
  }
}