import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectListGroupComponent } from './select-list-group.component';

describe('SelectListGroupComponent', () => {
  let component: SelectListGroupComponent;
  let fixture: ComponentFixture<SelectListGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectListGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectListGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
