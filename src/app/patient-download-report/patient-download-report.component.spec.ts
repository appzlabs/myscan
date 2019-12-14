import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientDownloadReportComponent } from './patient-download-report.component';

describe('PatientDownloadReportComponent', () => {
  let component: PatientDownloadReportComponent;
  let fixture: ComponentFixture<PatientDownloadReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientDownloadReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientDownloadReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
