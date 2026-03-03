import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Album } from './model';

@Injectable({
  providedIn: 'root',
})
export class AlbumsService {
  private BASE_URL = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) { }

  getAlbums(): Observable<Album[]> {
    return this.http.get<Album[]>(`${this.BASE_URL}/albums`);
  }

getAlbum(id: number): Observable<Album> {
  return this.http.get<Album>(`https://jsonplaceholder.typicode.com/albums/${id}`);
}

  getAlbumPhotos(albumId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.BASE_URL}/albums/${albumId}/photos`);
  }


  updateAlbum(album: Album): Observable<Album> {
  return this.http.put<Album>(`${this.BASE_URL}/albums/${album.id}`, album);
}
  
  deleteAlbum(id: number): Observable<void> {
    return this.http.delete<void>(`${this.BASE_URL}/albums/${id}`);
  }
}
