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
    console.log('initialized');
    this.apiService.getData()
      .subscribe((data) => this.articles = data['articles']);
      console.log(this.articles);
  }

}
