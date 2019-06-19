import { Component, OnInit } from '@angular/core';
import { HostListener, HostBinding } from "@angular/core";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  aboutModify: boolean;
  height;

  @HostListener("window:scroll", ['$event']) 
  onWindowScroll () {
    this.height = window.pageXOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    this.aboutModify = this.height > 300;
  }

}
