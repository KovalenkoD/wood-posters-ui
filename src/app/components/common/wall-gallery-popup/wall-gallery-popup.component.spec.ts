import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WallGalleryPopupComponent } from './wall-gallery-popup.component';

describe('WallGalleryPopupComponent', () => {
  let component: WallGalleryPopupComponent;
  let fixture: ComponentFixture<WallGalleryPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WallGalleryPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WallGalleryPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
