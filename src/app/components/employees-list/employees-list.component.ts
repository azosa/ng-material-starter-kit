import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import {BehaviorSubject, combineLatest, Observable, of, Subject} from 'rxjs';
import { EmployeeModel } from '../../models/employee.model';
import { EmployeesService } from '../../services/employees.service';
import {ProductModel} from "../../models/product.model";
import {map} from "rxjs/operators";
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class EmployeesListComponent {
  public age: Observable<string[]> = of([
    'All',
    '0-20',
    '21-30',
    '31-40',
    '41-50',
    '51-100',
  ]);
  public orders: Observable<string[]>=of(['asc','desc'])
  private _categorySubject: Subject<string> = new Subject<string>();
  public category$: Observable<string> = this._categorySubject.asObservable();
  private _orderSubject: BehaviorSubject<string> = new BehaviorSubject<string>('asc');
  public order$: Observable<string> = this._orderSubject.asObservable();
  readonly employees$: Observable<EmployeeModel[]> = combineLatest([
    this._employeesService.getAll(),
    this.category$,
    this.order$
  ]).pipe(
    map(([employees, category,order]: [EmployeeModel[], string,string]) => {
      if(category==='All'){
        return employees.sort((a,b)=>{
          if(a.employee_salary>b.employee_salary) return order==='asc' ? 1:-1;
          if(a.employee_salary<b.employee_salary) return order==='asc' ? -1:1;
          return 0;
        });
      }
      else{
        const minAge: string = category.split('-')[0];
        const maxAge: string = category.split('-')[1];
        return employees.filter(
          (employee: EmployeeModel) => employee.employee_age >= minAge && employee.employee_age <= maxAge
        ).sort((a,b)=>{
          if(a.employee_salary>b.employee_salary) return order==='asc' ? 1:-1;
          if(a.employee_salary<b.employee_salary) return order==='asc' ? -1:1;
          return 0;
        });

      }


    })
  );

  selectCategory(category:string): void {
    this._categorySubject.next(category);
  }



sort(order: string): void {
  this._orderSubject.next(order);
}
  constructor(private _employeesService: EmployeesService,private _activatedRoute: ActivatedRoute) {
  }

}
