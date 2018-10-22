import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ApiService } from '../api.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  loggedIn = false;
  userName: string;
  constructor(private apiService: ApiService, private router: Router) { }

  ngOnInit() {
  }

  isLoggedIn(): Boolean {
    if ( this.apiService.isLoggedIn()) {
      this.loggedIn = true;
      this.userName = this.apiService.getUserName();
      return true;
    }
    this.loggedIn = false;
    return false;
  }
}
