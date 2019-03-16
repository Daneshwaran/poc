import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyRequestViewComponent } from './my-request-view.component';

describe('MyRequestViewComponent', () => {
  let component: MyRequestViewComponent;
  let fixture: ComponentFixture<MyRequestViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyRequestViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyRequestViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
