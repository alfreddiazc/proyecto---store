import { Component, OnInit } from '@angular/core';
import { Producto } from '../../../core/models/product.model';
import { ProductsService } from 'src/app/core/services/products/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  

  productos: Producto[] =[
    
  ]
  
  constructor( private product: ProductsService) { }

  ngOnInit(): void {
    this.fetchProducts();
  }

  addCarrito(id: number){
    console.log('Productos '+id)
  }

  fetchProducts(){
    this.product.getAllProducts()
    .subscribe(products => {
      this.productos= products
    })
  }

}
