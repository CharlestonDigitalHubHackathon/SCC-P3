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
      description: `Out in the field when the first has been born Folks sing a song, song of the corn Late in the day when the secrets are sworn Folks tell a tale, tale of the corn I heard a commotion one late afternoon Someone was singing a funeral tune As I lay watching them hoist up the cross Something was burning, something was lost Could you believe what the scarecrow had seen Folks come to fall down to their knees Rumours of strangers been buried alive Black bats and ... send chills at my spine`,
      datePosted: new Date(2019, 1, 19),
      dateEnd: new Date(2019, 2, 30), 
      price: 1200,
      imageUrl: 'https://cdn.britannica.com/s:300x300/36/167236-004-AE764A76.jpg', 
      distance: 2,
      farmerId: 2
    },
    {
      name: 'Corn',
      quantity: '12 ears',
      description: `Out in the field when the first has been born Folks sing a song, song of the corn Late in the day when the secrets are sworn Folks tell a tale, tale of the corn I heard a commotion one late afternoon Someone was singing a funeral tune As I lay watching them hoist up the cross Something was burning, something was lost Could you believe what the scarecrow had seen Folks come to fall down to their knees Rumours of strangers been buried alive Black bats and ... send chills at my spine`,
      datePosted: new Date(2019, 1, 19),
      dateEnd: new Date(2019, 2, 30), 
      price: 1200,
      imageUrl: 'https://cdn.britannica.com/s:300x300/36/167236-004-AE764A76.jpg', 
      distance: 2,
      farmerId: 2
    },
    {
      name: 'Corn',
      quantity: '12 ears',
      description: `Out in the field when the first has been born Folks sing a song, song of the corn Late in the day when the secrets are sworn Folks tell a tale, tale of the corn I heard a commotion one late afternoon Someone was singing a funeral tune As I lay watching them hoist up the cross Something was burning, something was lost Could you believe what the scarecrow had seen Folks come to fall down to their knees Rumours of strangers been buried alive Black bats and ... send chills at my spine`,
      datePosted: new Date(2019, 1, 19),
      dateEnd: new Date(2019, 2, 30), 
      price: 1200,
      imageUrl: 'https://cdn.britannica.com/s:300x300/36/167236-004-AE764A76.jpg', 
      distance: 2,
      farmerId: 2
    },
    {
      name: 'Corn',
      quantity: '12 ears',
      description: `Out in the field when the first has been born Folks sing a song, song of the corn Late in the day when the secrets are sworn Folks tell a tale, tale of the corn I heard a commotion one late afternoon Someone was singing a funeral tune As I lay watching them hoist up the cross Something was burning, something was lost Could you believe what the scarecrow had seen Folks come to fall down to their knees Rumours of strangers been buried alive Black bats and ... send chills at my spine`,
      datePosted: new Date(2019, 1, 19),
      dateEnd: new Date(2019, 2, 30), 
      price: 1200,
      imageUrl: 'https://cdn.britannica.com/s:300x300/36/167236-004-AE764A76.jpg', 
      distance: 2,
      farmerId: 2
    },
  ]
  constructor() { }

  ngOnInit() {
  }

  expand(post: Posting) {
    this.postings.forEach(p => p.isSelected = false)
    post.isSelected = true;
  }
}
