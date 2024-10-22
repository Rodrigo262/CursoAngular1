import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsModule } from './products/products.module';
import { ProductComponent } from './products/pages/product/product.component';
import { PriceComponent } from './products/components/price/price.component';

@NgModule({
  declarations: [AppComponent, ProductComponent, PriceComponent],
  imports: [BrowserModule, AppRoutingModule, ProductsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
