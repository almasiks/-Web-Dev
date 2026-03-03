import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from '../product-card/product-card.component';
import { ProductService } from '../../services/product.service'; 
import { Product } from '../../models/product.model';
import { Category } from '../../models/category.model';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  categories: Category[] = [];
  allProducts: Product[] = [];
  filteredProducts: Product[] = [];
  selectedCategoryId: number | null = null;

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.categories = this.productService.getCategories();
    this.allProducts = this.productService.getProducts();
  }

  selectCategory(id: number) {
    this.selectedCategoryId = id;
    this.updateFilteredProducts();
  }

  
  onRemoveProduct(productId: number) {
    this.allProducts = this.allProducts.filter(p => p.id !== productId);
    this.updateFilteredProducts();
  }

  private updateFilteredProducts() {
    this.filteredProducts = this.allProducts.filter(p => p.categoryId === this.selectedCategoryId);
  }
}