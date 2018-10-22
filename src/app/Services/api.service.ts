import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

import { AuthService } from './auth.service';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient, private authService: AuthService) { }

  getArticles(pageNumber: number) {
    const offset = (pageNumber - 1) * 10;
    const params = new HttpParams().set('offset', offset.toString())
                                   .set('limit', '10');
    if (this.authService.isLoggedIn()) {
      const headers = this.authService.setHeaders();
      return this.http.get(`${environment.apiUrl}/articles`, {headers, params});
    }
    return this.http.get(`${environment.apiUrl}/articles`, {params});
  }

  getTags() {
    return this.http.get(`${environment.apiUrl}/tags`);
  }

  getArticle(slug: string) {
    if (this.authService.isLoggedIn()) {
      const headers = this.authService.setHeaders();
      return this.http.get(`${environment.apiUrl}/articles/${slug}`, {headers});
    }
    return this.http.get(`${environment.apiUrl}/articles/${slug}`);
  }

  getComments(slug: string) {
    return this.http.get(`${environment.apiUrl}/articles/${slug}/comments`);
  }

  getArticlesByTag(tag: string, pageNumber: number) {
    const offset = (pageNumber - 1) * 20;
    const params = new HttpParams().set('tag', tag)
                                   .set('limit', '10')
                                   .set('offset', offset.toString());
    if (this.authService.isLoggedIn()) {
      const headers = this.authService.setHeaders();
      return this.http.get(`${environment.apiUrl}/articles`, {params, headers});
    }
    return this.http.get(`${environment.apiUrl}/articles`, {params});
  }


  registerUser(username: string, email: string, password: string) {
    const userRegistrationObject = Object.assign({}, {user: {username, email, password}});
    return this.http.post(`${environment.apiUrl}/users`, userRegistrationObject);
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
    const headers = this.authService.setHeaders();
    return this.http.post(`${environment.apiUrl}/articles`, articlePostObject, {headers: headers});
  }

  getProfile(handle: string){
    if ( this.authService.isLoggedIn() ) {
      const headers = this.authService.setHeaders();
      return this.http.get(`${environment.apiUrl}/profiles/${handle}`, {headers});
    }
    return this.http.get(`${environment.apiUrl}/profiles/${handle}`);
  }

  getArticlesByUser(username: string, pageNumber: number) {
    const offset = (pageNumber - 1) * 10;
    const params = new HttpParams().set('offset', offset.toString())
                                  .set('limit', '10')
                                  .set('author', username);
    return this.http.get(`${environment.apiUrl}/articles`, {params: params});
  }

  getFavoritedArticlesByUser(username: string, pageNumber) {
    const offset = (pageNumber - 1) * 10;
    const params = new HttpParams().set('offset', offset.toString())
                                  .set('limit', '10')
                                  .set('favorited', username);
    if (this.authService.isLoggedIn()) {
      const headers = this.authService.setHeaders();
      return this.http.get(`${environment.apiUrl}/articles`, {params, headers});
    }
    return this.http.get(`${environment.apiUrl}/articles`, {params});
  }

  updateUser(email: string, bio: string, image: string, username: string, password: string) {
    const headers = this.authService.setHeaders();
    const userUpdateObject = Object.assign({}, {user: {email, bio, image, username, password}});
    return this.http.put(`${environment.apiUrl}/user`, userUpdateObject, {headers: headers});
  }

  updateArticle(title: string, description: string, body: string, slug: string) {
    const headers = this.authService.setHeaders();
    const articleUpdateObject = Object.assign({}, {article: {title, description, body}});
    return this.http.put(`${environment.apiUrl}/articles/${slug}`, articleUpdateObject, {headers: headers});
  }

  deleteArticle(slug: string) {
    const headers = this.authService.setHeaders();
    return this.http.delete(`${environment.apiUrl}/articles/${slug}`, {headers});
  }

  followUser(username: string) {
    const headers = this.authService.setHeaders();
    return this.http.post(`${environment.apiUrl}/profiles/${username}/follow`, {}, {headers: headers});
  }

  unFollowUser(username: string) {
    const headers = this.authService.setHeaders();
    return this.http.delete(`${environment.apiUrl}/profiles/${username}/follow`, {headers: headers});
  }

  getUserFeed(pageNumber: number) {
    const offset = (pageNumber - 1) * 10;
    const params = new HttpParams().set('offset', offset.toString())
                                  .set('limit', '10');
    const headers = this.authService.setHeaders();
    return this.http.get(`${environment.apiUrl}/articles/feed`, {params, headers});
  }

  addComment(comment, slug: string) {
    const headers = this.authService.setHeaders();
    const commentPostObject = Object.assign({}, {comment : {body : comment.comment}});
    return this.http.post(`${environment.apiUrl}/articles/${slug}/comments`, commentPostObject, {headers});
  }

  deleteComment(id: number, slug: string) {
    const headers = this.authService.setHeaders();
    return this.http.delete(`${environment.apiUrl}/articles/${slug}/comments/${id}`, {headers});
  }

  favoriteArticle(slug: string) {
    const headers = this.authService.setHeaders();
    return this.http.post(`${environment.apiUrl}/articles/${slug}/favorite`, {}, {headers});
  }

  unFavoriteArticle(slug: string) {
    const headers = this.authService.setHeaders();
    return this.http.delete(`${environment.apiUrl}/articles/${slug}/favorite`, {headers});
  }
}
