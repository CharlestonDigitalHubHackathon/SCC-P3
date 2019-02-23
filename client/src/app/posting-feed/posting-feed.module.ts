import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagelayoutComponent } from './pagelayout/pagelayout.component';
import { PostingCardComponent } from './posting-card/posting-card.component';

@NgModule({
  declarations: [PagelayoutComponent, PostingCardComponent],
  imports: [
    CommonModule
  ],
  exports: [
    PagelayoutComponent
  ]
})
export class PostingFeedModule { }
