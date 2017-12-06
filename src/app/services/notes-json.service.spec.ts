import { TestBed, inject } from '@angular/core/testing';

import { NotesJsonService } from './notes-json.service';

describe('NotesJsonService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NotesJsonService]
    });
  });

  it('should be created', inject([NotesJsonService], (service: NotesJsonService) => {
    expect(service).toBeTruthy();
  }));
});
