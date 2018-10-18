import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {ApiService} from '../api.service';
@Component({
  selector: 'app-tagbox',
  templateUrl: './tagbox.component.html',
  styleUrls: ['./tagbox.component.css']
})
export class TagboxComponent implements OnInit {
  @Input() SelectedTag: string;
  @Output() ClickedButton = new EventEmitter();
  tags: string[];

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getTags()
      .subscribe((data) => this.tags = data['tags']);
  }

  EmitClickedButton(tag: string) {
    this.ClickedButton.emit(tag);
  }

}
