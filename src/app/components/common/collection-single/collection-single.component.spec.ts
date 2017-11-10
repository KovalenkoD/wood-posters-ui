import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionSingleComponent } from './collection-single.component';

describe('CollectionSingleComponent', () => {
  let component: CollectionSingleComponent;
  let fixture: ComponentFixture<CollectionSingleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollectionSingleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectionSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
