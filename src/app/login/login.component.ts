import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ApiService } from '../Services/api.service';
import { AuthService } from '../Services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  invalidLoginCredentials = false;
  showValidationMessgages: boolean;
  constructor(private apiService: ApiService, private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  Login(formValues) {
    this.authService.loginUser(formValues.email, formValues.password)
      .subscribe(
        (data) => {
          this.authService.saveUser(data);
          this.router.navigate(['']);
          this.invalidLoginCredentials = false;
        },
        (error) => this.invalidLoginCredentials = true,
      );
  }
}
