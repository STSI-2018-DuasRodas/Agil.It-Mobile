(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tabs-operations-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/home/maintenance-order/tabs/operations.page.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/maintenance-order/tabs/operations.page.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n</ion-header>\n\n<ion-content>\n  <ion-virtual-scroll [items]=\"items\">\n    <ion-item *virtualItem=\"let item\" class=\"p-right-6 p-left-6\" lines=\"full\">\n      <ion-label color=\"secondary\" class=\"font-style-bold\">{{ item.name }}</ion-label>\n      <fa-icon class=\"color-primary icon-mini-size\" icon=\"pencil-alt\" slot=\"end\"></fa-icon>\n      <fa-icon class=\"color-secondary icon-mini-size\" icon=\"trash-alt\" slot=\"end\"></fa-icon>\n    </ion-item>\n  </ion-virtual-scroll>\n  \n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button>\n      <ion-icon name=\"add\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/home/maintenance-order/tabs/operations.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/home/maintenance-order/tabs/operations.module.ts ***!
  \******************************************************************/
/*! exports provided: OperationsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperationsPageModule", function() { return OperationsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _operations_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./operations.page */ "./src/app/home/maintenance-order/tabs/operations.page.ts");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm5/angular-fontawesome.js");








var routes = [
    {
        path: '',
        component: _operations_page__WEBPACK_IMPORTED_MODULE_6__["OperationsPage"]
    }
];
var OperationsPageModule = /** @class */ (function () {
    function OperationsPageModule() {
    }
    OperationsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FontAwesomeModule"]
            ],
            declarations: [_operations_page__WEBPACK_IMPORTED_MODULE_6__["OperationsPage"]]
        })
    ], OperationsPageModule);
    return OperationsPageModule;
}());



/***/ }),

/***/ "./src/app/home/maintenance-order/tabs/operations.page.scss":
/*!******************************************************************!*\
  !*** ./src/app/home/maintenance-order/tabs/operations.page.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvbWFpbnRlbmFuY2Utb3JkZXIvdGFicy9vcGVyYXRpb25zLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/home/maintenance-order/tabs/operations.page.ts":
/*!****************************************************************!*\
  !*** ./src/app/home/maintenance-order/tabs/operations.page.ts ***!
  \****************************************************************/
/*! exports provided: OperationsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperationsPage", function() { return OperationsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var OperationsPage = /** @class */ (function () {
    function OperationsPage() {
        this.items = [];
        this.loadOperations();
    }
    OperationsPage.prototype.ngOnInit = function () {
    };
    OperationsPage.prototype.loadOperations = function () {
        this.items.push({
            name: 'Efetuando a troca do inversor'
        }, {
            name: 'Ajustado folga no motor'
        }, {
            name: 'Isolado fiação elétrica'
        });
    };
    OperationsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-operations',
            template: __webpack_require__(/*! raw-loader!./operations.page.html */ "./node_modules/raw-loader/index.js!./src/app/home/maintenance-order/tabs/operations.page.html"),
            styles: [__webpack_require__(/*! ./operations.page.scss */ "./src/app/home/maintenance-order/tabs/operations.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], OperationsPage);
    return OperationsPage;
}());



/***/ })

}]);
//# sourceMappingURL=tabs-operations-module-es5.js.map