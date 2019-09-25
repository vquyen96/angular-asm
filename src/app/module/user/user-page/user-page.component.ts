import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {

  endpoint = 'http://localhost:8080/api/v1/';
  constructor(private http: HttpClient) { }
  httpData;
  search: string;
  marketName: string;
  markets;
  ngOnInit() {
    this.http.get(this.endpoint + 'coins').subscribe((data) => this.displayData(data));
    this.http.get(this.endpoint + 'markets').subscribe((data) => this.displayMarket(data));
  }

  displayData(data) {this.httpData = data.data; }
  displayMarket(data) {console.log(data); this.markets = data.data; }

  onSearch() {
    alert('I\'m Searching ...');
  }
}
