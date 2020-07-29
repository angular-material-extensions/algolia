import {NgModule} from '@angular/core';
import {AlgoliaComponent} from './algolia.component';
import {MatAlgoliaRefreshDirective} from './directives/mat-algolia-refresh.directive';
import {MatAlgoliaToggleComponent} from './components/mat-algolia-toggle/mat-algolia-toggle.component';


@NgModule({
  declarations:
    [
      AlgoliaComponent,
      MatAlgoliaRefreshDirective,
      MatAlgoliaToggleComponent
    ],
  imports: [],
  exports: [AlgoliaComponent]
})
export class AlgoliaModule {
}
