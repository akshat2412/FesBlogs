import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';

import { ApiService } from '../api.service';
import { IArticle } from 'src/Models/Article.model';

@Component({
  selector: 'app-user-articles-list',
  templateUrl: './user-articles-list.component.html',
  styleUrls: ['./user-articles-list.component.css']
})
export class UserArticlesListComponent implements OnInit, OnChanges {
  articles: IArticle[];
  articlesCount: number;
  pageNumber = 1;
  @Input() username: string;
  constructor(private apiService: ApiService, private router: Router) { }

  ngOnInit() {
    this.getArticles();
  }

  getArticles(pageNumber: number = 1) {
    if (this.pageNumber === pageNumber && this.pageNumber !== 1) {
      return;
    }
    // this.articles = null;
    this.apiService.getArticlesByUser(this.username, pageNumber)
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

  ngOnChanges(changes: SimpleChanges) {
    this.getArticles();
  }

  loadPage(pageNumber: number) {
    console.log('pagination request pageno' + pageNumber);
    this.getArticles(pageNumber);
  }
}
