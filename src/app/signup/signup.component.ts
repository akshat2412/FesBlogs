import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ApiService } from '../Services/api.service';
import { AuthService } from '../Services/auth.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  errorList: string[] = [];
  showValidationMessages: Boolean;

  constructor(private apiService: ApiService, private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  signup(formValues) {
    this.apiService.registerUser(formValues.username, formValues.email, formValues.password)
      .subscribe(
        (data) => {
          this.authService.saveUser(data);
          this.errorList = [];
          this.router.navigate(['']);
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
          console.log(this.errorList);
        }
      );
  }
}
