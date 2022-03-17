import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Dienst } from './dienst';

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  baseUrl = 'http://localhost:3000/dienste';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Dienst[]>{
    return this.http.get<Dienst[]>(this.baseUrl);
  }
}
