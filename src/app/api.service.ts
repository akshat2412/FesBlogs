import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url = 'https://conduit.productionready.io/api/articles';
  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get(this.url);
  }
}
