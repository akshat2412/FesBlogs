import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpParams, HttpHeaders } from '@angular/common/http';

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
    localStorage.clear();
    localStorage.setItem('token', this.currentUser.token);
    console.log(this.currentUser);
  }

  isLoggedIn(): boolean {
    if (this.currentUser) {
      return true;
    }
    return false;
  }

  clearUser(): void {
    localStorage.clear();
  }

  registerUser(username: string, email: string, password: string) {
    const userRegistrationObject = Object.assign({}, {user: {username, email, password}});
    return this.http.post(this.url + '/users', userRegistrationObject);
  }

  getUserName() {
    if (this.currentUser) {
      return this.currentUser.username;
    }
    return null;
  }

  publishArticle(title: string, description: string, body: string, tags?: string) {
    let tagList: string[];
    if ( !!tags ) {
      tagList = tags.split(' ');
    }
    let articlePostObject = Object.assign({}, {article: {title, description, body}});
    if ( tagList && tagList.length > 0) {
      articlePostObject = Object.assign({}, {article: {title, description, body, tagList}});
    }
    const headers = new HttpHeaders().set('Content-Type', 'application/json')
                               .set('Authorization', 'Token ' + localStorage.getItem('token'));
    return this.http.post(this.url + '/articles', articlePostObject, {headers: headers});
  }

  getProfile(handle: string){
    return this.http.get(this.url + '/profiles/' + handle);
  }

  getArticlesByUser(username: string) {
    const params = new HttpParams().set('author', username);
    return this.http.get(this.url + '/articles', {params: params});
  }

  getFavoritedArticlesByUser(username: string) {
    const params = new HttpParams().set('favorited', username);
    return this.http.get(this.url + '/articles', {params: params});
  }

  updateUser(email: string, bio: string, image: string, username: string, password: string) {
    const headers = new HttpHeaders().set('Content-Type', 'application/json')
                                     .set('Authorization', 'Token ' + localStorage.getItem('token'));
    const userUpdateObject = Object.assign({}, {user: {email, bio, image, username, password}});
    return this.http.put(this.url + '/user', userUpdateObject, {headers: headers});
  }

  updateArticle(title: string, description: string, body: string, slug: string) {
    const headers = new HttpHeaders().set('Content-Type', 'application/json')
                                     .set('Authorization', 'Token ' + localStorage.getItem('token'));
    const articleUpdateObject = Object.assign({}, {article: {title, description, body}});
    return this.http.put(this.url + '/articles/' + slug, articleUpdateObject, {headers: headers});
  }

  deleteArticle(slug: string) {
    const headers = new HttpHeaders().set('Content-Type', 'application/json')
                                     .set('Authorization', 'Token ' + localStorage.getItem('token'));
    return this.http.delete(this.url + '/articles/' + slug, {headers});
  }
}
