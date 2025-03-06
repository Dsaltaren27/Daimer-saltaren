import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonCard, IonicModule } from '@ionic/angular';
import { Product } from 'src/app/interfaces/product';
import { CartService } from 'src/app/services/cart.service';
import { StoreService } from 'src/app/services/store.service';


@Component({
  selector: 'app-products-card',
  templateUrl: './products-card.component.html',
  styleUrls: ['./products-card.component.scss'],
  standalone: false
})
export class ProductsCardComponent {
  @Input() Product!: Product;
  constructor(private router:Router,
    private storesvc:StoreService,
    private cartsvc:CartService
  ) {}

  get Homepage():boolean{
    return this.router.url=== '/home';
  }
 
  addcart(){
    this.cartsvc.addcart(this.Product);
  }
 
}





