import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule, SharedModule] 
})
export class IntroPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
    setTimeout(()=>{
      this.router.navigateByUrl('/main')
    },3000)
  }

}
