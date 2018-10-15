import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-profile-link',
  templateUrl: './user-profile-link.component.html',
  styleUrls: ['./user-profile-link.component.css']
})
export class UserProfileLinkComponent implements OnInit {
  @Input() User: Object;
  constructor() { }

  ngOnInit() {
  }

}
