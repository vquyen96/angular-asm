import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarketCreateComponent } from './market-create/market-create.component';
import { MarketListComponent } from './market-list/market-list.component';
import {FormsModule} from '@angular/forms';



@NgModule({
  declarations: [MarketCreateComponent, MarketListComponent],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class MarketModule { }
