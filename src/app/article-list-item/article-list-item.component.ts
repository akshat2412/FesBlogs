import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-article-list-item',
  templateUrl: './article-list-item.component.html',
  styleUrls: ['./article-list-item.component.css']
})
export class ArticleListItemComponent implements OnInit {
  @Input() articleData: Object;
  constructor() { }

  ngOnInit() {
  }

}
