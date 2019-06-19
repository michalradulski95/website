import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  goToPricelist() {
    this.router.navigate(['/priceList']);
   
  };
  goToBuyOut() {
    this.router.navigate(['/buyOut']);
  
  };

}
