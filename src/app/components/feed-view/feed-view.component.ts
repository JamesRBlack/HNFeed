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

  sortOptions: any[];

  searchQuery: string;

  sortField: string;

  sortOrder: number;

  constructor(private feedService: FeedService) { }

  ngOnInit(): void {
    this.feedService.getPosts().subscribe((response: Feed) => {
      this.posts = response.hits;
    }, error => console.log('Error fetching stories'));

    this.sortOptions = [
      {label: 'Newest First', value: '!year'},
      {label: 'Oldest First', value: 'year'},
      {label: 'Brand', value: 'brand'}
    ];
  }
  onSortChange(event): void {
    const value = event.value;

    if (value.indexOf('!') === 0) {
      this.sortOrder = -1;
      this.sortField = value.substring(1, value.length);
    }
    else {
      this.sortOrder = 1;
      this.sortField = value;
    }
  }
}
