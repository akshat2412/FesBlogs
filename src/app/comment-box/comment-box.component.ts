import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ApiService } from '../Services/api.service';
import { IComment } from 'src/Models/Comment.model';
import { AuthService } from '../Services/auth.service';
@Component({
  selector: 'app-comment-box',
  templateUrl: './comment-box.component.html',
  styleUrls: ['./comment-box.component.css']
})
export class CommentBoxComponent implements OnInit {
  commentsData: IComment[];
  isLoggedIn: boolean;

  constructor(private apiService: ApiService, private authService: AuthService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.isLoggedIn = this.authService.isLoggedIn();
    this.apiService.getComments(this.route.snapshot.params['slug'])
      .subscribe(
        (data) => this.commentsData = data['comments'],
        (error) => this.router.navigate(['/404'])
      );
  }

  comment(formValues) {
    this.apiService.addComment(formValues, this.route.snapshot.params['slug'])
      .subscribe(
        (data) => this.commentsData.unshift(data['comment']),
        (error) => console.log(error)
      );
  }

  updateComments(value: boolean) {
    this.apiService.getComments(this.route.snapshot.params['slug'])
      .subscribe(
        (data) => this.commentsData = data['comments'],
        (error) => this.commentsData = null
      );
  }

}
