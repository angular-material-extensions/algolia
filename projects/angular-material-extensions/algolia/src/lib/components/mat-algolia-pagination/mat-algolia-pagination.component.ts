import { Component, forwardRef, Inject, OnInit, ViewChild } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { BaseWidget, NgAisInstantSearch } from 'angular-instantsearch';
import { connectPagination } from 'instantsearch.js/es/connectors';


@Component({
  selector: 'mat-algolia-pagination',
  templateUrl: './mat-algolia-pagination.component.html',
  styleUrls: ['./mat-algolia-pagination.component.scss']
})
export class MatAlgoliaPaginationComponent extends BaseWidget implements OnInit {

  @ViewChild('hpp')
  hitsPerPage: any;

  items = [
    { label: '1 hits per page', value: 10, default: true },
    { label: '2 hits per page', value: 15 },
    { label: '2 hits per page', value: 25 },
    { label: '2 hits per page', value: 50 }
  ];

  pageSize: number;

  public state: {
    pages: number[];
    currentRefinement: number;
    nbHits: number;
    nbPages: number;
    isFirstPage: boolean;
    isLastPage: boolean;
    refine: Function;
    createURL: Function;
    widgetParams: Function;
  };

  constructor(
    @Inject(forwardRef(() => NgAisInstantSearch))
    public instantSearchParent: NgAisInstantSearch
  ) {
    super('MatAlgoliaPaginationComponent');
  }

  ngOnInit() {
    this.createWidget(connectPagination, {
      // instance options
    });
    super.ngOnInit();
  }

  onPageChanged(pageEvent: PageEvent, hpp) {
    console.log('onPageChanged', pageEvent, this.pageSize, pageEvent.pageSize);
    if (this.pageSize !== pageEvent.pageSize) {
      console.log('refining', this.pageSize, pageEvent.pageSize);
      this.pageSize = pageEvent.pageSize;
      hpp.state.refine(this.pageSize);
    }
    if (pageEvent.pageIndex !== pageEvent.previousPageIndex) {
      this.state.refine(this.state.currentRefinement + (pageEvent.pageIndex > pageEvent.previousPageIndex ? 1 : -1));
    }
  }

  getDefaultPageSize(hpp) {
    // this.pageSize = hpp.state.items.filter(item => item.default === true).map(item => item.value)[0];
    // return this.pageSize;
    return hpp.state.items.filter(item => item.default === true).map(item => item.value)[0];
  }

  getPageSizeOptions(hpp) {
    if (hpp && hpp.state.items) {
      // console.log('page size options', hpp.state.items.map(item => item.value));
      return hpp.state.items.map(item => item.value);
    } else {
      return 0;
    }
  }
}
