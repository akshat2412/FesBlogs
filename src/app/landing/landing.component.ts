import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ApiService } from '../api.service';
import { TrustedUrlString } from '@angular/core/src/sanitization/bypass';
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
  constructor(private router: Router, private apiService: ApiService) {
    this.isLoggedIn = apiService.isLoggedIn();
    if (this.isLoggedIn) {
      this.username = apiService.currentUser.username;
    } else {
      this.showUserFeed = false;
      this.showGlobalFeed = true;
    }
  }

  ngOnInit() {
  }

  handleTagClick(ClickedTag: string) {
    console.log('handling');
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
