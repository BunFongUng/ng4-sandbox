import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyformBuilderComponent } from './myform-builder.component';

describe('MyformBuilderComponent', () => {
  let component: MyformBuilderComponent;
  let fixture: ComponentFixture<MyformBuilderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyformBuilderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyformBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
