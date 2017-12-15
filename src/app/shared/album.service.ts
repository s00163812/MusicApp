import { Observable } from 'rxjs/Observable';
import { IAlbum } from '../album-list/album';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';


@Injectable()
export class AlbumService {
  private _albumUrl = 'http://localhost:3000/products';

  constructor(private _http:HttpClient) { }

  getAlbums(): Observable<IAlbum[]>{
    return this._http.get<IAlbum[]>(this._albumUrl)
      .do(data => console.log('All: ' + JSON.stringify(data)))
      .catch(this.handleError);
  }

  private handleError(err: HttpErrorResponse) {
    console.log(err.message);
    return Observable.throw(err.message);
  }

}