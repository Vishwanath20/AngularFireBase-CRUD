import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFirestoreModule} from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';
import { FormsModule } from '@angular/forms';

import { ProductDashboardComponent} from './product-dashboard/product-dashboard.component';
import { AddProductComponent } from './add-product/add-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { ProductListComponent } from './product-list/product-list.component';

@NgModule({
  declarations: [
    ProductDashboardComponent,
    AddProductComponent,
    EditProductComponent,
    ProductListComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    AngularFirestoreModule,
    AngularFireModule,
    AngularFireStorageModule,
    FormsModule
  ]
})
export class ProductsModule { }
