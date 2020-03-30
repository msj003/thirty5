import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainRightComponent } from './main-right.component';

describe('MainRightComponent', () => {
  let component: MainRightComponent;
  let fixture: ComponentFixture<MainRightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainRightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
