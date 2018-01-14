import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentMaterialsComponent } from './current-materials.component';

describe('CurrentMaterialsComponent', () => {
  let component: CurrentMaterialsComponent;
  let fixture: ComponentFixture<CurrentMaterialsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentMaterialsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentMaterialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
