import { TestBed } from '@angular/core/testing';

import { ConfirmationDialogueService } from './confirmation-dialogue.service';

describe('ConfirmationDialogueService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConfirmationDialogueService = TestBed.get(ConfirmationDialogueService);
    expect(service).toBeTruthy();
  });
});
