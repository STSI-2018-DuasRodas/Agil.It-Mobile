(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tabs-problems-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/home/maintenance-order/tabs/problems.page.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/maintenance-order/tabs/problems.page.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n</ion-header>\n\n<ion-content>\n  <ion-card>\n    <ion-card-header>\n      <ion-item-divider>\n        <ion-card-title color=\"secondary\">Problemas</ion-card-title>\n      </ion-item-divider>\n    </ion-card-header>\n\n    <ion-card-content>\n      <div>\n        <ion-label class=\"font-size-small font-style-bold\" color=\"primary\" position=\"stacked\">Causa</ion-label>\n        <ion-item lines=\"none\">\n          <ion-input class=\"font-size-small\" disabled>Descarga Elétrica</ion-input>\n        </ion-item>\n      </div>\n\n      <div class=\"m-top-2\">\n        <ion-label class=\"font-size-small font-style-bold\" color=\"primary\" position=\"stacked\">Informações da Casa</ion-label>\n        <ion-item>\n          <ion-input class=\"font-size-small\" disabled>Ao ligar o disjuntor da máquina deu a descarga.</ion-input>\n        </ion-item>\n      </div>\n\n      <div class=\"m-top-6\">\n        <ion-label class=\"font-size-small font-style-bold\" color=\"primary\" position=\"stacked\">Sintoma</ion-label>\n        <ion-item lines=\"none\">\n          <ion-input class=\"font-size-small\" disabled>Motor queimado</ion-input>\n        </ion-item>\n      </div>\n\n      <div class=\"m-top-2\">\n        <ion-label class=\"font-size-small font-style-bold\" color=\"primary\" position=\"stacked\">Informações do Sintoma</ion-label>\n        <ion-item>\n          <ion-input class=\"font-size-small\" disabled>Quando deu a descarga, saiu fumaça do motor da máquina.</ion-input>\n        </ion-item>\n      </div>\n\n      <div class=\"m-top-6\">\n        <ion-label class=\"font-size-small font-style-bold\" color=\"primary\" position=\"stacked\">Componente Defeituoso</ion-label>\n        <ion-item lines=\"none\">\n          <ion-input class=\"font-size-small\" disabled>Motor</ion-input>\n        </ion-item>\n      </div>\n    </ion-card-content>\n  </ion-card>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/home/maintenance-order/tabs/problems.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/home/maintenance-order/tabs/problems.module.ts ***!
  \****************************************************************/
/*! exports provided: ProblemsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProblemsPageModule", function() { return ProblemsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _problems_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./problems.page */ "./src/app/home/maintenance-order/tabs/problems.page.ts");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm2015/angular-fontawesome.js");








const routes = [
    {
        path: '',
        component: _problems_page__WEBPACK_IMPORTED_MODULE_6__["ProblemsPage"]
    }
];
let ProblemsPageModule = class ProblemsPageModule {
};
ProblemsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FontAwesomeModule"]
        ],
        declarations: [_problems_page__WEBPACK_IMPORTED_MODULE_6__["ProblemsPage"]]
    })
], ProblemsPageModule);



/***/ }),

/***/ "./src/app/home/maintenance-order/tabs/problems.page.scss":
/*!****************************************************************!*\
  !*** ./src/app/home/maintenance-order/tabs/problems.page.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvbWFpbnRlbmFuY2Utb3JkZXIvdGFicy9wcm9ibGVtcy5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/home/maintenance-order/tabs/problems.page.ts":
/*!**************************************************************!*\
  !*** ./src/app/home/maintenance-order/tabs/problems.page.ts ***!
  \**************************************************************/
/*! exports provided: ProblemsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProblemsPage", function() { return ProblemsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ProblemsPage = class ProblemsPage {
    constructor() {
    }
    ngOnInit() {
    }
};
ProblemsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-problems',
        template: __webpack_require__(/*! raw-loader!./problems.page.html */ "./node_modules/raw-loader/index.js!./src/app/home/maintenance-order/tabs/problems.page.html"),
        styles: [__webpack_require__(/*! ./problems.page.scss */ "./src/app/home/maintenance-order/tabs/problems.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ProblemsPage);



/***/ })

}]);
//# sourceMappingURL=tabs-problems-module-es2015.js.map