import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DispFormComponent } from './disp-form.component';

describe('DispFormComponent', () => {
  let component: DispFormComponent;
  let fixture: ComponentFixture<DispFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DispFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DispFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
