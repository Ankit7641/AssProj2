import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsermanagListPresentationComponent } from './usermanag-list-presentation.component';

describe('UsermanagListPresentationComponent', () => {
  let component: UsermanagListPresentationComponent;
  let fixture: ComponentFixture<UsermanagListPresentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsermanagListPresentationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsermanagListPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
