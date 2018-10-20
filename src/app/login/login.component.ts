import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ApiService } from '../api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  invalidLoginCredentials: Boolean = false;
  showValidationMessgages: Boolean;
  constructor(private apiService: ApiService, private router: Router) { }

  ngOnInit() {
  }

  Login(formValues) {
    this.apiService.loginUser(formValues.email, formValues.password)
      .subscribe(
        (data) => {
          this.apiService.saveUser(data);
          this.router.navigate(['']);
          this.invalidLoginCredentials = false;
        },
        (error) => this.invalidLoginCredentials = true,
      );
    // this.apiService.
  }
}
