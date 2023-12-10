import {RouterModule, Routes} from '@angular/router';
import {ProductComponent} from "./components/product/product.component";
import {ProductPageComponent} from "./pages/product-page/product-page.component";
import {NgModule} from "@angular/core";
import {ProfilePageComponent} from "./pages/profile-page/profile-page.component";

export const routes: Routes = [
  { path: '', component: ProductPageComponent},
  { path: 'profile', component: ProfilePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
