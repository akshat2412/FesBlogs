import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-tag-button',
  templateUrl: './tag-button.component.html',
  styleUrls: ['./tag-button.component.css']
})
export class TagButtonComponent implements OnInit {
  @Input() Text: string;
  @Output() ClickedButton = new EventEmitter();

  constructor(private router: Router) { }

  ngOnInit() {
  }

  clicked(tag) {
    this.ClickedButton.emit(tag);
  }
}
