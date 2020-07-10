import { NgModule } from '@angular/core';
import { AlgoliaComponent } from './algolia.component';
import { MatAlgoliaRefreshDirective } from './mat-algolia-refresh.directive';



@NgModule({
  declarations: [AlgoliaComponent, MatAlgoliaRefreshDirective],
  imports: [
  ],
  exports: [AlgoliaComponent]
})
export class AlgoliaModule { }
