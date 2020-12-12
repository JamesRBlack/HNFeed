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

  constructor() { }

  ngOnInit(): void {
  }

  search(): any {
    this.searchEvent.emit(`/search?query=${this.searchQuery}&tags=story`);
  }


}
