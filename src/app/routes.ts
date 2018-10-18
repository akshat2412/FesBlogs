import { LandingComponent } from './landing/landing.component';
import { PaginationComponent } from './pagination/pagination.component';
import { ArticleViewComponent } from './article-view/article-view.component';
import { PageDoesNotExistsComponent } from './page-does-not-exists/page-does-not-exists.component';
import { TaggedArticlesLandingComponent } from './tagged-articles-landing/tagged-articles-landing.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
    {
      path: '',
      component: LandingComponent,
      pathMatch: 'full'
    },
    {
      path: 'articles/:tag',
      component: TaggedArticlesLandingComponent,
      pathMatch: 'full'
    },
    {
      path: 'article/:slug',
      component: ArticleViewComponent,
    },
    {
      path: '404',
      component: PageDoesNotExistsComponent
    },
    // { path: '**', component: PageNotFoundComponent }
  ];
