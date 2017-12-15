import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  public ngOnInit(): void{
    
    const firebaseConfig = {
      apiKey: "AIzaSyDNkTlouN_OBLZKfe-R0901RONGmA2sZrk",
      authDomain: "music-app-01.firebaseapp.com",
      databaseURL: "https://music-app-01.firebaseio.com",
      projectId: "music-app-01",
      storageBucket: "",
      messagingSenderId: "117956990903"
    };
    firebase.initializeApp(firebaseConfig);
  }

}