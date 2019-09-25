import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import {RouterModule, Routes} from '@angular/router';
import { AlertModule } from 'ngx-bootstrap';
import {MarketListComponent} from './module/market/market-list/market-list.component';
import { CoinListComponent } from './module/coin/coin-list/coin-list.component';
import { CoinCreateComponent } from './module/coin/coin-create/coin-create.component';
import { UserPageComponent } from './module/user/user-page/user-page.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {MarketCreateComponent} from './module/market/market-create/market-create.component';

const routes: Routes = [
  {
    path: 'market',
    component: MarketListComponent
  },
  {
    path: 'market-create',
    component: MarketCreateComponent
  },
  {
    path: 'coin',
    component: CoinListComponent
  },
  {
    path: 'coin-create',
    component: CoinCreateComponent
  },
  {
    path: 'user',
    component: UserPageComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    MarketListComponent,
    MarketCreateComponent,
    CoinListComponent,
    CoinCreateComponent,
    UserPageComponent

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    AlertModule.forRoot(),
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
