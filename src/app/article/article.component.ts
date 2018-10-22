import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';

import { ApiService } from '../Services/api.service';
import { AuthService } from '../Services/auth.service';
import { IArticle } from 'src/Models/Article.model';
@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  articleData: IArticle;
  showButtons: boolean;
  constructor(private apiService: ApiService, private route: ActivatedRoute, private router: Router, private authService: AuthService) { }

  ngOnInit() {
    this.apiService.getArticle(this.route.snapshot.params['slug'])
      .subscribe(
        (data) => this.articleData = data['article'],
        (error) => this.router.navigate(['/404']),
        () => {
          this.showButtons = this.authService.isLoggedIn() && this.articleData.author.username === this.authService.currentUser.username;
        }
      );

  }

  deleteArticle () {
    this.apiService.deleteArticle(this.articleData.slug)
      .subscribe(
        (data) => this.router.navigate(['/profile', this.articleData.author.username]),
        (error) => console.log(error)
      );
  }
}
