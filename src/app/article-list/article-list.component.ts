import { Component, OnInit, Input, OnChanges, SimpleChanges,  } from '@angular/core';
import { Router } from '@angular/router';

import { ApiService } from '../Services/api.service';
import { IArticle } from 'src/Models/Article.model';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit, OnChanges {

  articles: IArticle[];
  pageNumber = 1;
  articlesCount: number;
  @Input() selectedTag: string = null;

  constructor(private apiService: ApiService, private router: Router) { }

  ngOnInit() {
    this.retreiveArticles();
  }

  ngOnChanges(changes: SimpleChanges) {
    this.articles = null;
    this.retreiveArticles();
  }

  loadPage(pageNumber: number) {
    // this.articles = null;
    this.retreiveArticles(pageNumber);

  }

  retreiveArticles(pageNumber: number = 1) {
    if (this.pageNumber === pageNumber && this.pageNumber !== 1) {
      return;
    }
    this.pageNumber = pageNumber;
    if ( !!this.selectedTag ) {
      this.apiService.getArticlesByTag(this.selectedTag, pageNumber)
        .subscribe(
          (data) => {
            this.articles = data['articles'];
            this.articlesCount = data['articlesCount'];
          },
          (error) => this.router.navigate(['/404'])
        );
    } else {
      this.apiService.getArticles(pageNumber)
        .subscribe(
          (data) => {
            this.articles = data['articles'];
            this.articlesCount = data['articlesCount'];
          },
          (error) => this.router.navigate(['/404'])
        );
    }
  }

}
