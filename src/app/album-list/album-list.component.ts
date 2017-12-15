import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.css']
})
export class AlbumListComponent {

  pageTitle: string = "Music App";
  imageWidth: number = 50;
  imageMargin: number = 4;

  albums: any[] = [

    {
      'albumId' : 1,
      'albumName': 'None Of The Clocks Work',
      'artistName': 'Amir Obe',
      'price': 14.00,
      'starRating': 3.5,
      'imageUrl': 'http://images.genius.com/42c5d5205418b8c1e23153bfdddae597.1000x1000x1.jpg'
    },
    {
      'albumId' : 2,
      'albumName': 'Snow',
      'artistName': 'Angus & Julia Stone',
      'price': 18.00,
      'starRating': 4.5,
      'imageUrl': 'http://angusandjuliastone.com/wp-content/uploads/2017/07/cover.jpg'
    }
  ];
}