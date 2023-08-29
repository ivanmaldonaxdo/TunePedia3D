import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBaseComponent } from './nav-base.component';

describe('NavBaseComponent', () => {
  let component: NavBaseComponent;
  let fixture: ComponentFixture<NavBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavBaseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
