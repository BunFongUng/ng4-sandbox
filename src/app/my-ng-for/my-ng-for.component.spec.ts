import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyNgForComponent } from './my-ng-for.component';

describe('MyNgForComponent', () => {
  let component: MyNgForComponent;
  let fixture: ComponentFixture<MyNgForComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyNgForComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyNgForComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
