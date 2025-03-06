import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Product } from 'src/app/interfaces/product';
import { StoreService } from 'src/app/services/store.service';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule, SharedModule]
})
export class HomePage implements OnInit {

  Products: Product[] = [];
  filteredProducts: Product[] = [];
  categories: string[] = [];
  selectedCategory: string = 'all';
  loading = true;

  constructor(private storesvc: StoreService) {}

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.storesvc.getAllProducts().subscribe({
      next: (data: Product[]) => {
        this.Products = data;
        this.filteredProducts = this.Products;  // Asigna los productos cargados a filteredProducts
        this.getCategories();  // Llama a getCategories una vez que los productos se han cargado
        this.loading = false;
      },
      error: (err) => {
        console.error('Error al cargar los productos', err);
        this.loading = false;
      }
    });
  }

  getCategories() {
    // Obtén las categorías únicas de los productos cargados
    this.categories = Array.from(new Set(this.Products.map(p => p.category)));
  }

  filterProducts() {
    if (this.selectedCategory === 'all') {
      this.filteredProducts = this.Products; // Mostrar todos los productos si la opción "Todas" está seleccionada
    } else {
      this.filteredProducts = this.Products.filter(product => product.category === this.selectedCategory); // Filtrar productos por categoría
    }
  }
}
