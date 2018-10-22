import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { ApiService } from '../api.service';
import { IArticle } from 'src/Models/Article.model';

@Component({
  selector: 'app-user-favorited-articles-list',
  templateUrl: './user-favorited-articles-list.component.html',
  styleUrls: ['./user-favorited-articles-list.component.css']
})
export class UserFavoritedArticlesListComponent implements OnInit {
  articles: IArticle[];
  articlesCount: number;
  pageNumber = 1;
  @Input() username: string;
  constructor(private apiService: ApiService, private router: Router) { }

  ngOnInit() {
    this.apiService.getFavoritedArticlesByUser(this.username, this.pageNumber)
      .subscribe(
        (data) => {
          this.articles = data['articles'];
          this.articlesCount = data['articlesCount'];
        },
        (error) => {
          console.log(error);
          this.router.navigate(['/404']);
        }
      );
  }

  loadPage(pageNumber: number) {
    if (this.pageNumber === pageNumber) {
      return;
    }
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
