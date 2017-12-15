import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-all-time',
  templateUrl: './top-all-time.component.html',
  styleUrls: ['./top-all-time.component.css']
})
export class TopAllTimeComponent {

  pageTitle: string = "Music App";
  imageWidth: number = 50;
  imageMargin: number = 4;

  albums: any[] = [

    {
      'albumId' : 3,
      'albumName': 'Without Warning',
      'artistName': '21 Savage',
      'price': 21.00,
      'starRating': 4.2,
      'imageUrl': 'https://static.vibe.com/files/2017/10/21-savage-without-warning-cover-1509419629-compressed.jpg'
    },
    {
      'albumId' : 4,
      'albumName': 'If You Leave',
      'artistName': 'Daughter',
      'price': 14.00,
      'starRating': 4.5,
      'imageUrl': 'https://e.snmc.io/lk/l/l/31dc320f2855302b44403f6e639e1da4/4600782.jpg'
    }
  ];

}

