import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { ApiService } from '../Services/api.service';
import { AuthService } from '../Services/auth.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  settingsForm: FormGroup;
  errorList: string[];

  constructor(private apiService: ApiService, private authService: AuthService, private router: Router) { }

  ngOnInit() {
    const image = new FormControl(this.authService.currentUser.image);
    const username = new FormControl(this.authService.currentUser.username);
    const bio = new FormControl(this.authService.currentUser.bio);
    const email = new FormControl(this.authService.currentUser.email);
    const password = new FormControl();
    this.settingsForm = new FormGroup({
      image,
      username,
      bio,
      email,
      password
    });
  }

  updateUser(formValues) {
    this.apiService.updateUser(formValues.email, formValues.bio, formValues.string, formValues.username, formValues.password)
      .subscribe(
        (data) => {
          this.authService.saveUser(data);
          this.router.navigate(['/profile', this.authService.currentUser.username]);
        },
        (error) => {
          this.errorList = [];

          const errors = error['error']['errors'];
          for (const key in errors) {
            if (errors.hasOwnProperty(key)) {
              for (const errorMessage of errors[key]) {
                this.errorList.push(`${key} ${errorMessage}`);
              }
            }
          }
        }
      );
  }

  logout() {
    this.authService.clearUser();
    this.router.navigate(['']);
  }

}
