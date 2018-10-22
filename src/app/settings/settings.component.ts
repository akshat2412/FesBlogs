import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { ApiService } from '../api.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  settingsForm: FormGroup;
  errorList: string[];
  constructor(private apiService: ApiService, private router: Router) { }

  ngOnInit() {
    let image = new FormControl(this.apiService.currentUser.image);
    let username = new FormControl(this.apiService.currentUser.username);
    let bio = new FormControl(this.apiService.currentUser.bio);
    let email = new FormControl(this.apiService.currentUser.email);
    let password = new FormControl();
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
          this.apiService.saveUser(data);
          this.router.navigate(['/profile', this.apiService.currentUser.username]);
        },
        (error) => {
          this.errorList = [];
          // console.log(error['error']['errors']);
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
    this.apiService.clearUser();
    this.router.navigate(['']);
  }

}
