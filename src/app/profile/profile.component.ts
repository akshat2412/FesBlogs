import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ApiService } from '../api.service';
import { IProfile } from '../../Models/Profile.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profile: IProfile;
  showFavorites: Boolean = false;
  showMyArticles: Boolean = true;
  isCurrentUser: boolean;
  isLoggedIn: boolean;
  username: string;
  constructor(private route: ActivatedRoute, private apiService: ApiService, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.getProfile();
    });
    this.getProfile();
  }

  toggleList(list: string){
    if (list === 'myArticles') {
      this.showMyArticles = true;
      this.showFavorites = false;
    } else {
      this.showFavorites = true;
      this.showMyArticles = false;
    }
  }

  getProfile() {
    this.apiService.getProfile(this.route.snapshot.params['username'])
      .subscribe(
        (data) => this.profile = data['profile'],
        (error) => this.router.navigate(['/404']),
        () => {
          this.isLoggedIn = this.apiService.isLoggedIn();
          this.isCurrentUser = this.isLoggedIn && (this.route.snapshot.params['username'] === this.apiService.currentUser.username);
        }
      );
  }

}
