import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-month',
  templateUrl: './top-month.component.html',
  styleUrls: ['./top-month.component.css']
})
export class TopMonthComponent {

  pageTitle: string = "Music App";
  imageWidth: number = 50;
  imageMargin: number = 4;

  albums: any[] = [

    {
      'albumId' : 5,
      'albumName': 'Better',
      'artistName': 'Banks',
      'price': 17.00,
      'starRating': 3.9,
      'imageUrl': 'http://is4.mzstatic.com/image/thumb/Music62/v4/cd/78/6b/cd786b10-634d-6f13-e366-dbba85a6eda1/source/600x600bb.jpg'
    },
    {
      'albumId' : 6,
      'albumName': 'T R A P S O U L',
      'artistName': 'Bryson Tiller',
      'price': 20.00,
      'starRating': 4.8,
      'imageUrl': 'https://images.rapgenius.com/09604211924710c8e6363ddabfaa3223.1000x1000x1.jpg'
    }
  ];

}