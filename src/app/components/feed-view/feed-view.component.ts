import { Component, OnInit } from '@angular/core';
import {FeedService} from '../../services/feed.service';
import {FeedItem} from '../../model/feed-item';
import {Feed} from '../../model/feed';

@Component({
  selector: 'app-feed-view',
  templateUrl: './feed-view.component.html',
  styleUrls: ['./feed-view.component.css']
})
export class FeedViewComponent implements OnInit {
  posts: Array<FeedItem>;
  searchString = '/search_by_date?tags=story';

  constructor(private feedService: FeedService) { }

  ngOnInit(): void {
    this.feedService.getPosts(this.searchString).subscribe((response: Feed) => {
      this.posts = response.hits;
    }, error => console.log('Error fetching stories'));
  }
}
