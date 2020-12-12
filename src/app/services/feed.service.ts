import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';
import {Feed} from '../model/feed';

@Injectable({
  providedIn: 'root'
})
export class FeedService {

  baseUrl = 'http://hn.algolia.com/api/v1';

  constructor(private http: HttpClient) { }

  getPosts(searchString): Observable<Feed> {
    return this.http.get(`${this.baseUrl}${searchString}`).pipe(map((data: Feed) => {
      return data;
    }));
  }

}
