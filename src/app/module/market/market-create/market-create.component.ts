import { Component, OnInit } from '@angular/core';
import {Market} from '../../../entity/market';
import {MarketListComponent} from '../market-list/market-list.component';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-market-create',
  templateUrl: './market-create.component.html',
  styleUrls: ['./market-create.component.css']
})
export class MarketCreateComponent implements OnInit {
  endpoint = 'http://localhost:8080/api/v1/';
  name: string;
  description: string;
  private body: {};
  constructor(private http: HttpClient, private router: Router) {
  }

  ngOnInit() {
  }

  submit() {
    if (this.name != null) {
      this.body = {
        name: this.name,
        description : this.description,
        coins : []
      };
      this.http.post(this.endpoint + 'markets', this.body).subscribe((data) => console.log(data));
      this.router.navigate(['/market']);
    } else {
      alert('Name of market invalid');
    }
  }
}
