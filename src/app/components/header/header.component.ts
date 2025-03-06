import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: false
})
export class HeaderComponent  implements OnInit {

  
  constructor(private storesvc:StoreService,
    private router:Router
  ) { }

  ngOnInit() {
    
  }

  navigatecart(){
    this.router.navigate(['/cart'])

  }
}
