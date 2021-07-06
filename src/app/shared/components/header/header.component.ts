import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CartService } from 'src/app/core/services/cart/cart.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  total$: Observable<number>

  constructor( private cartService: CartService) { 
    
    //Sin subcripcion y total ahora es un observable
    this.total$ = this.cartService.cart$
    .pipe(
      map( products => products.length)
    )

    /* //Con subcripcion a un observable
    this.cartService.cart$
    .pipe(
      map( products => products.length)
    )
    .subscribe( total => {
      this.total = total
    })*/
  } 

  ngOnInit(): void {
  }

}
