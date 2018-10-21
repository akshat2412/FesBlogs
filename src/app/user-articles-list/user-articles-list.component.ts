import { Component, OnInit, Input } from '@angular/core';

import { ApiService } from '../api.service';
import { IArticle } from 'src/Models/Article.model';

@Component({
  selector: 'app-user-articles-list',
  templateUrl: './user-articles-list.component.html',
  styleUrls: ['./user-articles-list.component.css']
})
export class UserArticlesListComponent implements OnInit {
  articles: IArticle[];
  @Input() username: string;
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getArticlesByUser(this.username)
      .subscribe(
        (data) => this.articles = data['articles'],
      );
  }

}
