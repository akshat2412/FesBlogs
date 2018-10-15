import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url = 'https://conduit.productionready.io/api/';
  constructor(private http: HttpClient) { }

  getArticles() {
    return this.http.get(this.url + 'articles');
  }

  getTags() {
    return this.http.get(this.url + 'tags');
  }
}
