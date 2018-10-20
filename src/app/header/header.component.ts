import { Component, OnInit } from '@angular/core';

import { ApiService } from '../api.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  loggedIn: Boolean = false;
  userName: string;
  constructor(private apiService: ApiService) { }

  ngOnInit() {
  }

  isLoggedIn(): Boolean {
    if ( this.apiService.isLoggedIn()) {
      this.loggedIn = true;
      this.userName = this.apiService.getUserName();
      return true;
    }
    return false;
  }
}
