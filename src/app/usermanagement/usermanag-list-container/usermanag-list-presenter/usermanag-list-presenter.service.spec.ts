import { TestBed } from '@angular/core/testing';

import { UsermanagListPresenterService } from './usermanag-list-presenter.service';

describe('UsermanagListPresenterService', () => {
  let service: UsermanagListPresenterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsermanagListPresenterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
