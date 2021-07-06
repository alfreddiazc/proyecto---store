import { Component, OnInit, Input,Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Producto } from '../../../core/models/product.model';

import { ProductsService } from '../../../core/services/products/products.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  
  @Input() producto: Producto; // Equivalente a prop, dónde le vamos a pasar la data al componente
  @Output() addCarts: EventEmitter<any>= new EventEmitter();
    
  product: Producto

  constructor( private route: ActivatedRoute, private productService: ProductsService) {
   
   }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const id = params.id
      this.fetchPrduct(id);
      
    })
  }
  fetchPrduct(id: string){
    this.productService.getProduct(id)
    .subscribe( producto => {
      this.product= producto
    } )
  }
  addCart(){
    console.log('se agrego al carrito')
    this.addCarts.emit(this.producto.id)
}
createProduct(){
  const newProduct:Producto ={
    id: '23',
    title: 'Nuevo product 2',
    image: 'assets/images/banner-1.jpg',
    price: 25000,
    description: 'Esta es la desripcion del producto nuevo 2'
    
  }
   this.productService.createProduct(newProduct)
    .subscribe( producto => {
      console.log(producto)
    } )

}
updateProduct(){
  const updateProduct: Partial<Producto> ={
    price: 10000,
    description: 'Esta es la desripcion de actualizacion del producto nuevo 2'
    
  }
  this.productService.updateProduct('2',updateProduct)
    .subscribe( producto => {
      console.log(producto)
    } )
}
deleteProduct(){
  this.productService.deleteProduct('23')
  .subscribe( rta => {
    console.log(rta)
  })
}

}
