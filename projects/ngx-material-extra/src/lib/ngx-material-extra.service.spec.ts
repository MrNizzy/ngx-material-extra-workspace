import { TestBed } from '@angular/core/testing';

import { NgxMaterialExtraService } from './ngx-material-extra.service';

describe('NgxMaterialExtraService', () => {
  let service: NgxMaterialExtraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxMaterialExtraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
