import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  @Input() product!: Product;
  @Output() remove = new EventEmitter<number>();

  currentIndex: number = 0; 
  
  isLiked: boolean = false; 
  like() {
    if(!this.isLiked) { 
      this.product.likes++;
      this.isLiked = true;
    } else {
      this.product.likes--;
      this.isLiked = false;
    }
  }
  removeProduct() {
    this.remove.emit(this.product.id);
  }

  nextImage() {
    if (this.currentIndex < this.product.images.length - 1) {
      this.currentIndex++;
    } else {
      this.currentIndex = 0; 
    }
  }

  prevImage() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    } else {
      this.currentIndex = this.product.images.length - 1;
    }
  }


  onImageError(event: any) {
    event.target.src = 'assets/placeholder.jpg'; 
  }

  shareOnWhatsApp() {
    window.open(`https://wa.me/?text=${encodeURIComponent(this.product.link)}`, '_blank');
  }

  shareOnTelegram() {
    window.open(`https://t.me/share/url?url=${encodeURIComponent(this.product.link)}`, '_blank');
  }
}