import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoCarouselMultilistComponent } from './demo-carousel-multilist.component';

describe('DemoCarouselMultilistComponent', () => {
  let component: DemoCarouselMultilistComponent;
  let fixture: ComponentFixture<DemoCarouselMultilistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoCarouselMultilistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoCarouselMultilistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
