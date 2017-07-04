import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeomFormComponent } from './deom-form.component';

describe('DeomFormComponent', () => {
  let component: DeomFormComponent;
  let fixture: ComponentFixture<DeomFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeomFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeomFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
