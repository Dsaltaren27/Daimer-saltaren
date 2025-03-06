import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Product } from 'src/app/interfaces/product';
import { CartService } from 'src/app/services/cart.service';
import { StoreService } from 'src/app/services/store.service';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
  selector: 'app-resumen',
  templateUrl: './resumen.page.html',
  styleUrls: ['./resumen.page.scss'],
  standalone:true,
 imports: [CommonModule, FormsModule, IonicModule, SharedModule]

})
export class ResumenPage implements OnInit {

 

  constructor(private cartsvc:CartService,
    private storesvc:StoreService
  ) { }

  ngOnInit() {
  }
  }

  
