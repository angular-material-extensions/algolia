import { Directive, forwardRef, HostListener, Inject, OnInit } from '@angular/core';
import { BaseWidget, NgAisInstantSearch } from 'angular-instantsearch';

const connectRefresh = (renderFn, unmountFn) => (widgetParams = {}) => ({
  init() {
    renderFn({
      refresh() {
      }
    }, true);
  },
  render({ instantSearchInstance }) {
    const refresh = instantSearchInstance.refresh.bind(instantSearchInstance);
    renderFn({ refresh }, false);
  },
  dispose() {
    unmountFn();
  }
});

@Directive({
  selector: '[matAlgoliaRefresh]'
})
export class MatAlgoliaRefreshDirective extends BaseWidget implements OnInit {

  state: {
    refresh: Function;
  };

  constructor(
    @Inject(forwardRef(() => NgAisInstantSearch))
    public instantSearchParent: NgAisInstantSearch
  ) {
    super('Refresh');
  }

  public ngOnInit() {
    this.createWidget(connectRefresh as any, {});
    super.ngOnInit();
  }

  @HostListener('click') onClick() {
    console.log('click');
    this.state.refresh();
  }
}
