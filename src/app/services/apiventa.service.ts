import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Venta } from '../models/venta';
import { Response } from '../models/response';

const httpOption = {
  headers: new HttpHeaders({
    'Contend-Type': 'aplication/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class ApiventaService {

  url: string = 'https://localhost:44361/api/Venta';

  constructor(
    private _http: HttpClient,
  ) { }

  //Insertar datos
  add(venta: Venta): Observable<Response> {
    console.log(venta);
    return this._http.post<Response>(this.url, venta, httpOption);
  }
}

