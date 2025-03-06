import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { Product } from 'src/app/interfaces/product';
import { CartService } from 'src/app/services/cart.service';
import { StoreService } from 'src/app/services/store.service';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.page.html',
  styleUrls: ['./product-details.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule, SharedModule]
})
export class ProductDetailsPage implements OnInit {

  Productid: number; 
  Product = null as any;

 
  

  constructor(
    private storesvc: StoreService,
    private actRoute: ActivatedRoute,
    private cartsvc: CartService
  ) { 
 
    const id = this.actRoute.snapshot.paramMap.get('id');
    this.Productid = id ? +id : 0; 
  }

  ngOnInit() {
    this.getproductdetails(); 
  }

  ionViewWillEnter() {
    this.getproductdetails();
  }

  getproductdetails() {
    this.storesvc.getProductById(this.Productid).subscribe({
      next: (res: any) => {
        this.Product = res;
        console.log(res);
      },
      error: (error: any) => {
        console.error(error); 
      }
    });
  }


  addcart(Product:Product){
    return this.cartsvc.addcart(Product);
  }



  
}
