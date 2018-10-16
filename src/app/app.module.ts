import { BrowserModule } from '@angular/platform-browser';
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
import {RouterModule, Routes} from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { ArticleComponent } from './article/article.component';
import { PageDoesNotExistsComponent } from './page-does-not-exists/page-does-not-exists.component';

const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
    pathMatch: 'full'
  },
  {
    path: 'pagination',
    component: PaginationComponent
  },
  {
    path: 'article/:slug',
    component: ArticleComponent
  },
  {
    path: '404',
    component: PageDoesNotExistsComponent
  },
  // { path: '**', component: PageNotFoundComponent }
];

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
    PageDoesNotExistsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
