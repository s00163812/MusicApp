import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { StarRatingComponent } from './shared/star-rating/star-rating.component';
import { AlbumListComponent } from './album-list/album-list.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NavigationComponent } from './navigation/navigation.component';
import { NotificationComponent } from './notification/notification.component';
import { RegisterComponent } from './register/register.component';
import { SearchComponent } from './search/search.component';
import { TopAllTimeComponent } from './top-all-time/top-all-time.component';
import { TopMonthComponent } from './top-month/top-month.component';
import { TopWeekComponent } from './top-week/top-week.component';
import { TrackListComponent } from './track-list/track-list.component';

import { Routes, RouterModule} from  '@angular/router';
import { NotificationService } from './services/notification.service';
import { AuthGuard } from './services/auth.guard';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AuthService } from './services/auth.service';
import { MatCardModule } from '@angular/material';


//setting up routes
const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'topWeek', component: TopWeekComponent},
  { path: 'topMonth', component: TopMonthComponent},
  { path: 'topAllTime', component: TopAllTimeComponent},
  { path: 'checkout', component: CheckoutComponent},
  { path: 'trendingNow', component: AlbumListComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    AlbumListComponent,
    CheckoutComponent,
    HomeComponent,
    LoginComponent,
    NavigationComponent,
    NotificationComponent,
    RegisterComponent,
    SearchComponent,
    TopAllTimeComponent,
    TopMonthComponent,
    TopWeekComponent,
    TrackListComponent,
    StarRatingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    AngularFireModule.initializeApp(environment.firebase, 'Music-App'),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    MatCardModule
  ],
  providers: [AuthService, AuthGuard, NotificationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
