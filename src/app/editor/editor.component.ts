import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ApiService } from '../api.service';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {
  title: string;
  description: string;
  body: string;
  tags: string;
  constructor(private apiService: ApiService, private router: Router) { }

  ngOnInit() {
  }

  publishArticle(formValues) {
    this.apiService.publishArticle(formValues['title'], formValues['description'], formValues['body'], formValues['tags'])
      .subscribe(
        (data) => {
          console.log(data);
          this.router.navigate(['']);
        }
      );
  }
}
