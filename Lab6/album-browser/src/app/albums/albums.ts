import { Component, OnInit } from '@angular/core';
import { Album } from '../model';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AlbumsService } from '../album.service';

@Component({
  selector: 'app-albums',
  imports: [RouterModule, CommonModule],
  templateUrl: './albums.html',
  styleUrl: './albums.css',
})
export class AlbumsComponent implements OnInit {
  albums: Album[] = [];
  loading: boolean = true;

constructor(private albumsService: AlbumsService) { }

ngOnInit(): void {
  this.albumsService.getAlbums().subscribe({
    next: (data: Album[]) => {
      this.albums = data;
      this.loading = false;
    },
    error: (error) => {
      console.error('Error fetching albums:', error);
      this.loading = false;
    }
  });
}

  deleteAlbum(id: number): void {
    this.albums = this.albums.filter(album => album.id !== id);
    this.albumsService.deleteAlbum(id).subscribe();
  }
}
