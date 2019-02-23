import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostingFeedModule } from './posting-feed/posting-feed.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PostingFeedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
