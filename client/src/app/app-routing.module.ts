import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagelayoutComponent } from './posting-feed/pagelayout/pagelayout.component';
import { PostingFeedModule } from './posting-feed/posting-feed.module';

const routes: Routes = [
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
    RouterModule.forRoot(routes),
    PostingFeedModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
