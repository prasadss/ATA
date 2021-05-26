import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvanceTrainingComponent } from './advance-training.component';

describe('AdvanceTrainingComponent', () => {
  let component: AdvanceTrainingComponent;
  let fixture: ComponentFixture<AdvanceTrainingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvanceTrainingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvanceTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
