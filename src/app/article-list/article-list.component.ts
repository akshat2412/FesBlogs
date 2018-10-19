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

  @Input() selectedTag: string = null;
  articles: IArticle[];
  pageNumber: Number = 1;
  constructor(private apiService: ApiService, private router: Router) { }

  ngOnInit() {
    if ( !!this.selectedTag ) {
      this.apiService.getArticlesByTag(this.selectedTag)
        .subscribe(
          (data) => this.articles = data['articles'].slice(),
          (error) => this.router.navigate(['/404'])
        );
    } else {
      this.apiService.getArticles()
        .subscribe(
          (data) => this.articles = data['articles'],
          (error) => this.router.navigate(['/404'])
        );
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    this.articles = null;
    if ( !!this.selectedTag ) {
      this.apiService.getArticlesByTag(this.selectedTag)
        .subscribe(
          (data) => this.articles = data['articles'],
          (error) => this.router.navigate(['/404'])
        );
    } else {
      this.apiService.getArticles()
        .subscribe(
          (data) => this.articles = data['articles'],
          (error) => this.router.navigate(['/404'])
        );
    }
  }

}
