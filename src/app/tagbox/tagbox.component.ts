import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service';
@Component({
  selector: 'app-tagbox',
  templateUrl: './tagbox.component.html',
  styleUrls: ['./tagbox.component.css']
})
export class TagboxComponent implements OnInit {
  tags: string[];
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getTags()
      .subscribe((data) => this.tags = data['tags']);
  }

}
