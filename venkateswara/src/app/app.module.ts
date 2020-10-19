import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { ProductComponent } from "./components/product/product.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ListOfProductsComponent } from "./components/list-of-products/list-of-products.component";
import { ProductCategoryComponent } from "./components/product-category/product-category.component";
import { BrandComponent } from "./components/brand/brand.component";
import { CustomerComponent } from "./components/customer/customer.component";
import { StockComponent } from "./components/stock/stock.component";

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    DashboardComponent,
    ListOfProductsComponent,
    ProductCategoryComponent,
    BrandComponent,
    CustomerComponent,
    StockComponent
  ],
  imports: [BrowserModule, FontAwesomeModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
