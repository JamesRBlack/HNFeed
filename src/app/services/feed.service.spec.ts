import { TestBed } from '@angular/core/testing';

import { FeedService } from './feed.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {of} from 'rxjs';
import {Feed} from '../model/feed';
import {FeedViewComponent} from '../components/feed-view/feed-view.component';
import {AppComponent} from '../app.component';

describe('FeedService', () => {
  let service: FeedService;

  beforeEach(() => {
    TestBed.configureTestingModule({imports: [HttpClientTestingModule]});
    service = TestBed.inject(FeedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return HN feed results', () => {
      const data: any = require('../../assets/Mock/test-data.json');
      spyOn(service, 'getPosts').and.returnValue(of(data));

      const feedView = new AppComponent(service);
      feedView.getSearchedPosts('test');
      expect(feedView.posts.length).toEqual(20);
      expect(feedView.posts[0].created_at).toBe('2020-12-13T04:16:13.000Z');
  });

  it('should return HN feed search query results', () => {
    const data: any = require('../../assets/Mock/test-data2.json');
    spyOn(service, 'getPosts').and.returnValue(of(data));

    const feedView = new AppComponent(service);
    feedView.getSearchedPosts('test');
    expect(feedView.posts.length).toEqual(20);
    expect(feedView.posts[0].created_at).toBe('2012-03-23T00:40:39.000Z');
  });
});
