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
  articles: IArticle[];
  @Input() username: string;
  constructor(private apiService: ApiService, private router: Router) { }

  ngOnInit() {
    this.articles = null;
    this.apiService.getUserFeed()
      .subscribe(
        (data) => this.articles = data['articles'],
        (error) => this.router.navigate(['/404'])
      );
  }

}
