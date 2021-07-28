import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsermanagFormContainerComponent } from './usermanag-form-container.component';

describe('UsermanagFormContainerComponent', () => {
  let component: UsermanagFormContainerComponent;
  let fixture: ComponentFixture<UsermanagFormContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsermanagFormContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsermanagFormContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
