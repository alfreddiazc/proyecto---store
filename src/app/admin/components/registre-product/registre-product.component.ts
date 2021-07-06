import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductsService } from 'src/app/core/services/products/products.service';
import { Router } from '@angular/router';
import { myValidators } from 'src/app/utils/validators';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-registre-product',
  templateUrl: './registre-product.component.html',
  styleUrls: ['./registre-product.component.css']
})
export class RegistreProductComponent implements OnInit {

  form: FormGroup
  image$: Observable<any>

  constructor( 
    private formBuilder: FormBuilder,
    private productoService: ProductsService,
    private router: Router,
    private storage: AngularFireStorage
    ) { 
    this.buildForm()
  }

  ngOnInit(): void {
  }

  saveProduct(event: Event){

    event.preventDefault()
    if(this.form.valid){
      const product = this.form.value
      this.productoService.createProduct(product)
      .subscribe( newProduct => {
        this.router.navigate(['./admin/products'])
      })
    }
    
  }
  uploadFile(event){
    const file = event.target.files[0]
    const dir = 'images'
    const fileRef = this.storage.ref(dir)
    const task= this.storage.upload(dir,file)

    task.snapshotChanges()
    .pipe(
      finalize(()=> {
        this.image$ =  fileRef.getDownloadURL()
        this.image$.subscribe(url => {
          this.form.get('image').setValue(url);
        })
      })
    )
    .subscribe()


  }

  private buildForm(){
    this.form = this.formBuilder.group({
      id: ['',[Validators.required]],
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
