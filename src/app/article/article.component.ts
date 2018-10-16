import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { IArticle } from 'src/Models/IArticle';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  articleData: IArticle;
  constructor(private apiService: ApiService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.apiService.getArticle(this.route.snapshot.params['slug'])
      .subscribe((data) => this.articleData = data['article']);
  }

}
