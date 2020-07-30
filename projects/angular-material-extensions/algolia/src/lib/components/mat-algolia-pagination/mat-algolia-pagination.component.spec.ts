import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatAlgoliaPaginationComponent } from './mat-algolia-pagination.component';

describe('MatAlgoliaPaginationComponent', () => {
  let component: MatAlgoliaPaginationComponent;
  let fixture: ComponentFixture<MatAlgoliaPaginationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MatAlgoliaPaginationComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatAlgoliaPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
