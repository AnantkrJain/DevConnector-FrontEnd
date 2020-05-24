import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateRouteComponent } from './private-route.component';

describe('PrivateRouteComponent', () => {
  let component: PrivateRouteComponent;
  let fixture: ComponentFixture<PrivateRouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrivateRouteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivateRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
