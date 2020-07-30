import {NgModule} from '@angular/core';
import {MatAlgoliaRefreshDirective} from './directives/mat-algolia-refresh.directive';
import {MatAlgoliaMenuSelectComponent, MatAlgoliaPaginationComponent, MatAlgoliaToggleComponent} from './components';

const components = [
  MatAlgoliaRefreshDirective,
  MatAlgoliaToggleComponent,
  MatAlgoliaMenuSelectComponent,
  MatAlgoliaPaginationComponent
];

const directives = [MatAlgoliaRefreshDirective];


@NgModule({
  declarations:
    [
      ...components,
      ...directives
    ],
  imports: [],
  exports: [
    ...components,
    ...directives
  ]
})
export class AlgoliaModule {
}
