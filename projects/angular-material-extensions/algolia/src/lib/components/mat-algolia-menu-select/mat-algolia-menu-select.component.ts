import { Component, forwardRef, Inject, OnInit } from '@angular/core';
import { BaseWidget, NgAisInstantSearch } from 'angular-instantsearch';
import { connectMenu } from 'instantsearch.js/es/connectors';

@Component({
  selector: 'mat-algolia-menu-select',
  templateUrl: './mat-algolia-menu-select.component.html',
  styleUrls: ['./mat-algolia-menu-select.component.scss']
})
export class MatAlgoliaMenuSelectComponent extends BaseWidget implements OnInit {

  state: {
    items: { label: string; value: string }[];
    createURL: () => string;
    refine: (value: string) => void;
    canRefine: boolean;
    isShowingMore: boolean;
    toggleShowMore: () => void;
    canToggleShowMore: boolean;
  };

  constructor(
    @Inject(forwardRef(() => NgAisInstantSearch))
    public instantSearchParent: NgAisInstantSearch) {
    super('MatAlgoliaMenuSelectComponent');
  }

  public ngOnInit() {
    this.createWidget(connectMenu, { attribute: 'categories' });
    super.ngOnInit();
  }
}
