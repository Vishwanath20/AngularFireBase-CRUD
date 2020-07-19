import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { ProductDashboardComponent} from './products/product-dashboard/product-dashboard.component';
import { AddProductComponent } from './products/add-product/add-product.component';
import { EditProductComponent } from './products/edit-product/edit-product.component';

const routes: Routes = [
  {path: 'singup', component: SignupComponent},
  {path: 'signin', component: SigninComponent},
  {path: 'productDashboard', component: ProductDashboardComponent},
  {path: 'addproduct', component: AddProductComponent},
  {path: 'editproduct/:id', component: EditProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
