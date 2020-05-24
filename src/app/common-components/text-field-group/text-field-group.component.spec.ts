import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextFieldGroupComponent } from './text-field-group.component';

describe('TextFieldGroupComponent', () => {
  let component: TextFieldGroupComponent;
  let fixture: ComponentFixture<TextFieldGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextFieldGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextFieldGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
