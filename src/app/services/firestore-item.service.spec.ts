import { TestBed, inject } from '@angular/core/testing';

import { FirestoreItemService } from './firestore-item.service';

describe('FirestoreItemService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FirestoreItemService]
    });
  });

  it('should be created', inject([FirestoreItemService], (service: FirestoreItemService) => {
    expect(service).toBeTruthy();
  }));
});
