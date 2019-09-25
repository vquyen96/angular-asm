import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-coin-list',
  templateUrl: './coin-list.component.html',
  styleUrls: ['./coin-list.component.css']
})
export class CoinListComponent implements OnInit {

  endpoint = 'http://localhost:8080/api/v1/';
  constructor(private http: HttpClient) { }
  httpData;
  ngOnInit() {
    this.http.get(this.endpoint + 'coins').subscribe((data) => this.displayData(data));
  }

  displayData(data) {this.httpData = data.data; }
}
