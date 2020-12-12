import { Component } from '@angular/core';
import {Feed} from './model/feed';
import {FeedService} from './services/feed.service';
import {FeedItem} from './model/feed-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HNFeed';
  posts: Array<FeedItem>;

  constructor(private feedService: FeedService) { }

  getSearchedPosts($event: any): any {
    this.feedService.getPosts($event).subscribe((response: Feed) => {
      this.posts = response.hits;
    }, error => console.log('Error fetching stories'));
  }
}


