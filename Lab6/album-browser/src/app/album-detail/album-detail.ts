import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms'; 
import { Album } from '../model';
import { AlbumsService } from '../album.service';

@Component({
  selector: 'app-album-detail',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule], 
  templateUrl: './album-detail.html',
  styleUrl: './album-detail.css',
})
export class AlbumDetailComponent implements OnInit {
  album!: Album;
  loading: boolean = true;

  constructor(
    private route: ActivatedRoute,
    private albumsService: AlbumsService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.albumsService.getAlbum(id).subscribe({
      next: (album) => {
        this.album = album;
        this.loading = false; 
      },
      error: () => {
        this.loading = false;
      }
    });
  }

  saveTitle(): void {
    this.albumsService.updateAlbum(this.album).subscribe(updatedAlbum => {
      alert('Saved!');
      this.album = updatedAlbum; 
    });
  }
}