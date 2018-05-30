import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentCollectionsComponent } from './current-collections.component';

describe('CurrentCollectionsComponent', () => {
  let component: CurrentCollectionsComponent;
  let fixture: ComponentFixture<CurrentCollectionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentCollectionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentCollectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
