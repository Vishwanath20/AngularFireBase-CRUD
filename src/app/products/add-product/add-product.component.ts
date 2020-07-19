import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Product } from '../product.model';
import { ProductsService } from '../products.service';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  productForm: FormGroup;
  downloadURL: Observable<string>;
  imageURL: string;
  constructor(
    private fb: FormBuilder,
    private productService: ProductsService,
    private storage: AngularFireStorage,
    private router: Router
    ) {  }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.productForm = this.fb.group( {
      productName: [''],
      productCategory: [''],
      productQuantity: [''],
      productPrice: [''],
      productImage: ['']
    });
  }
  saveProduct(value: any) {
   this.productService.createProduct(value, this.imageURL).then(
     res => {
       this.router.navigate(['/productDashboard']);
     }
   )
  }

  uploadPostImage(event) {
    console.log('### Inside the uploadPostImage()');
    const dateTime = new Date();
    const file = event.target.files[0];
    const fileName = file.name;
    const fullName = fileName + dateTime;
    const path = `productImage/${fullName}`;
    if (file.type.split('/')[0] !== 'image') {
      return alert('Only Image allowed');
    } else {
      const ref = this.storage.ref(path);
      console.log('ref is::' + ref);
      this.storage.upload(path, file).snapshotChanges().pipe(
        finalize(() => {
          ref.getDownloadURL().subscribe((url) => {
            this.imageURL = url;
            console.log('imageUrl is::' + this.imageURL);
          });
        })
      ).subscribe();
    }
  }
}
