import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  route: string;

  constructor(private router: Router) {
  }

  ngOnInit() {
    console.log(this.router.url);
  }

}
