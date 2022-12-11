import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { EmployeesListComponent } from './employees-list.component';
import {MatCardModule} from "@angular/material/card";
import {RouterLink} from "@angular/router";
import {FlexModule} from "@angular/flex-layout/flex";

@NgModule({
    imports: [MatListModule, CommonModule,  FlexModule,MatCardModule, RouterLink],
  declarations: [EmployeesListComponent],
  providers: [],
  exports: [EmployeesListComponent]
})
export class EmployeesListComponentModule {
}
