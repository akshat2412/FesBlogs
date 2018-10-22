import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { IArticle } from '../../Models/Article.model';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-user-feed',
  templateUrl: './user-feed.component.html',
  styleUrls: ['./user-feed.component.css']
})
export class UserFeedComponent implements OnInit {
  @Input() username: string;
  articles: IArticle[];
  articlesCount: number;
  pageNumber = 1;
  constructor(private apiService: ApiService, private router: Router) { }

  ngOnInit() {
    this.articles = null;
    this.apiService.getUserFeed(this.pageNumber)
      .subscribe(
        (data) => {
          this.articles = data['articles'];
          this.articlesCount = data['articlesCount'];
        },
        (error) => this.router.navigate(['/404'])
      );
  }

  loadPage(pageNumber: number) {
    if (this.pageNumber === pageNumber) {
      return;
    }
    this.apiService.getUserFeed(pageNumber)
      .subscribe(
        (data) => {
          this.articles = data['articles'];
          this.articlesCount = data['articlesCount'];
          this.pageNumber = pageNumber;
        },
        (error) => this.router.navigate(['/404'])
      );
  }

}
