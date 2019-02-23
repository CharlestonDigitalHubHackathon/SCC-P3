import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './modules/login/components/login/login.component';
import { LoginModule } from './modules/login/login.module';
import { PagelayoutComponent } from './posting-feed/pagelayout/pagelayout.component';
import { PostingFeedModule } from './posting-feed/posting-feed.module';
import { CanActivate } from '@angular/router/src/utils/preactivation';
import { AuthGuardService } from './modules/login/services/auth-guard/auth-guard.service';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'feed',
    component: PagelayoutComponent
  },
  {
    path: '',
    redirectTo: 'feed',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    LoginModule,
    PostingFeedModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
