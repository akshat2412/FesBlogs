import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ApiService } from '../Services/api.service';
import { AuthService } from '../Services/auth.service';
@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  isLoggedIn: boolean;
  username: string;
  showUserFeed = true;
  showGlobalFeed = false;
  constructor(private router: Router, private apiService: ApiService, private authService: AuthService) {
    this.isLoggedIn = authService.isLoggedIn();
    if (this.isLoggedIn) {
      this.username = authService.currentUser.username;
    } else {
      this.showUserFeed = false;
      this.showGlobalFeed = true;
    }
  }

  ngOnInit() {
  }

  handleTagClick(ClickedTag: string) {
    this.router.navigate(['/articles', ClickedTag]);
  }

  toggleList(list: string){
    if (list === 'userFeed') {
      this.showUserFeed = true;
      this.showGlobalFeed = false;
    } else {
      this.showGlobalFeed = true;
      this.showUserFeed = false;
    }
  }
}
