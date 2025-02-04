import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FilteredProductsListComponent } from './components/filtered-products-list/filtered-products-list.component';
import { SortedProductsListComponent } from './components/sorted-products-list/sorted-products-list.component';
import { EmployeesListComponent } from './components/employees-list/employees-list.component';
import { BeersPaginationComponent } from './components/beers-pagination/beers-pagination.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { SimpleEmployeeListComponent } from './components/simple-employee-list/simple-employee-list.component';
import { FilteredProductsListComponentModule } from './components/filtered-products-list/filtered-products-list.component-module';
import { CategoriesServiceModule } from './services/categories.service-module';
import { ProductsServiceModule } from './services/products.service-module';
import { SortedProductsListComponentModule } from './components/sorted-products-list/sorted-products-list.component-module';
import { EmployeesListComponentModule } from './components/employees-list/employees-list.component-module';
import { EmployeesServiceModule } from './services/employees.service-module';
import { BeersPaginationComponentModule } from './components/beers-pagination/beers-pagination.component-module';
import { BeerServiceModule } from './services/beer.service-module';
import { ProductsListComponentModule } from './components/products-list/products-list.component-module';
import { SimpleEmployeeListComponentModule } from './components/simple-employee-list/simple-employee-list.component-module';

@NgModule({
  imports: [RouterModule.forRoot([{ path: 'products/:category', component: FilteredProductsListComponent }, { path: 'products', component: FilteredProductsListComponent }, { path: 'sorted-products', component: SortedProductsListComponent }, { path: 'employees-list', component: EmployeesListComponent }, { path: 'beers-with-pagination', component: BeersPaginationComponent }, { path: 'refresh-products', component: ProductsListComponent }, { path: 'refresh-employees', component: SimpleEmployeeListComponent }]), FilteredProductsListComponentModule, CategoriesServiceModule, ProductsServiceModule, SortedProductsListComponentModule, EmployeesListComponentModule, EmployeesServiceModule, BeersPaginationComponentModule, BeerServiceModule, ProductsListComponentModule, SimpleEmployeeListComponentModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
