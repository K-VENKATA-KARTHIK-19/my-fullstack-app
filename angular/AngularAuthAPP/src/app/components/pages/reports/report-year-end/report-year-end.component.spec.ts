import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportYearEndComponent } from './report-year-end.component';

describe('ReportYearEndComponent', () => {
  let component: ReportYearEndComponent;
  let fixture: ComponentFixture<ReportYearEndComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportYearEndComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportYearEndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
