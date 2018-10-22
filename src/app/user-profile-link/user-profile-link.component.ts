import { Component, OnInit, Input } from '@angular/core';

import { IUser } from '../../Models/User.model';
@Component({
  selector: 'app-user-profile-link',
  templateUrl: './user-profile-link.component.html',
  styleUrls: ['./user-profile-link.component.css']
})
export class UserProfileLinkComponent implements OnInit {
  @Input() user: IUser;

  constructor() { }

  ngOnInit() {
  }

}
