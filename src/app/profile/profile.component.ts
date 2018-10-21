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
  constructor(private route: ActivatedRoute, private apiService: ApiService, private router: Router) { }

  ngOnInit() {
    this.apiService.getProfile(this.route.snapshot.params['username'])
      .subscribe(
        (data) => this.profile = data['profile'],
        (error) => this.router.navigate(['/404'])
      );
  }

  toggleList(list: string){
    if (list === 'myArticles') {
      this.showMyArticles = true;
      this.showFavorites =false;
    } else {
      this.showFavorites = true;
      this.showMyArticles = false;
    }
  }

}
