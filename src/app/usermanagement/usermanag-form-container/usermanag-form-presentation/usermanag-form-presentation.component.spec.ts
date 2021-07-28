import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsermanagFormPresentationComponent } from './usermanag-form-presentation.component';

describe('UsermanagFormPresentationComponent', () => {
  let component: UsermanagFormPresentationComponent;
  let fixture: ComponentFixture<UsermanagFormPresentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsermanagFormPresentationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsermanagFormPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
