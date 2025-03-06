import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CartService } from 'src/app/services/cart.service';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
  standalone:true,
   imports: [CommonModule, FormsModule, IonicModule, SharedModule]
})
export class CartPage implements OnInit {
  cartp$=this.cartsvc.cartp$
  constructor(private cartsvc:CartService) { }

  ngOnInit() {
  }

  totalproduct(price:number , units:number){

    return price*units;

  }
  deleteproduct(Productid:number){
    this.cartsvc.deleteproduct(Productid);
  }
updateunit(operation:string , id:number){
  const Product= this.cartsvc.findproductByid(id)

  if(Product){

    if(operation == 'minus' && Product.cantidad>0 ){

      Product.cantidad -= 1;
    }
    if(operation === 'add'){
      Product.cantidad += 1;

    }
    if(Product.cantidad===0){
      this.deleteproduct(id);

    }
  }
}

totalcart(){
  const result = this.cartsvc.totalcart();
  return result;

}

}
