import { NgModule } from '@angular/core';
import { ProductsListComponent } from './products-list.component';
import {MatListModule} from "@angular/material/list";
import {AsyncPipe, NgForOf} from "@angular/common";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";

@NgModule({
  imports: [
    MatListModule,
    NgForOf,
    AsyncPipe,
    MatButtonModule,
    MatCardModule
  ],
  declarations: [ProductsListComponent],
  providers: [],
  exports: [ProductsListComponent]
})
export class ProductsListComponentModule {
}
