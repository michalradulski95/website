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

  navModify: any;
  height: any;
  screenWidth:any;

  @HostListener("window:scroll", ['$event'])
  @HostListener('window:resize', ['$event'])
  onWindowScroll() {
    this.height = window.pageXOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    this.screenWidth = window.innerWidth;
    this.navModify = this.height > 885 && this.screenWidth > 425;
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

  item1 = false;
  item2 = false;
  item3 = false;
  item4 = false;

  item1Clicked() {
    this.item2 = false;
    this.item3 = false;
    this.item4 = false;
  }

  item2Clicked() {
    this.item1 = false;
    this.item3 = false;
    this.item4 = false;
  }

  item3Clicked() {
    this.item1 = false;
    this.item2 = false;
    this.item4 = false;
  }

  item4Clicked() {
    this.item1 = false;
    this.item3 = false;
    this.item2 = false;
  }

  showItems : boolean = true;

 

}
