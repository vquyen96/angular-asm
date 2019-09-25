import { Component, OnInit } from '@angular/core';
import {Market} from '../../../entity/market';
import {MarketListComponent} from '../market-list/market-list.component';

@Component({
  selector: 'app-market-create',
  templateUrl: './market-create.component.html',
  styleUrls: ['./market-create.component.css']
})
export class MarketCreateComponent implements OnInit {

  id: number;
  name: string;
  description: string;
  createdAt: string;
  updatedAd: string;
  status: number;
  // tslint:disable-next-line:variable-name
  private _marketListComponent: MarketListComponent;

  constructor(marketListComponent: MarketListComponent) {
    this._marketListComponent = marketListComponent;
  }

  ngOnInit() {
  }

  submit() {
    this._marketListComponent.markets.push(new Market(this.id, this.name, this.description, this.createdAt, this.updatedAd, this.status));
    this.name = '';
    this.description = '';
  }
}
