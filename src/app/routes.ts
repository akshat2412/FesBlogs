import { LandingComponent } from './landing/landing.component';
import { PaginationComponent } from './pagination/pagination.component';
import { ArticleComponent } from './article/article.component';
import { PageDoesNotExistsComponent } from './page-does-not-exists/page-does-not-exists.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
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