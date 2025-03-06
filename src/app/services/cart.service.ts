import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
private listproduct:Product[]=[]

private cartproduct= new BehaviorSubject<Product[]>([]);
cartp$=this.cartproduct.asObservable();
  
  constructor() { }

 addcart(Product: Product) {
  if (this.listproduct.length === 0) {
    Product.cantidad = 1;
    this.listproduct.push(Product);
    this.cartproduct.next(this.listproduct);
  } else {
    const productNew = this.listproduct.find((element) => {
      return element.id === Product.id;
    });

    if (productNew) {
      productNew.cantidad += 1;
      this.cartproduct.next(this.listproduct);
    } else {
      Product.cantidad = 1;
      this.listproduct.push(Product);
      this.cartproduct.next(this.listproduct);
    }
  }
}

deleteproduct(Productid:number){
this.listproduct = this.listproduct.filter(Product => Product.id != Productid)
this.cartproduct.next([...this.listproduct]);
}

findproductByid(id:number){
return this.listproduct.find((element)=>{

  return element.id === id;
})
}
  
totalcart(){

  const total = this.listproduct.reduce(function(acc,Product){return acc+ (Product.cantidad*Product.price);},0)
  return total
}


}
