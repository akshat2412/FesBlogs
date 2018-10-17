import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { IArticle } from 'src/Models/Article.model';
import {Router, ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  articleData: IArticle;
  constructor(private apiService: ApiService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.apiService.getArticle(this.route.snapshot.params['slug'])
      .subscribe(
        (data) => this.articleData = data['article'],
        (error) => this.router.navigate(['/404'])
      );
  }
}
