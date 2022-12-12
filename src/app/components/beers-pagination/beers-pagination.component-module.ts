import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { BeersPaginationComponent } from './beers-pagination.component';
import {MatPaginatorModule} from "@angular/material/paginator";

@NgModule({
  imports: [MatCardModule, MatListModule, CommonModule, MatPaginatorModule],
  declarations: [BeersPaginationComponent],
  providers: [],
  exports: [BeersPaginationComponent]
})
export class BeersPaginationComponentModule {
}
