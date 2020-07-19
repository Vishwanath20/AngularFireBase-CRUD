import { Component, OnInit } from '@angular/core';
import { observable, Observable } from 'rxjs';

import { ProductsService } from '../products.service';
import { Product } from '../product.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-dashboard',
  templateUrl: './product-dashboard.component.html',
  styleUrls: ['./product-dashboard.component.scss']
})
export class ProductDashboardComponent implements OnInit {

  products: Observable<Product[]>;
  constructor(
    private productService: ProductsService,
    private routes: Router
  ) { }

  ngOnInit() {
   this.products = this.productService.getProducts();
   console.log('### Inside the product-dashboard-- products image url is::' + this.products);
  }

  viewDetails(product: any) {
    console.log('product id is::' + product.id);
    this.routes.navigate(['editproduct', product.id]);
  }

  delete(productid: any) {
    this.productService.delete(productid);
    alert('One record Deleted!!!');
  }
}
