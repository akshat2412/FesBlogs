import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { ApiService } from '../Services/api.service';
import { AuthService } from '../Services/auth.service';
import { IArticle } from '../../Models/Article.model';
@Component({
  selector: 'app-article-editor',
  templateUrl: './article-editor.component.html',
  styleUrls: ['./article-editor.component.css']
})
export class ArticleEditorComponent implements OnInit {
  articleData: IArticle;
  articleForm: FormGroup = null;
  errorList: string[];
  formValuesFetched = false;
  // tslint:disable-next-line:max-line-length
  constructor(private apiService: ApiService, private router: Router, private route: ActivatedRoute, formBuilder: FormBuilder, private authService: AuthService) {
    this.articleForm = formBuilder.group({
      title: null,
      description: null,
      body: null
    });
  }

  ngOnInit() {
    console.log('ngOnInit running');
    this.apiService.getArticle(this.route.snapshot.params['slug'])
      .subscribe(
        (data) => {
          this.articleData = data['article'];
        },
        (error) => this.router.navigate(['/404']),
        () => {
          const title = new FormControl(this.articleData.title);
          const description = new FormControl(this.articleData.description);
          const body = new FormControl(this.articleData.body);
          this.articleForm = new FormGroup({
            title,
            description,
            body
          });
          this.formValuesFetched = true;
        }
      );
      console.log('articleForm populated');
    }

  updateArticle(formValues) {
    this.apiService.updateArticle(formValues.title, formValues.description, formValues.body, this.articleData.slug)
      .subscribe(
        (data) => {
          console.log(data);
          this.router.navigate(['/profile', this.authService.currentUser.username]);
        },
        (error) => {
          this.errorList = [];

          const errors = error['error']['errors'];
          for (const key in errors) {
            if (errors.hasOwnProperty(key)) {
              for (const errorMessage of errors[key]) {
                this.errorList.push(`${key} ${errorMessage}`);
              }
            }
          }
        }
      );
  }

}
