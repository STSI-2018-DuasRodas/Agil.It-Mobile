(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tabs-components-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/home/maintenance-order/tabs/components.page.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/maintenance-order/tabs/components.page.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n</ion-header>\n\n<ion-content>\n  <ion-virtual-scroll [items]=\"items\">\n    <ion-item *virtualItem=\"let item\" class=\"p-right-6 p-left-6\" lines=\"full\">\n      <ion-row>\n        <ion-col size=\"12\">\n          <ion-label class=\"font-style-bold\">{{ item.name }}</ion-label>\n        </ion-col>\n        <ion-col size=\"1\"></ion-col>\n        <ion-col size=\"10\">\n          <ion-label class=\"font-size-mini\">{{ item.description }}</ion-label>\n        </ion-col>\n        <ion-col size=\"1\">\n          <fa-icon class=\"color-secondary icon-default-size\" icon=\"ban\"></fa-icon>\n        </ion-col>\n      </ion-row>\n    </ion-item>\n  </ion-virtual-scroll>\n  \n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button>\n      <ion-icon name=\"add\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/home/maintenance-order/tabs/components.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/home/maintenance-order/tabs/components.module.ts ***!
  \******************************************************************/
/*! exports provided: ComponentsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsPageModule", function() { return ComponentsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _components_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components.page */ "./src/app/home/maintenance-order/tabs/components.page.ts");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm5/angular-fontawesome.js");








var routes = [
    {
        path: '',
        component: _components_page__WEBPACK_IMPORTED_MODULE_6__["ComponentsPage"]
    }
];
var ComponentsPageModule = /** @class */ (function () {
    function ComponentsPageModule() {
    }
    ComponentsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FontAwesomeModule"]
            ],
            declarations: [_components_page__WEBPACK_IMPORTED_MODULE_6__["ComponentsPage"]]
        })
    ], ComponentsPageModule);
    return ComponentsPageModule;
}());



/***/ }),

/***/ "./src/app/home/maintenance-order/tabs/components.page.scss":
/*!******************************************************************!*\
  !*** ./src/app/home/maintenance-order/tabs/components.page.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvbWFpbnRlbmFuY2Utb3JkZXIvdGFicy9jb21wb25lbnRzLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/home/maintenance-order/tabs/components.page.ts":
/*!****************************************************************!*\
  !*** ./src/app/home/maintenance-order/tabs/components.page.ts ***!
  \****************************************************************/
/*! exports provided: ComponentsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsPage", function() { return ComponentsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ComponentsPage = /** @class */ (function () {
    function ComponentsPage() {
        this.items = [];
        this.loadComponents();
    }
    ComponentsPage.prototype.ngOnInit = function () {
    };
    ComponentsPage.prototype.loadComponents = function () {
        for (var i = 0; i < 50; i++) {
            this.items.push({
                name: 'Alicate ' + ' N' + i,
                description: 'Alicate de corte - 01 UN'
            });
        }
    };
    ComponentsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-components',
            template: __webpack_require__(/*! raw-loader!./components.page.html */ "./node_modules/raw-loader/index.js!./src/app/home/maintenance-order/tabs/components.page.html"),
            styles: [__webpack_require__(/*! ./components.page.scss */ "./src/app/home/maintenance-order/tabs/components.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ComponentsPage);
    return ComponentsPage;
}());



/***/ })

}]);
//# sourceMappingURL=tabs-components-module-es5.js.map