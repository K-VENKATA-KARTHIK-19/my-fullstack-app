import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportSocialComponent } from './report-social.component';

describe('ReportSocialComponent', () => {
  let component: ReportSocialComponent;
  let fixture: ComponentFixture<ReportSocialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportSocialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportSocialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
