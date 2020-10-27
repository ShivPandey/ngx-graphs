import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PiiPieComponent } from './pii-pie.component';

describe('PiiPieComponent', () => {
  let component: PiiPieComponent;
  let fixture: ComponentFixture<PiiPieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PiiPieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PiiPieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
