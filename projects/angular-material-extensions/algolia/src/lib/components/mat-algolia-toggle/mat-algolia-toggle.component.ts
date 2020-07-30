import { Component, forwardRef, Inject, Input, OnInit } from '@angular/core';
import { BaseWidget, NgAisInstantSearch } from 'angular-instantsearch';
import { connectToggleRefinement } from 'instantsearch.js/es/connectors';
import { ThemePalette } from '@angular/material/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';

@Component({
  selector: 'mat-algolia-toggle',
  templateUrl: './mat-algolia-toggle.component.html',
  styleUrls: ['./mat-algolia-toggle.component.scss']
})
export class MatAlgoliaToggleComponent extends BaseWidget implements OnInit {

  @Input()
  attribute: string;

  @Input()
  label: string;

  @Input()
  color: ThemePalette;

  public state: {
    value: any;
    refine: Function;
    createURL: Function;
    widgetParams: any;
  };

  constructor(
    @Inject(forwardRef(() => NgAisInstantSearch))
    public instantSearchParent: NgAisInstantSearch
  ) {
    super('MatAlgoliaToggleComponent');
  }

  ngOnInit() {
    this.createWidget(connectToggleRefinement, {
      // instance options
      attribute: this.attribute
    });
    super.ngOnInit();
  }

  onChange($event: MatSlideToggleChange) {
    console.log('onChange', $event);
    this.state.refine(this.state.value);
    // this.state.refine($event.checked);
  }
}
