import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { IArticle } from 'src/Models/Article.model';
import { ApiService } from '../Services/api.service';
import { AuthService } from '../Services/auth.service';

@Component({
  selector: 'app-article-list-item',
  templateUrl: './article-list-item.component.html',
  styleUrls: ['./article-list-item.component.css']
})
export class ArticleListItemComponent implements OnInit {
  @Input() articleData: IArticle;
  isLoggedIn: boolean;

  constructor(private apiService: ApiService, private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.isLoggedIn = this.authService.isLoggedIn();
  }

  toggleFavoriteArticle() {
    if (this.articleData.favorited) {
      this.apiService.unFavoriteArticle(this.articleData.slug)
        .subscribe(
          (data) => this.articleData = data['article'],
          (error) => console.log(error)
        );
    } else {
      this.apiService.favoriteArticle(this.articleData.slug)
        .subscribe(
          (data) => this.articleData = data['article'],
          (error) => console.log(error)
        );
    }
  }
}
