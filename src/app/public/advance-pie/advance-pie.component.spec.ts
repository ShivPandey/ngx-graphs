import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvancePieComponent } from './advance-pie.component';

describe('AdvancePieComponent', () => {
  let component: AdvancePieComponent;
  let fixture: ComponentFixture<AdvancePieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvancePieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvancePieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
