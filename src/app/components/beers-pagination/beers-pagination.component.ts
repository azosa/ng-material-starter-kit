import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {BehaviorSubject, combineLatest, Observable, switchMap} from 'rxjs';
import {BeerModel} from '../../models/beer.model';
import {BeerService} from '../../services/beer.service';
import {PageEvent} from "@angular/material/paginator";

@Component({
  selector: 'app-beers-pagination',
  templateUrl: './beers-pagination.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BeersPaginationComponent {

  private _pagesSubject: BehaviorSubject<{ page: number, perPage: number }> = new BehaviorSubject<{ page: number, perPage: number }>({
    page: 1,
    perPage: 5
  });
  public pages$: Observable<{ page: number, perPage: number }> = this._pagesSubject.asObservable();
  readonly beers$: Observable<BeerModel[]> = this.pages$.pipe(
    switchMap( data => this._beerService.getPage(data.page, data.perPage))
  );

  onChange($event: PageEvent) {
    this._pagesSubject.next({page: $event.pageIndex + 1, perPage: $event.pageSize})

  }

  constructor(private _beerService: BeerService) {
  }
}
