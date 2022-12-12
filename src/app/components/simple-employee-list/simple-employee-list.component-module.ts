import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { SimpleEmployeeListComponent } from './simple-employee-list.component';
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  imports: [MatCardModule, MatListModule, CommonModule, MatButtonModule],
  declarations: [SimpleEmployeeListComponent],
  providers: [],
  exports: [SimpleEmployeeListComponent]
})
export class SimpleEmployeeListComponentModule {
}
