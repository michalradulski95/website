import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss']
})
export class DescriptionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  descriptionBackgroundImg = '../assets/images/4.jpg';

  showMoneyCheck = false;
  showDolly = false;
  showHand = false;
  showFile = false;
  showCalendar = false;
  showHandshake = false;
}
