import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ApiService } from '../Services/api.service';
import { IComment } from 'src/Models/Comment.model';
@Component({
  selector: 'app-comment-box',
  templateUrl: './comment-box.component.html',
  styleUrls: ['./comment-box.component.css']
})
export class CommentBoxComponent implements OnInit {
  commentsData: IComment[];
  constructor(private apiService: ApiService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.apiService.getComments(this.route.snapshot.params['slug'])
      .subscribe((data) => this.commentsData = data['comments']);
  }

}
