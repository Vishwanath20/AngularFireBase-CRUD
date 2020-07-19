import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument
} from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  productCollection: AngularFirestoreCollection<Product>;
  productDoc: AngularFirestoreDocument<Product>;

  constructor(private afs: AngularFirestore) {
  this.productCollection = this.afs.collection('products');
  }

  createProduct(data: Product, imageLink: any) {
    console.log('### Inside the product service ###');
    return this.afs.collection('products').add({
      productName: data.productName,
      productCategory: data.productCategory,
      productQuantity: data.productQuantity,
      productPrice: data.productPrice,
      productImage: imageLink
    });
    alert('One Product Added');
  }

  getProducts(): Observable<Product[]> {
    console.log('Inside the getProducts()');
    return this.productCollection.snapshotChanges().pipe(
      map( action => {
        return action.map( a => {
          const data = a.payload.doc.data() as Product;
          const id = a.payload.doc.id;
          console.log('prod. name is::' + data.productName);
          console.log('prod. image is::' + data.productImage);
          console.log('product id is::' + id);
          return { id, ...data };
        });
      })
    );
  }

  getProduct(id: string) {
    return this.afs.collection('products').doc(id).valueChanges();
  }

  updateProduct(id: string, formData: any) {
    return this.afs.collection('products').doc(id).set(formData);
  }

  delete(id: string) {
    return this.afs.collection('products').doc(id).delete();
  }
}
