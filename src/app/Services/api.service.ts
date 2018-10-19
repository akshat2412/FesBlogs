import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url = 'https://conduit.productionready.io/api';
  constructor(private http: HttpClient) { }

  getArticles() {
    return this.http.get(this.url + '/articles');
  }

  getTags() {
    return this.http.get(this.url + '/tags');
  }

  getArticle(slug: string) {
    return this.http.get(`${this.url}/articles/${slug}`);
  }

  getComments(slug: string) {
    return this.http.get(`${this.url}/articles/${slug}/comments`);
  }

  getArticlesByTag(tag: string) {
    const params = new HttpParams().set('tag', tag);
    return this.http.get(this.url + '/articles', {params: params});
  }
}
