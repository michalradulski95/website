import { Component, OnInit } from '@angular/core';
import { HostListener, HostBinding } from "@angular/core";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  navModify: boolean;
  height;

  @HostListener("window:scroll", ['$event'])
  onWindowScroll() {
    this.height = window.pageXOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    this.navModify = this.height > 885;
  }
}
