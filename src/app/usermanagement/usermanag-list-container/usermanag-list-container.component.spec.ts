import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsermanagListContainerComponent } from './usermanag-list-container.component';

describe('UsermanagListContainerComponent', () => {
  let component: UsermanagListContainerComponent;
  let fixture: ComponentFixture<UsermanagListContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsermanagListContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsermanagListContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
