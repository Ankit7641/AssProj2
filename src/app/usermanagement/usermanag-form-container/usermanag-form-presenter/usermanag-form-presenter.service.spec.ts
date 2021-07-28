import { TestBed } from '@angular/core/testing';

import { UsermanagFormPresenterService } from './usermanag-form-presenter.service';

describe('UsermanagFormPresenterService', () => {
  let service: UsermanagFormPresenterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsermanagFormPresenterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
