(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".page-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin: 25px 0;\n}\n\n.page-header {\n  box-sizing: border-box;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-left: 25px;\n}\n\n.icons-container {\n  padding-right: 20px;\n}\n\n.clear-button {\n  font-size: 40px;\n  color: red;\n}\n\n.clear-button:hover {\n  cursor: pointer;\n}\n\n.clear-button_disabled {\n  color: rgba(0, 0, 0, 0.05);\n}\n\n.clear-button_disabled:hover {\n  cursor: default;\n}\n\n.product-basket {\n  margin-right: 20px;\n  font-size: 40px;\n  color: green;\n}\n\n.page-header,\ntable,\n.table-actions,\n.preloader-container {\n  width: 70%;\n  min-width: 550px;\n}\n\n.table-header {\n  background-color: rgba(0, 0, 0, 0.05);\n}\n\n.table-header_checkbox {\n  width: 39px;\n}\n\n.table-header_category {\n  width: 120px;\n}\n\n.table-header_price {\n  width: 60px;\n}\n\n.table-row:hover {\n  background-color: rgba(0, 0, 0, 0.03);\n}\n\n.table-actions {\n  position: relative;\n  height: 56px;\n}\n\n.preloader-container {\n  box-sizing: border-box;\n  padding: 25px;\n  background-color: #fff;\n  color: rgba(0,0,0,.54);\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 12px;\n}\n\n.add-button {\n  position: absolute;\n  top: 50%;\n  margin-top: -18px;\n  margin-left: 25px;\n}\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"page-container\">\n\n  <header class=\"page-header\">\n    <h2 mat-dialog-title>Каталог товаров</h2>\n    <div class=\"icons-container\">\n      <mat-icon [matBadge]=\"selectedProducts.length\"\n                matBadgeColor=\"accent\" \n                matBadgePosition=\"after\" \n                class=\"product-basket\">shopping_cart</mat-icon>\n\n      <mat-icon class=\"clear-button\"\n                (click)=\"selectedProducts.length !== 0 && clearProductBasket()\"\n                [ngClass]=\"{ 'clear-button_disabled': selectedProducts.length === 0 }\"\n                title=\"Очистить корзину\">highlight_off</mat-icon>\n    </div>\n  </header>\n\n  <table mat-table [dataSource]=\"dataProducts\">\n    <ng-container matColumnDef=\"select\">\n      <th mat-header-cell class=\"table-header table-header_checkbox\" *matHeaderCellDef>\n        <mat-checkbox (change)=\"$event ? masterToggle() : null\"\n                      [checked]=\"selection.hasValue() && isAllSelected()\"\n                      [indeterminate]=\"selection.hasValue() && !isAllSelected()\">\n        </mat-checkbox>\n      </th>\n      <td mat-cell *matCellDef=\"let row\">\n        <mat-checkbox (click)=\"$event.stopPropagation()\"\n                      (change)=\"$event ? selection.toggle(row) : null\"\n                      [checked]=\"selection.isSelected(row)\">\n        </mat-checkbox>\n      </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"group\">\n      <th mat-header-cell class=\"table-header table-header_category\" *matHeaderCellDef> Категория </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.groupName}} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"name\">\n      <th mat-header-cell class=\"table-header\" *matHeaderCellDef> Товар </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"price\">\n      <th mat-header-cell class=\"table-header table-header_price\" *matHeaderCellDef> Цена </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.price}} </td>\n    </ng-container>\n\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n    <div *ngIf=\"products && products.length > 0\">\n      <tr mat-row class=\"table-row\" *matRowDef=\"let row; columns: displayedColumns;\"\n          (click)=\"selection.toggle(row)\">\n      </tr>\n    </div>\n  </table>\n\n  <div *ngIf=\"!products || !products.length\" class=\"preloader-container\">Data loading...\n    <mat-progress-bar mode=\"indeterminate\">loading...</mat-progress-bar>\n  </div>\n\n  <div class=\"table-actions\">\n    <button mat-raised-button \n            class=\"add-button\"\n            color=\"accent\" \n            type=\"button\" \n            (click)=\"addToBasket()\"\n            [disabled]=\"!selection.hasValue()\">В корзину</button>\n\n    <mat-paginator [pageSizeOptions]=\"[5, 10, 25, 50]\"></mat-paginator>\n  </div>\n\n</section>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");
/* harmony import */ var _common_services_products_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common/services/products.service */ "./src/app/common/services/products.service.ts");
/* harmony import */ var _common_utils_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./common/utils/utils */ "./src/app/common/utils/utils.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AppComponent = /** @class */ (function () {
    function AppComponent(_productsService) {
        this._productsService = _productsService;
        // data
        this.products = [];
        // ui
        this.selectedProducts = [];
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__["SelectionModel"](true, []);
        this.displayedColumns = ['select', 'group', 'name', 'price'];
        this.products$ = this._productsService.getProducts();
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._subscriptionProducts = this.products$.subscribe(function (products) {
            products.forEach(function (productUnit) {
                productUnit.skus.forEach(function (product) {
                    var productData = Object(_common_utils_utils__WEBPACK_IMPORTED_MODULE_4__["getProductData"])(product, productUnit.group.name);
                    _this.products.push(productData);
                });
            });
            _this.initTableData();
        });
    };
    AppComponent.prototype.ngOnDestroy = function () {
        this._subscriptionProducts.unsubscribe();
    };
    AppComponent.prototype.initTableData = function () {
        var notSelectedProducts = this.products.filter(function (object) {
            return object.selected === false;
        });
        this.dataProducts = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](notSelectedProducts);
        this.dataProducts.paginator = this.paginator;
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__["SelectionModel"](true, []);
    };
    AppComponent.prototype.addToBasket = function () {
        var _this = this;
        this.selectedProducts = this.selectedProducts.concat(this.selection.selected);
        this.selection.selected.forEach(function (object) {
            var selectedProductIndex = _this.products.indexOf(object);
            if (selectedProductIndex !== -1) {
                object.selected = true;
            }
        });
        this.initTableData();
    };
    AppComponent.prototype.clearProductBasket = function () {
        this.products.forEach(function (object) {
            if (object.selected) {
                object.selected = false;
            }
        });
        this.selectedProducts = [];
        this.initTableData();
    };
    // Whether the number of selected elements matches the total number of rows.
    AppComponent.prototype.isAllSelected = function () {
        var numSelected = this.selection.selected.length;
        var numRows = this.dataProducts.paginator.pageSize;
        if (this.dataProducts.data.length < numRows) {
            return this.dataProducts.data.length === numSelected;
        }
        return numSelected === numRows;
    };
    // Selects all rows if they are not all selected; otherwise clear selection.
    AppComponent.prototype.masterToggle = function () {
        var _this = this;
        this.isAllSelected() ?
            this.selection.clear() :
            this.dataProducts.data.forEach(function (row, index) {
                _this.selectProduct(row, index);
            });
    };
    AppComponent.prototype.selectProduct = function (row, index) {
        var pageIndex = this.dataProducts.paginator.pageIndex;
        var pageSize = this.dataProducts.paginator.pageSize;
        var startPoint = pageIndex * pageSize;
        var endPoint = (pageIndex + 1) * pageSize;
        if (index >= startPoint && index < endPoint) {
            this.selection.select(row);
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"])
    ], AppComponent.prototype, "paginator", void 0);
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_common_services_products_service__WEBPACK_IMPORTED_MODULE_3__["ProductsService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _common_services_products_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./common/services/products.service */ "./src/app/common/services/products.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatBadgeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatProgressBarModule"],
            ],
            providers: [
                _common_services_products_service__WEBPACK_IMPORTED_MODULE_6__["ProductsService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/common/services/products.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/common/services/products.service.ts ***!
  \*****************************************************/
/*! exports provided: ProductsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsService", function() { return ProductsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProductsService = /** @class */ (function () {
    function ProductsService(_http) {
        this._http = _http;
    }
    ProductsService.prototype.getProducts = function () {
        return this._http.get('https://ssdev.superagent.ru/TestApp/Values/GetWithParent');
    };
    ProductsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ProductsService);
    return ProductsService;
}());



/***/ }),

/***/ "./src/app/common/utils/utils.ts":
/*!***************************************!*\
  !*** ./src/app/common/utils/utils.ts ***!
  \***************************************/
/*! exports provided: getProductData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProductData", function() { return getProductData; });
var getProductData = function (product, productGroupName) {
    return {
        id: product.id,
        name: product.name,
        price: product.price,
        groupName: productGroupName,
        selected: false,
    };
};


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/bill/Documents/Расчетные листки/projects/angular-app-products-table/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map