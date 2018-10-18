import { Component, OnInit, Input, OnChanges, SimpleChanges,  } from '@angular/core';
import { ApiService } from '../api.service';
import { IArticle } from 'src/Models/Article.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit, OnChanges {

  articles: IArticle[];
  pageNumber: Number = 1;
  @Input() SelectedTag: string = null;
  constructor(private apiService: ApiService, private router: Router) { }

  ngOnInit() {
    if ( !!this.SelectedTag ) {
      this.apiService.getArticlesByTag(this.SelectedTag)
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

  ngOnChanges(changes: SimpleChanges) {
    this.articles = null;
    if ( !!this.SelectedTag ) {
      this.apiService.getArticlesByTag(this.SelectedTag)
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
