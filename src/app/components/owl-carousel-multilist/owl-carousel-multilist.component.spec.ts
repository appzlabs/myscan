import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OwlCarouselMultilistComponent } from './owl-carousel-multilist.component';

describe('OwlCarouselMultilistComponent', () => {
  let component: OwlCarouselMultilistComponent;
  let fixture: ComponentFixture<OwlCarouselMultilistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OwlCarouselMultilistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OwlCarouselMultilistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
