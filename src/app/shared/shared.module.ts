import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { ProductsCardComponent } from '../components/products-card/products-card.component';
import { HeaderComponent } from '../components/header/header.component';
import { LoaderComponent } from '../components/loader/loader.component';
import { StoreService } from '../services/store.service';



@NgModule({
  declarations: [
    ProductsCardComponent,
    HeaderComponent,
    LoaderComponent,
 
  ],
  exports: [
    ProductsCardComponent,
    HeaderComponent,
    LoaderComponent,
    RouterModule,
 
  ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule 
  ],
  providers: [

    StoreService 
  ]
})
export class SharedModule { }
