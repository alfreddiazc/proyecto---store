import { 
    Component,
    Input,
    Output,
    EventEmitter,
    OnInit 
} from '@angular/core'

import { Producto } from 'src/app/core/models/product.model';
import { CartService } from 'src/app/core/services/cart/cart.service';
@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
    
    @Input() producto: Producto; // Equivalente a prop, dónde le vamos a pasar la data al componente
    @Output() addCarts: EventEmitter<any>= new EventEmitter();
    
    constructor( private cartService: CartService){
        console.log('1. constructor')
    }

    addCart(){
       console.log('se agrego al carrito')
       this.cartService.addCart(this.producto)
       //this.addCarts.emit(this.producto.id)
   }
   
   ngOnInit(){
       console.log('3. ngOnInit')
   }

}