import { Component, OnInit, Input } from '@angular/core';
import { IArticle } from 'src/Models/IArticle';

@Component({
  selector: 'app-article-list-item',
  templateUrl: './article-list-item.component.html',
  styleUrls: ['./article-list-item.component.css']
})
export class ArticleListItemComponent implements OnInit {
  @Input() articleData: IArticle;
  constructor() { }

  ngOnInit() {
  }

}
