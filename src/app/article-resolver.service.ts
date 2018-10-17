import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { IArticle } from '../Models/IArticle';
import { ApiService } from './api.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ArticleResolverService implements Resolve<any> {

  constructor(private apiService: ApiService) {}
  resolve(activatedRoute: ActivatedRouteSnapshot) {
    console.log(activatedRoute.paramMap.keys);
    return this.apiService.getArticle(activatedRoute.paramMap.get('slug')).pipe(map(article => article));
  }
}
