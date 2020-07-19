import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { Product } from '../product.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../products.service';
import { AngularFirestoreDocument } from '@angular/fire/firestore';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {

  // productEditForm: FormGroup;
  @ViewChild('postForm', { static: false }) productEditForm: NgForm;
  id: any;
    //  productName = new FormControl();
    //   productCategory= new FormControl();
    //   productQuantity= new FormControl();
    //   productPrice= new FormControl();

      product: any;
      prName: any;
  item: any;
  productName: any;
  productCategory: any;
  productQuantity: any;
  productPrice: any;
  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private productService: ProductsService,
    private router: Router
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    console.log(`id is::${this.id}`);

    this.productService.getProduct(this.id).subscribe( item =>{
      this.product = item;
      console.log('prrrrrrName::' + this.product.productName);
      this.productName = this.product.productName;
      this.productCategory = this.product.productCategory;
      this.productQuantity = this.product.productQuantity;
      this.productPrice = this.product.productPrice;
      console.log(`prod Name is::${this.productName}`);
    });
   // this.createForm();
   // console.log('value is createForm::' + this.productEditForm.value.productName);
  }

  // createForm() {
  //   this.productEditForm = new FormGroup({
  //     productName: this.product.productName,
  //     productCategory: this.product.productCategory,
  //     productQuantity: this.product.productQuantity,
  //     productPrice: this.product.productPrice
  //   });
  // }

  update(){
    console.log(`formData is:: ${this.productEditForm.value.productName}`);
    const formData = {
      productName: this.productEditForm.value.productName,
      productCategory: this.productEditForm.value.productCategory,
      productQuantity: this.productEditForm.value.productQuantity,
      productPrice: this.productEditForm.value.productPrice
    };

    this.productService.updateProduct(this.id, formData);
    alert(`one product Updated!!!`);
    this.router.navigate(['/productDashboard']);
  }
}
