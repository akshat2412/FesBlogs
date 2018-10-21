import { Component, OnInit, Input } from '@angular/core';

import { ApiService } from '../api.service';
import { IArticle } from 'src/Models/Article.model';

@Component({
  selector: 'app-user-favorited-articles-list',
  templateUrl: './user-favorited-articles-list.component.html',
  styleUrls: ['./user-favorited-articles-list.component.css']
})
export class UserFavoritedArticlesListComponent implements OnInit {
  articles: IArticle[];
  @Input() username: string;
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getFavoritedArticlesByUser(this.username)
      .subscribe(
        (data) => this.articles = data['articles'],
      );
  }

}
