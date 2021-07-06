import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/core/models/product.model';
import { ProductsService } from 'src/app/core/services/products/products.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  productos: Producto[] = []
  displayedColumns: string[] = ['id', 'title', 'price', 'actions'];
  constructor( private productoService: ProductsService) { }

  ngOnInit(): void {
    this.fetchProducts()
  }

  fetchProducts(){
    this.productoService.getAllProducts()
    .subscribe(products => {
      this.productos= products
    } )
  }

  deleteProduct(id: string){
    this.productoService.deleteProduct(id)
    .subscribe( rta => {
      console.log(rta)
      this.fetchProducts();
    })
  }

}
