import { Component, OnInit } from '@angular/core';
import { Posting } from '../posting-card/posting-card.component';
import { Router } from '@angular/router';

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
      farmerId: 2,
      locationUrl: 'https://www.google.com/maps/place/Boone+Hall+Farms+Market/@32.8493603,-79.810254,16.83z/data=!4m13!1m7!3m6!1s0x88fe7a42dca82477:0x35faf7e0aee1ec6b!2sCharleston,+SC!3b1!8m2!3d32.7764749!4d-79.9310512!3m4!1s0x88fe6d8d052f5af1:0x6bcdc1b933c5b144!8m2!3d32.850983!4d-79.8052092'
    },
    {
      name: 'Beef',
      quantity: '2 slabs',
      description: `Out in the field when the first has been born Folks sing a song, song of the corn Late in the day when the secrets are sworn Folks tell a tale, tale of the corn I heard a commotion one late afternoon Someone was singing a funeral tune As I lay watching them hoist up the cross Something was burning, something was lost Could you believe what the scarecrow had seen Folks come to fall down to their knees Rumours of strangers been buried alive Black bats and ... send chills at my spine`,
      datePosted: new Date(2019, 1, 19),
      dateEnd: new Date(2019, 4, 30), 
      price: 9000,
      imageUrl: 'https://assets.vancouverisawesome.com/wp-content/uploads/2018/08/08111846/cows-edit.jpg', 
      distance: 4,
      locationUrl: 'https://www.google.com/maps/place/Boone+Hall+Farms+Market/@32.8493603,-79.810254,16.83z/data=!4m13!1m7!3m6!1s0x88fe7a42dca82477:0x35faf7e0aee1ec6b!2sCharleston,+SC!3b1!8m2!3d32.7764749!4d-79.9310512!3m4!1s0x88fe6d8d052f5af1:0x6bcdc1b933c5b144!8m2!3d32.850983!4d-79.8052092',
      farmerId: 3
    },
    {
      name: 'Eggs',
      quantity: '40 cartons',
      description: `Out in the field when the first has been born Folks sing a song, song of the corn Late in the day when the secrets are sworn Folks tell a tale, tale of the corn I heard a commotion one late afternoon Someone was singing a funeral tune As I lay watching them hoist up the cross Something was burning, something was lost Could you believe what the scarecrow had seen Folks come to fall down to their knees Rumours of strangers been buried alive Black bats and ... send chills at my spine`,
      datePosted: new Date(2019, 1, 19),
      dateEnd: new Date(2019, 3, 20), 
      price: 12000,
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKy0jHEpYj3ZGeihJPADlAwNSTMv0FhgexCWK553xFPn8xY77NZA', 
      distance: 14,
      locationUrl: 'https://www.google.com/maps/place/Boone+Hall+Farms+Market/@32.8493603,-79.810254,16.83z/data=!4m13!1m7!3m6!1s0x88fe7a42dca82477:0x35faf7e0aee1ec6b!2sCharleston,+SC!3b1!8m2!3d32.7764749!4d-79.9310512!3m4!1s0x88fe6d8d052f5af1:0x6bcdc1b933c5b144!8m2!3d32.850983!4d-79.8052092',
      farmerId: 2
    },
    {
      name: 'Frog legs',
      quantity: '90 sets',
      description: `Out in the field when the first has been born Folks sing a song, song of the corn Late in the day when the secrets are sworn Folks tell a tale, tale of the corn I heard a commotion one late afternoon Someone was singing a funeral tune As I lay watching them hoist up the cross Something was burning, something was lost Could you believe what the scarecrow had seen Folks come to fall down to their knees Rumours of strangers been buried alive Black bats and ... send chills at my spine`,
      datePosted: new Date(2019, 1, 19),
      dateEnd: new Date(2019, 2, 30), 
      price: 6000,
      imageUrl: 'data:image/jpeg;base64,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', 
      distance: 19,
      locationUrl: 'https://www.google.com/maps/place/Boone+Hall+Farms+Market/@32.8493603,-79.810254,16.83z/data=!4m13!1m7!3m6!1s0x88fe7a42dca82477:0x35faf7e0aee1ec6b!2sCharleston,+SC!3b1!8m2!3d32.7764749!4d-79.9310512!3m4!1s0x88fe6d8d052f5af1:0x6bcdc1b933c5b144!8m2!3d32.850983!4d-79.8052092',
      farmerId: 2
    },
  ]
  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  expand(post: Posting) {
    this.postings.forEach(p => p.isSelected = false)
    post.isSelected = true;
  }

  navigateLogin() {
    this.router.navigate(['login'])

  }
}
