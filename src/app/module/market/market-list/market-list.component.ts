import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Market} from '../../../entity/market';

@Component({
  selector: 'app-market-list',
  templateUrl: './market-list.component.html',
  styleUrls: ['./market-list.component.css']
})
export class MarketListComponent implements OnInit {

  markets = [
    new Market(1, 'Helo', 'Hello', '2109', '', 1),
    new Market(2, 'Helo2', 'Hello', '2109', '', 1),
    new Market(3, 'Helo3', 'Hello', '2109', '', 1),
    new Market(4, 'Helo4', 'Hello', '2109', '', 1)
  ];

  constructor() { }

  ngOnInit() {
  }

}
