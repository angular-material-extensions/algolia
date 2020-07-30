import {NgModule} from '@angular/core';
import {MatAlgoliaRefreshDirective} from './directives/mat-algolia-refresh.directive';
import {MatAlgoliaMenuSelectComponent, MatAlgoliaPaginationComponent, MatAlgoliaToggleComponent} from './components';
import {MatSelectModule} from '@angular/material/select';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatPaginatorModule} from '@angular/material/paginator';
import {CommonModule} from '@angular/common';
import {NgAisModule} from 'angular-instantsearch';

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
  imports: [
    // Angular
    CommonModule,

    // Angular Material
    MatSelectModule,
    MatSlideToggleModule,
    MatPaginatorModule,

    // Algolia
    NgAisModule
  ],
  exports: [
    ...components,
    ...directives
  ]
})
export class MatAlgoliaModule {
}
