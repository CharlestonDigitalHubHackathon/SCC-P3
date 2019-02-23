import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagelayoutComponent } from './pagelayout/pagelayout.component';
import { PostingCardComponent } from './posting-card/posting-card.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [PagelayoutComponent, PostingCardComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    PagelayoutComponent
  ]
})
export class PostingFeedModule { }
