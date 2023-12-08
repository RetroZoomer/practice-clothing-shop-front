import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import {AppComponent} from "./app.component";
import {ProductComponent} from "./components/product/product.component";
import {CommonModule} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";
import {GlobalErrorComponent} from "./components/global-error/global-error.component";
import {AppRoutingModule} from  "./app.routes";
import {NavigationComponent} from "./components/navigation/navigation.component";
import {ProductPageComponent} from "./pages/product-page/product-page.component";
import {ProductsService} from "./services/products.service";

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    GlobalErrorComponent,
    ProductPageComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    AppRoutingModule,
    NavigationComponent
  ],
  providers: [ProductsService],
  exports: [
    ProductComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
