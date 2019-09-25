import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Market} from '../../../entity/market';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-market-list',
  templateUrl: './market-list.component.html',
  styleUrls: ['./market-list.component.css']
})
export class MarketListComponent implements OnInit {

  endpoint = 'http://localhost:8080/api/v1/';
  constructor(private http: HttpClient) { }
  httpData;
  ngOnInit() {
    this.http.get(this.endpoint + 'markets').subscribe((data) => this.displayData(data));
  }

  displayData(data) {this.httpData = data.data; }


}
