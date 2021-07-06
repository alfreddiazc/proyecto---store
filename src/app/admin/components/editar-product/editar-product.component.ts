import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductsService } from 'src/app/core/services/products/products.service';
import { Router,ActivatedRoute, Params } from '@angular/router';
import { myValidators } from 'src/app/utils/validators';

@Component({
  selector: 'app-editar-product',
  templateUrl: './editar-product.component.html',
  styleUrls: ['./editar-product.component.css']
})
export class EditarProductComponent implements OnInit {

  form: FormGroup
  id: string

  constructor( 
    private formBuilder: FormBuilder,
    private productoService: ProductsService,
    private router: Router,
    private activeRoute: ActivatedRoute
    ) { 
    this.buildForm()
  }

  ngOnInit(): void {
    this.activeRoute.params.subscribe( (params: Params) => {
      this.id = params.id;
      this.productoService.getProduct(this.id)
      .subscribe( product => {
        this.form.patchValue(product)
      })
    } )
  }

  saveProduct(event: Event){

    event.preventDefault()
    if(this.form.valid){
      const product = this.form.value
      this.productoService.updateProduct(this.id,product)
      .subscribe( newProduct => {
        this.router.navigate(['./admin/products'])
      })
    }
    
  }

  private buildForm(){
    this.form = this.formBuilder.group({
      title: ['',[Validators.required]],
      price: ['',[Validators.required, myValidators.isPriceValid]],
      image: [''],
      description: ['',[Validators.required]],
    })
  }

  get priceField (){
    return this.form.get('price')
  }

}
