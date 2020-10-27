import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdaPieComponent } from './ada-pie.component';

describe('AdaPieComponent', () => {
  let component: AdaPieComponent;
  let fixture: ComponentFixture<AdaPieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdaPieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdaPieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
