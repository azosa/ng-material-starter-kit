import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import { Observable, Subject, combineLatest } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { ProductModel } from '../../models/product.model';
import { CategoriesService } from '../../services/categories.service';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-filtered-products-list',
  templateUrl: './filtered-products-list.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilteredProductsListComponent {
  readonly categories$: Observable<string[]> = this._categoriesService.getAll();



  readonly products$: Observable<ProductModel[]> = combineLatest([
 this._productsService.getAll(),
  this._activatedRoute.params
  ]).pipe(map(([products,params]:[ProductModel[],Params])=>{
    return products.filter((products:ProductModel)=>products.category===params['category']);
   }));


  constructor(private _categoriesService: CategoriesService, private _productsService: ProductsService, private _activatedRoute: ActivatedRoute) {
  }
}
