import { Component, OnInit } from '@angular/core';
declare let L;
declare let tomtom: any;
const artMetal = [53.139406410410736, 23.185371137693323];


@Component({
  selector: 'app-localization',
  templateUrl: './localization.component.html',
  styleUrls: ['./localization.component.scss']
})
export class LocalizationComponent implements OnInit {

  constructor() { }

  ngOnInit() { 
    const map = tomtom.L.map('map', {
      key: 'erD2hw4ZjdEVSwQU7JWkImnz5gXN4EG0',
      basePath: '/assets/sdk',
      center: artMetal,
      zoom: 15,
      source : 'raster',
      
    });
    const marker = tomtom.L.marker(artMetal).addTo(map);
    marker.bindPopup('<b>Skup Złomu Art-metal</b>,<br> Towarowa 1, 15-007 Białystok').openPopup();
  }
}
