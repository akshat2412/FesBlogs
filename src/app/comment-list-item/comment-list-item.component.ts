import { Component, OnInit, Input } from '@angular/core';

import { IComment } from 'src/Models/Comment.model';

@Component({
  selector: 'app-comment-list-item',
  templateUrl: './comment-list-item.component.html',
  styleUrls: ['./comment-list-item.component.css']
})
export class CommentListItemComponent implements OnInit {
  @Input() commentData: IComment;
  constructor() { }

  ngOnInit() {
  }

}
