import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { IArticle } from 'src/Models/IArticle';
import { Router } from '@angular/router';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {

  articles: IArticle[];
  constructor(private apiService: ApiService, private router: Router) { }

  ngOnInit() {
    this.apiService.getArticles()
      .subscribe(
        (data) => this.articles = data['articles'],
        (error) => this.router.navigate(['/404'])
      );
  }

}
