import { TestBed } from '@angular/core/testing';

import { BlocCourseGuard } from './bloc-course.guard';

describe('BlocCourseGuard', () => {
  let guard: BlocCourseGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(BlocCourseGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
