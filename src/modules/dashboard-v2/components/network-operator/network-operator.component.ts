import { Component, OnInit } from '@angular/core';
import { zoneDetails } from '../../models/zone-details';

@Component({
  selector: 'app-network-operator',
  templateUrl: './network-operator.component.html',
  styleUrls: ['./network-operator.component.scss'],
})
export class NetworkOperatorComponent implements OnInit {
  constructor() {}

  zoneDetails: zoneDetails[] = [
    { zoneName: 'A', zonePrice: 10 },
    { zoneName: 'B', zonePrice: 20 },
    { zoneName: 'C', zonePrice: 30 },
  ];
  ngOnInit(): void {
    console.log('View initialized');
  }
}
