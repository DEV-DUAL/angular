import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from '../models/cliente';
import { Response } from '../models/response';

const httpOption={
  headers: new HttpHeaders({
    'Contend-Type': 'application/json'

  })
};

@Injectable({
  providedIn: 'root'
})
export class ApiclienteService {

  url: string = ' https://localhost:44361/api/cliente';
  constructor(
    private http: HttpClient
  ) { }

  getClientes(): Observable<Response>
  {
      return this.http.get<Response>(this.url);
  }

  add(cliente: Cliente):Observable<Response>{
    return this.http.post<Response>(this.url, cliente,httpOption);
  }

  /*editar*/
  edit(cliente: Cliente):Observable<Response>{
    return this.http.put<Response>(this.url, cliente,httpOption);
  }

    /*eliminar*/
    delete(id: number):Observable<Response>{
      return this.http.delete<Response>(`${this.url}/${id}`);
    }
}
