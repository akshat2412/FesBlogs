import { Component, OnDestroy } from '@angular/core';

import { ApiService } from './api.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {
  title = 'FesBlogs';

  constructor(private apiService: ApiService) {}
  ngOnDestroy() {
    this.apiService.clearUser();
  }
}
