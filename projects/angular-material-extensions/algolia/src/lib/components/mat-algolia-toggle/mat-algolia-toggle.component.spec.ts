import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatAlgoliaToggleComponent } from './mat-algolia-toggle.component';

describe('MatAlgoliaToggleComponent', () => {
  let component: MatAlgoliaToggleComponent;
  let fixture: ComponentFixture<MatAlgoliaToggleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MatAlgoliaToggleComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatAlgoliaToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
