import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { IComment } from 'src/Models/Comment.model';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-comment-list-item',
  templateUrl: './comment-list-item.component.html',
  styleUrls: ['./comment-list-item.component.css']
})
export class CommentListItemComponent implements OnInit {
  @Input() CommentData: IComment;
  @Output() updateComments = new EventEmitter();
  isLoggedIn: boolean;
  username: string;

  constructor(private apiService: ApiService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.isLoggedIn = this.apiService.isLoggedIn();
    if (this.isLoggedIn) {
      this.username = this.apiService.currentUser.username;
    }
  }

  deleteComment(id: number) {
    this.apiService.deleteComment(id, this.route.snapshot.params['slug'])
      .subscribe(
        (data) => this.updateComments.emit(true),
        (error) => this.router.navigate(['/404'])
      );
  }
}
