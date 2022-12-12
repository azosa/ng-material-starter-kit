import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { EmployeeModel } from '../../models/employee.model';
import { EmployeesService } from '../../services/employees.service';

@Component({
  selector: 'app-simple-employee-list',
  templateUrl: './simple-employee-list.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SimpleEmployeeListComponent {
  readonly list$: Observable<EmployeeModel[]> = this._employeesService.getAll();
  private _refreshSubject: BehaviorSubject<void> = new BehaviorSubject<void>(void 0);
  public refresh$: Observable<void> = this._refreshSubject.asObservable();
  readonly refreshedList$: Observable<EmployeeModel[]> = this.refresh$.pipe(
    switchMap(data => this._employeesService.getAll()));

  constructor(private _employeesService: EmployeesService) {
  }

  remove(id: string): void {
    this._employeesService.delete(id).subscribe(()=>this._refreshSubject.next());
  }
}
