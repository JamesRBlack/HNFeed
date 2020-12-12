import {Component, Input, OnInit, Output} from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  @Output() searchEvent = new EventEmitter<string>();
  searchQuery = '';
  previousSearch = '';

  constructor() { }

  ngOnInit(): void {
  }

  checkCanSearch(): boolean {
    return (this.previousSearch === '' || (this.previousSearch !== this.searchQuery));
  }

  search(): any {
    if (this.checkCanSearch()) {
      this.searchEvent.emit(`/search?query=${this.searchQuery}&tags=story`);
      this.previousSearch = this.searchQuery;
    }
  }

}
