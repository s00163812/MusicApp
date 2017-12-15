import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-week',
  templateUrl: './top-week.component.html',
  styleUrls: ['./top-week.component.css']
})
export class TopWeekComponent {

  pageTitle: string = "Music App";
  imageWidth: number = 50;
  imageMargin: number = 4;

  albums: any[] = [

    {
      'albumId' : 7,
      'albumName': 'Nothing Was The Same(Deluxe)',
      'artistName': 'Drake',
      'price': 25.00,
      'starRating': 4.7,
      'imageUrl': 'https://upload.wikimedia.org/wikipedia/en/b/b9/Nothing_Was_the_Same_cover_2.png'
    },
    {
      'albumId' : 8,
      'albumName': 'American Teen',
      'artistName': 'Khalid',
      'price': 15.00,
      'starRating': 4.8,
      'imageUrl': 'http://www.gmhslasso.org/wp-content/uploads/2017/03/cover-art.jpg'
    }
  ];

}
