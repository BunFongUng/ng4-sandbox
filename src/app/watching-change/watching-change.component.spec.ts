import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchingChangeComponent } from './watching-change.component';

describe('WatchingChangeComponent', () => {
  let component: WatchingChangeComponent;
  let fixture: ComponentFixture<WatchingChangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WatchingChangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WatchingChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
