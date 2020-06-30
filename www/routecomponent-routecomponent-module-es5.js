(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["routecomponent-routecomponent-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/routecomponent/routecomponent.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/routecomponent/routecomponent.page.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n</ion-header>\n\n<ion-content>\n  <ion-virtual-scroll [items]=\"items\">\n    <ion-item *virtualItem=\"let item\" class=\"p-right-6 p-left-6\" lines=\"full\">\n      <ion-row>\n        <ion-col size=\"12\">\n          <ion-label class=\"font-size-mini font-style-bold\">{{ item.name }}</ion-label>\n        </ion-col>\n        <ion-col size=\"1\"></ion-col>\n        <ion-col size=\"11\">\n          <ion-label color=\"secondary\" class=\"font-size-mini font-style-bold\">{{ item.description }}</ion-label>\n        </ion-col>\n      </ion-row>\n      <fa-icon class=\"color-secondary icon-mini-size\" icon=\"ban\" slot=\"end\"></fa-icon>\n    </ion-item>\n  </ion-virtual-scroll>\n  \n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button>\n      <ion-icon name=\"add\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/routecomponent/routecomponent.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/routecomponent/routecomponent.module.ts ***!
  \*********************************************************/
/*! exports provided: RouteComponentPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouteComponentPageModule", function() { return RouteComponentPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _routecomponent_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./routecomponent.page */ "./src/app/routecomponent/routecomponent.page.ts");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm5/angular-fontawesome.js");








var routes = [
    {
        path: '',
        component: _routecomponent_page__WEBPACK_IMPORTED_MODULE_6__["RouteComponentPage"]
    }
];
var RouteComponentPageModule = /** @class */ (function () {
    function RouteComponentPageModule() {
    }
    RouteComponentPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FontAwesomeModule"]
            ],
            declarations: [_routecomponent_page__WEBPACK_IMPORTED_MODULE_6__["RouteComponentPage"]]
        })
    ], RouteComponentPageModule);
    return RouteComponentPageModule;
}());



/***/ }),

/***/ "./src/app/routecomponent/routecomponent.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/routecomponent/routecomponent.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JvdXRlY29tcG9uZW50L3JvdXRlY29tcG9uZW50LnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/routecomponent/routecomponent.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/routecomponent/routecomponent.page.ts ***!
  \*******************************************************/
/*! exports provided: RouteComponentPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouteComponentPage", function() { return RouteComponentPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var RouteComponentPage = /** @class */ (function () {
    function RouteComponentPage() {
        this.items = [];
        this.loadComponents();
    }
    RouteComponentPage.prototype.ngOnInit = function () {
    };
    RouteComponentPage.prototype.loadComponents = function () {
        this.items.push({
            name: 'Alicate',
            description: 'Alicate de corte - 01 UN'
        }, {
            name: 'Alicate',
            description: 'Alicate universal - 01 UN'
        }, {
            name: 'Parafuso',
            description: 'Parafuso Fenda 6cm - 08 UN'
        }, {
            name: 'Parafuso',
            description: 'Parafuso Fenda 6cm - 08 UN'
        }, {
            name: 'Parafuso',
            description: 'Parafuso Fenda 6cm - 08 UN'
        });
    };
    RouteComponentPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-routecomponent',
            template: __webpack_require__(/*! raw-loader!./routecomponent.page.html */ "./node_modules/raw-loader/index.js!./src/app/routecomponent/routecomponent.page.html"),
            styles: [__webpack_require__(/*! ./routecomponent.page.scss */ "./src/app/routecomponent/routecomponent.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], RouteComponentPage);
    return RouteComponentPage;
}());



/***/ })

}]);
//# sourceMappingURL=routecomponent-routecomponent-module-es5.js.map