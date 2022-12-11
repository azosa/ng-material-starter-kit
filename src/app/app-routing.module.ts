import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FilteredProductsListComponent } from './components/filtered-products-list/filtered-products-list.component';
import { SortedProductsListComponent } from './components/sorted-products-list/sorted-products-list.component';
import { EmployeesListComponent } from './components/employees-list/employees-list.component';
import { FilteredProductsListComponentModule } from './components/filtered-products-list/filtered-products-list.component-module';
import { CategoriesServiceModule } from './services/categories.service-module';
import { ProductsServiceModule } from './services/products.service-module';
import { SortedProductsListComponentModule } from './components/sorted-products-list/sorted-products-list.component-module';
import { EmployeesListComponentModule } from './components/employees-list/employees-list.component-module';
import { EmployeesServiceModule } from './services/employees.service-module';

@NgModule({
  imports: [RouterModule.forRoot([{ path: 'products/:category', component: FilteredProductsListComponent }, { path: 'products', component: FilteredProductsListComponent }, { path: 'sorted-products', component: SortedProductsListComponent }, { path: 'employees-list', component: EmployeesListComponent }]), FilteredProductsListComponentModule, CategoriesServiceModule, ProductsServiceModule, SortedProductsListComponentModule, EmployeesListComponentModule, EmployeesServiceModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
