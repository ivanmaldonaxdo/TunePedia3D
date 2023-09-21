import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstrumentMvComponent } from './instrument-mv.component';

describe('InstrumentMvComponent', () => {
  let component: InstrumentMvComponent;
  let fixture: ComponentFixture<InstrumentMvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstrumentMvComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstrumentMvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
