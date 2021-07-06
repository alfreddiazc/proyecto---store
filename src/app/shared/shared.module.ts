import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ExponentialPipe } from './pipes/exponential/exponential.pipe';
import { HigtligthDirective } from './directives/highlight/highlight.directive';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MaterialModule } from '../material/material.module';
import { CartComponent } from './components/cart/cart.component'; 
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ExponentialPipe,
    HigtligthDirective,
    HeaderComponent,
    FooterComponent,
    CartComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    ExponentialPipe,
  ]
})
export class SharedModule { }
