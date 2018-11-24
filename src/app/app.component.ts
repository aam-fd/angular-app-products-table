import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';

import { Observable, Subscription } from 'rxjs';

import { ProductsService } from './common/services/products.service';
import { IProduct } from './common/types/products';
import { getProductData } from './common/utils/utils';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  // subscription
  public products$: Observable<any[]>;
  private _subscriptionProducts: Subscription;

  // data
  public products: IProduct[] = [];

  // ui
  public selectedProducts: IProduct[] = [];

  public dataProducts: MatTableDataSource<IProduct>;
  public selection: SelectionModel<IProduct> = new SelectionModel<IProduct>(true, []);

  public selectedProductIndex: number;

  public displayedColumns: string[] = ['select', 'group', 'name', 'price'];

  @ViewChild(MatPaginator) paginator: MatPaginator;

  public constructor(
    private _productsService: ProductsService
  ) {
    this.products$ = this._productsService.getProducts();
  }

  public ngOnInit(): void {
    this._subscriptionProducts = this.products$.subscribe((products) => {
      products.forEach(productUnit => {
        productUnit.skus.forEach(product => {
          const productData: IProduct = getProductData(product, productUnit.group.name);
          this.products.push(productData);
        });
      });

      this.initTableData();
    });
  }

  public ngOnDestroy(): void {
    this._subscriptionProducts.unsubscribe();
  }

  public initTableData(): void {
    const notSelectedProducts: IProduct[] = this.products.filter((object: IProduct) => {
      return object.selected === false;
    });
    this.dataProducts = new MatTableDataSource<IProduct>(notSelectedProducts);
    this.dataProducts.paginator = this.paginator;
    this.selection = new SelectionModel<IProduct>(true, []);    
  }

  public addToBasket(): void {
    this.selectedProducts = this.selectedProducts.concat(this.selection.selected);
    this.selection.selected.forEach((object: IProduct) => {
      const selectedProductIndex: number = this.products.indexOf(object);
      if (selectedProductIndex !== -1) {
        object.selected = true;
      }
    });
    this.initTableData();
  }

  public clearProductBasket(): void {
    this.products.forEach((object: IProduct) => {
      if (object.selected) {
        object.selected = false;
      }
    });
    this.selectedProducts = [];
    this.initTableData();
  }

  // Whether the number of selected elements matches the total number of rows.
  public isAllSelected(): boolean {
    const numSelected: number = this.selection.selected.length;
    const numRows: number = this.dataProducts.paginator.pageSize;

    if (this.dataProducts.data.length < numRows) {
      return this.dataProducts.data.length === numSelected;
    }
    return numSelected === numRows;
  }
  
  // Selects all rows if they are not all selected; otherwise clear selection.
  public masterToggle(): void {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataProducts.data.forEach((row, index) => {
        this.selectProduct(row, index);
      });
  }

  public selectProduct(row, index): void {
    const pageIndex: number = this.dataProducts.paginator.pageIndex;
    const pageSize: number = this.dataProducts.paginator.pageSize;
    const startPoint: number = pageIndex * pageSize;
    const endPoint: number = (pageIndex + 1) * pageSize;

    if (index >= startPoint && index < endPoint) {
      this.selection.select(row)
    }
  }

}
