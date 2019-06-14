import { Component, OnInit } from '@angular/core';
import { HostListener, HostBinding } from "@angular/core";
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navModify: boolean;
  height;
  

  @HostListener("window:scroll", ['$event'])
  onWindowScroll() {
    this.height = window.pageXOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    this.navModify = this.height > 885;
  }

  
  goToPricelist() {
    this.router.navigate(['/priceList']);
   
  };

  goToBuyOut() {
    this.router.navigate(['/buyOut']);
  
  };

  goToContact() {
    this.router.navigate(['/contact']);
    
  }

  goToMain () {
    this.router.navigate(['']);
   
  }

}
