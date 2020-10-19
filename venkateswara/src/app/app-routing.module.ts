import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ProductComponent } from "./components/product/product.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ListOfProductsComponent } from "./components/list-of-products/list-of-products.component";
import { ProductCategoryComponent } from "./components/product-category/product-category.component";
import { BrandComponent } from "./components/brand/brand.component";
import { CustomerComponent } from "./components/customer/customer.component";
import { StockComponent } from "./components/stock/stock.component";

const routes: Routes = [
  { path: "", component: DashboardComponent },

  { path: "product", component: ProductComponent },
  { path: "productType", component: ProductCategoryComponent },
  { path: "brand", component: BrandComponent },
  { path: "customer", component: CustomerComponent },
  { path: "stock", component: StockComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
