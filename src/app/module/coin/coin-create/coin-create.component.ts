import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-coin-create',
  templateUrl: './coin-create.component.html',
  styleUrls: ['./coin-create.component.css']
})
export class CoinCreateComponent implements OnInit {
  name: string;
  baseAsset: string;
  quoteAsset: string;
  lastPrice: string;
  volumn24h: string;
  marketName: string;
  markets;

  endpoint = 'http://localhost:8080/api/v1/';
  private body: {};
  private validForm = true;
  constructor(private http: HttpClient, private router: Router) { }
  ngOnInit() {
    this.http.get(this.endpoint + 'markets').subscribe((data) => this.displayData(data));
  }

  displayData(data) {this.markets = data.data; }
  submit() {
    if (this.marketName == null) {
      alert('Market invalid');
      this.validForm = false;
    }
    if (this.name == null) {
      alert('Name of coin invalid');
      this.validForm = false;
    }
    if (this.validForm) {
      this.body = {
        name: this.name,
        baseAsset : this.baseAsset,
        quoteAsset : this.quoteAsset,
        lastPrice : this.lastPrice,
        volumn24h : this.volumn24h,
        market : {
          name : this.marketName
        }
      };
      this.http.post(this.endpoint + 'coins', this.body).subscribe((data) => this.router.navigate(['/coin']));
    }
  }
}
