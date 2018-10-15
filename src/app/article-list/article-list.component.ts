import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {

  articles: Object[];
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getArticles()
      .subscribe((data) => this.articles = data['articles']);
      console.log(this.articles);
  }

}
