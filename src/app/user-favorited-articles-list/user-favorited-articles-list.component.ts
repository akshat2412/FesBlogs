import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';

import { ApiService } from '../Services/api.service';
import { IArticle } from 'src/Models/Article.model';

@Component({
  selector: 'app-user-favorited-articles-list',
  templateUrl: './user-favorited-articles-list.component.html',
  styleUrls: ['./user-favorited-articles-list.component.css']
})
export class UserFavoritedArticlesListComponent implements OnInit, OnChanges {
  @Input() username: string;

  articles: IArticle[];
  articlesCount: number;
  pageNumber = 1;

  constructor(private apiService: ApiService, private router: Router) { }

  ngOnInit() {
    this.loadFavoriteArticles();
  }

  loadPage(pageNumber: number) {
    if (this.pageNumber === pageNumber) {
      return;
    }
    this.loadFavoriteArticles(pageNumber);
  }

  ngOnChanges (changes: SimpleChanges) {
    this.loadFavoriteArticles(1);
  }

  loadFavoriteArticles(pageNumber = 1) {
    this.apiService.getFavoritedArticlesByUser(this.username, pageNumber)
      .subscribe(
        (data) => {
          this.articles = data['articles'];
          this.articlesCount = data['articlesCount'];
          this.pageNumber = pageNumber;
        },
        (error) => {
          console.log(error);
          this.router.navigate(['/404']);
        }
      );
  }

}
