import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(
    private _http: HttpClient
  ) { }

  public getProducts(): Observable<any[]> {
    return this._http.get<Array<any>>('https://ssdev.superagent.ru/TestApp/Values/GetWithParent');
  }
}
