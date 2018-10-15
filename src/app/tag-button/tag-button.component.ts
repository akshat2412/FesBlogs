import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tag-button',
  templateUrl: './tag-button.component.html',
  styleUrls: ['./tag-button.component.css']
})
export class TagButtonComponent implements OnInit {
  @Input() Text: string;
  constructor() { }

  ngOnInit() {
  }

}
