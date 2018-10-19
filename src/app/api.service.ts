import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpParams } from '@angular/common/http';

import { IUser } from '../Models/User.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url = 'https://conduit.productionready.io/api';
  currentUser: IUser;

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

  loginUser(email: string, password: string) {
    const userLoginObject = Object.assign({}, {user: {email, password}});
    return this.http.post(this.url + '/users/login', userLoginObject);
  }

  saveUser(userDetails: any) {
    this.currentUser = userDetails['user'];
    localStorage.setItem('token', this.currentUser.token);
    console.log(this.currentUser);
  }

  isLoggedIn(): Boolean {
    if (this.currentUser) {
      return true;
    }
    return false;
  }

  clearUser(): void {
    localStorage.clear();
  }
}
