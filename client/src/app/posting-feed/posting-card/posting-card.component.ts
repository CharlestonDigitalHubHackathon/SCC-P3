import { Component, OnInit, Input } from '@angular/core';

export interface Posting {
  name: string;
  quantity: string;
  description: string;
  datePosted: Date;
  postDuration: number;
  price: number;
  imageUrl: string
  farmerId: number;
}

@Component({
  selector: 'app-posting-card',
  templateUrl: './posting-card.component.html',
  styleUrls: ['./posting-card.component.scss']
})
export class PostingCardComponent implements OnInit {

  @Input() post: Posting;
  constructor() { }

  ngOnInit() {
  }

}
