import { Component, OnInit, Input } from '@angular/core';

export interface Posting {
  name: string;
  quantity: string;
  description: string;
  datePosted: Date;
  dateEnd: Date;
  price: number;
  imageUrl: string
  farmerId: number;
  distance: number;
  isSelected?: boolean;
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

  get daysAvailable() {
    return new Date(+this.post.dateEnd - +Date.now()).getDay()
  }

  get showDescription() {
    return this.post.isSelected ? this.post.description : ''
  }

}

