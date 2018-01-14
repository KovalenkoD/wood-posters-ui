import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleMaterialComponent } from './single-material.component';

describe('SingleMaterialComponent', () => {
  let component: SingleMaterialComponent;
  let fixture: ComponentFixture<SingleMaterialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleMaterialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
