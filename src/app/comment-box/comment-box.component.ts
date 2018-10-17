import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { IComment } from 'src/Models/Comment.model';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-comment-box',
  templateUrl: './comment-box.component.html',
  styleUrls: ['./comment-box.component.css']
})
export class CommentBoxComponent implements OnInit {
  CommentsData: IComment[];
  constructor(private apiService: ApiService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.apiService.getComments(this.route.snapshot.params['slug'])
      .subscribe((data) => this.CommentsData = data['comments']);
  }

}
