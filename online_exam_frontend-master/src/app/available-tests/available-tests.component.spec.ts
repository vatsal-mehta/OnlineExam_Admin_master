import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailableTestsComponent } from './available-tests.component';

describe('AvailableTestsComponent', () => {
  let component: AvailableTestsComponent;
  let fixture: ComponentFixture<AvailableTestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvailableTestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvailableTestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
