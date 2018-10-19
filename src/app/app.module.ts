import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleListItemComponent } from './article-list-item/article-list-item.component';
import { HttpClientModule } from '@angular/common/http';
import { TagboxComponent } from './tagbox/tagbox.component';
import { TagButtonComponent } from './tag-button/tag-button.component';
import { PaginationComponent } from './pagination/pagination.component';
import { UserProfileLinkComponent } from './user-profile-link/user-profile-link.component';
import {RouterModule} from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { ArticleComponent } from './article/article.component';
import { PageDoesNotExistsComponent } from './page-does-not-exists/page-does-not-exists.component';
import { CommonModule } from '@angular/common';
import { routes } from './routes';
import { CommentBoxComponent } from './comment-box/comment-box.component';
import { CommentListItemComponent } from './comment-list-item/comment-list-item.component';
import { ArticleViewComponent } from './article-view/article-view.component';
import { TaggedArticlesLandingComponent } from './tagged-articles-landing/tagged-articles-landing.component';
import { LoginComponent } from './login/login.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ArticleListComponent,
    ArticleListItemComponent,
    TagboxComponent,
    TagButtonComponent,
    PaginationComponent,
    UserProfileLinkComponent,
    LandingComponent,
    ArticleComponent,
    PageDoesNotExistsComponent,
    CommentBoxComponent,
    CommentListItemComponent,
    ArticleViewComponent,
    TaggedArticlesLandingComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    CommonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
