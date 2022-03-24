import { TestBed } from '@angular/core/testing';

import { SvgTaskService } from './svg-task.service';

describe('SvgTaskService', () => {
  let service: SvgTaskService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SvgTaskService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
