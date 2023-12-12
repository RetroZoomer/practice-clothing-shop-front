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
import {LoginPageComponent} from "./pages/login-page/login-page.component";
import {LoginComponent} from "./components/login/login.component";
import {RegistrationPageComponent} from "./pages/registration-page/registration-page.component";
import {RegistrationComponent} from "./components/registration/registration.component";
import {AddProductComponent} from "./components/add-product/add-product.component";
import {authInterceptorProviders} from "./auth/_helpers/auth.interceptor";
import {AboutProductPageComponent} from "./pages/about-product-page/about-product-page.component";
import {AboutProductComponent} from "./components/about-product/about-product.component";
import {FilterProductsByNamePipe} from "./pipes/filter-products-by-name.pipe";
import {FilterProductsByCategoryPipe} from "./pipes/filter-products-by-category.pipe";
import {UpdateProductComponent} from "./components/update-product/update-product.component";

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    GlobalErrorComponent,
    ProductPageComponent,
    UserComponent,
    ProfilePageComponent,
    ModalComponent,
    UpdateUserComponent,
    LoginPageComponent,
    LoginComponent,
    RegistrationPageComponent,
    RegistrationComponent,
    AddProductComponent,
    AboutProductPageComponent,
    AboutProductComponent,
    UpdateProductComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    AppRoutingModule,
    NavigationComponent,
    FormsModule,
    ReactiveFormsModule,
    FilterProductsByNamePipe,
    FilterProductsByCategoryPipe
  ],
  providers: [
    ProductsService,
    UserService,
    authInterceptorProviders
  ],
  exports: [
    ProductComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
