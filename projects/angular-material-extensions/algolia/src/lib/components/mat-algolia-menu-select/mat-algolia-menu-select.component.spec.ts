import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatAlgoliaMenuSelectComponent } from './mat-algolia-menu-select.component';

describe('MatAlgoliaMenuSelectComponent', () => {
  let component: MatAlgoliaMenuSelectComponent;
  let fixture: ComponentFixture<MatAlgoliaMenuSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MatAlgoliaMenuSelectComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatAlgoliaMenuSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
