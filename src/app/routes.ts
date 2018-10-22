import { Routes } from '@angular/router';

import { LandingComponent } from './landing/landing.component';
import { ArticleViewComponent } from './article-view/article-view.component';
import { PageDoesNotExistsComponent } from './page-does-not-exists/page-does-not-exists.component';
import { TaggedArticlesLandingComponent } from './tagged-articles-landing/tagged-articles-landing.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { EditorComponent } from './editor/editor.component';
import { ProfileComponent } from './profile/profile.component';
import { RouteActivatorService } from './Services/route-activator.service';
import { SettingsComponent } from './settings/settings.component';
import { ArticleEditorComponent } from './article-editor/article-editor.component';

export const routes: Routes = [
    {
      path: '',
      component: LandingComponent,
      pathMatch: 'full'
    },
    {
      path: 'login',
      component: LoginComponent,
      pathMatch: 'full'
    },
    {
      path: 'signup',
      component: SignupComponent,
      pathMatch: 'full'
    },
    {
      path: 'editor',
      component: EditorComponent,
      pathMatch: 'full',
      canActivate: [RouteActivatorService]
    },
    {
      path: 'settings',
      component: SettingsComponent,
      pathMatch: 'full',
      canActivate: [RouteActivatorService]
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
      path: 'profile/:username',
      component: ProfileComponent,
      // pathMatch: 'full'
    },
    {
      path: 'editor/:slug',
      component: ArticleEditorComponent,
      pathMatch: 'full',
      canActivate: [RouteActivatorService]
    },
    {
      path: '404',
      component: PageDoesNotExistsComponent
    },
    // { path: '**', component: PageNotFoundComponent }
  ];
