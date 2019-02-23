import { Component, OnInit } from '@angular/core';
import { Posting } from '../posting-card/posting-card.component';

@Component({
  selector: 'app-pagelayout',
  templateUrl: './pagelayout.component.html',
  styleUrls: ['./pagelayout.component.scss']
})
export class PagelayoutComponent implements OnInit {

  postings: Posting[] = [
    {
      name: 'Corn',
      quantity: '12 ears',
      description: 'I have way too much corn',
      datePosted: new Date(2019, 1, 19),
      postDuration: +new Date(2019, 2, 30) - +new Date(2019, 1, 19),
      price: 1200,
      imageUrl: 'https://cdn.britannica.com/s:300x300/36/167236-004-AE764A76.jpg', 
      farmerId: 2
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
