import { Component, OnInit, Input, OnChanges, SimpleChanges, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit, OnChanges {
  @Input() articlesCount: number;
  @Output() requestedPage = new EventEmitter();
  totalPages = 1;
  pagesArray: number[];
  currentPage = 1;
  constructor() { }

  ngOnInit() {
    if (this.articlesCount) {
      this.totalPages = Math.floor(this.articlesCount / 10);
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    this.totalPages = +this.articlesCount / 10;
    if ( +this.articlesCount % 10 > 0) {
      this.totalPages++;
    }
    this.pagesArray = new Array();
    for (let i = 1; i <= this.totalPages; i++) {
      this.pagesArray.push(i);
    }
  }

  emitPageRequest(pageNo: number) {
    this.currentPage = pageNo;
    this.requestedPage.emit(pageNo);
  }
}
