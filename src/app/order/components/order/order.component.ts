import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from 'src/app/core/models/product.model';
import { CartService } from 'src/app/core/services/cart/cart.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  products$: Observable<Producto[]>;

  constructor(
    private cartService: CartService
  ) {
    this.products$ = this.cartService.cart$
   }

  ngOnInit(): void {
  }

}
