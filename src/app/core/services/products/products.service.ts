import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

import { Producto } from '../../models/product.model';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {


  constructor( private http: HttpClient) {

   }

  getAllProducts(){
    return this.http.get<Producto[]>(`${environment.url_api}/products/` );
  }

  getProduct(id: string){
    return this.http.get<Producto>(`${environment.url_api}/products/${id}`)
  }

  createProduct(product: Producto){
    return this.http.post(`${environment.url_api}/products`,product)
  }

  updateProduct(id: string, changes: Partial<Producto>){
    return this.http.put<Producto>(`${environment.url_api}/products/${id}`,changes)
 
  }
  deleteProduct(id: string){
    return this.http.delete(`${environment.url_api}/products/${id}`)
  }

}
