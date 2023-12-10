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
import {UserComponent} from "./components/user/user.component";
import {UserService} from "./services/user.service";
import {ProfilePageComponent} from "./pages/profile-page/profile-page.component";
import {ModalComponent} from "./components/modal/modal.component";
import {UpdateUserComponent} from "./components/update-user/update-user.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    GlobalErrorComponent,
    ProductPageComponent,
    UserComponent,
    ProfilePageComponent,
    ModalComponent,
    UpdateUserComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    AppRoutingModule,
    NavigationComponent,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    ProductsService,
    UserService
  ],
  exports: [
    ProductComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
