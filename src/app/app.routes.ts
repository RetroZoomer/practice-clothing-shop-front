import {RouterModule, Routes} from '@angular/router';
import {ProductPageComponent} from "./pages/product-page/product-page.component";
import {NgModule} from "@angular/core";
import {ProfilePageComponent} from "./pages/profile-page/profile-page.component";
import {LoginPageComponent} from "./pages/login-page/login-page.component";
import {RegistrationPageComponent} from "./pages/registration-page/registration-page.component";

export const routes: Routes = [
  { path: 'product', component: ProductPageComponent},
  { path: 'profile', component: ProfilePageComponent},
  { path: 'signin', component: LoginPageComponent},
  { path: 'signup', component: RegistrationPageComponent},
  { path: '', redirectTo: 'signin', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
