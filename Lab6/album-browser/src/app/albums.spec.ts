import { TestBed } from '@angular/core/testing';


import { AlbumsComponent } from './albums/albums';

describe('AlbumsComponent', () => {
  let service: AlbumsComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlbumsComponent);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
