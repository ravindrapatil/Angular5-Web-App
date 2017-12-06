import { TestBed, inject } from '@angular/core/testing';

import { GithubUsersService } from './github-users.service';

describe('GithubUsersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GithubUsersService]
    });
  });

  it('should be created', inject([GithubUsersService], (service: GithubUsersService) => {
    expect(service).toBeTruthy();
  }));
});
