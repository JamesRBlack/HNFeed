import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedViewComponent } from './feed-view.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('FeedViewComponent', () => {
  let component: FeedViewComponent;
  let fixture: ComponentFixture<FeedViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeedViewComponent  ], imports: [HttpClientTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
