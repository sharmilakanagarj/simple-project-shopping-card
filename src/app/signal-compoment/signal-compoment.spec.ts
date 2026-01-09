import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalCompoment } from './signal-compoment';

describe('SignalCompoment', () => {
  let component: SignalCompoment;
  let fixture: ComponentFixture<SignalCompoment>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalCompoment]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignalCompoment);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
