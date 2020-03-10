import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadfeedbackComponent } from './uploadfeedback.component';

describe('UploadfeedbackComponent', () => {
  let component: UploadfeedbackComponent;
  let fixture: ComponentFixture<UploadfeedbackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadfeedbackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadfeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
