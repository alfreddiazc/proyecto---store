import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NavComponent } from './components/nav/nav.component';
import { TableComponent } from './components/table/table.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { RegistreProductComponent } from './components/registre-product/registre-product.component';
import { EditarProductComponent } from './components/editar-product/editar-product.component';

@NgModule({
  declarations: [ProductFormComponent, NavComponent, TableComponent, DashboardComponent, ProductsListComponent, RegistreProductComponent, EditarProductComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
