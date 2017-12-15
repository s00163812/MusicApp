import { AuthService } from '../services/auth.service';
import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { NotificationService } from '../services/notification.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  //variables for a user registration
  email: string;
  pwd: string;
  username: string;
  dob: Date;

  constructor(private auth: AuthService) { }

  ngOnInit() {
  }

  //registration
  register() {
    this.auth.signup(this.email, this.pwd, this.username); 
    console.log(this.email);
    console.log(this.pwd);
  }
}
