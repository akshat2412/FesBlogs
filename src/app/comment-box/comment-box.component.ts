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
  isLoggedIn: boolean;
  constructor(private apiService: ApiService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.isLoggedIn = this.apiService.isLoggedIn();
    this.apiService.getComments(this.route.snapshot.params['slug'])
      .subscribe(
        (data) => this.CommentsData = data['comments'],
        (error) => this.CommentsData = null
      );
  }

  comment(formValues) {
    this.apiService.addComment(formValues, this.route.snapshot.params['slug'])
      .subscribe(
        (data) => this.CommentsData.unshift(data['comment']),
        (error) => console.log(error)
      );
  }

  updateComments(value: boolean) {
    this.apiService.getComments(this.route.snapshot.params['slug'])
      .subscribe(
        (data) => this.CommentsData = data['comments'],
        (error) => this.CommentsData = null
      );
  }

}
