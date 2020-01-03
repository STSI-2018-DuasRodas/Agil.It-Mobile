(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tabs-assignature-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/home/maintenance-order/tabs/assignature.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/maintenance-order/tabs/assignature.page.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n\n</ion-header>\n\n<ion-content>\n  <ion-card>\n    <ion-card-header>\n    \n    </ion-card-header>\n    <ion-card-content>\n      <ion-item>\n        <ion-label color=\"secondary\" position=\"floating\">Digite sua senha:</ion-label>\n        <ion-input type=\"password\"></ion-input>\n      </ion-item>\n      <ion-item lines=\"none\">\n        <ion-checkbox slot=\"start\" [(ngModel)]=\"assignatureVerificationChecked\"></ion-checkbox>\n        <ion-label>Confirmar Assinatura?</ion-label>\n      </ion-item>\n      <div class=\"align-center p-top-6\">\n        <agilit-button (click)=\"assineOm()\" [disabled]=\"!assignatureVerificationChecked\">Assinar</agilit-button>\n      </div>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/home/maintenance-order/tabs/assignature.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/home/maintenance-order/tabs/assignature.module.ts ***!
  \*******************************************************************/
/*! exports provided: AssignaturePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssignaturePageModule", function() { return AssignaturePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _assignature_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assignature.page */ "./src/app/home/maintenance-order/tabs/assignature.page.ts");
/* harmony import */ var src_app_utils_customComponents_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/utils/customComponents.module */ "./src/app/utils/customComponents.module.ts");








var routes = [
    {
        path: '',
        component: _assignature_page__WEBPACK_IMPORTED_MODULE_6__["AssignaturePage"]
    }
];
var AssignaturePageModule = /** @class */ (function () {
    function AssignaturePageModule() {
    }
    AssignaturePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                src_app_utils_customComponents_module__WEBPACK_IMPORTED_MODULE_7__["CustomComponentsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_assignature_page__WEBPACK_IMPORTED_MODULE_6__["AssignaturePage"]]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AssignaturePageModule);
    return AssignaturePageModule;
}());



/***/ }),

/***/ "./src/app/home/maintenance-order/tabs/assignature.page.scss":
/*!*******************************************************************!*\
  !*** ./src/app/home/maintenance-order/tabs/assignature.page.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvbWFpbnRlbmFuY2Utb3JkZXIvdGFicy9hc3NpZ25hdHVyZS5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/home/maintenance-order/tabs/assignature.page.ts":
/*!*****************************************************************!*\
  !*** ./src/app/home/maintenance-order/tabs/assignature.page.ts ***!
  \*****************************************************************/
/*! exports provided: AssignaturePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssignaturePage", function() { return AssignaturePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AssignaturePage = /** @class */ (function () {
    function AssignaturePage() {
        this.assignatureVerificationChecked = false;
    }
    AssignaturePage.prototype.ngOnInit = function () {
    };
    AssignaturePage.prototype.assineOm = function () {
        console.log(this.assignatureVerificationChecked);
    };
    AssignaturePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-assignature',
            template: __webpack_require__(/*! raw-loader!./assignature.page.html */ "./node_modules/raw-loader/index.js!./src/app/home/maintenance-order/tabs/assignature.page.html"),
            styles: [__webpack_require__(/*! ./assignature.page.scss */ "./src/app/home/maintenance-order/tabs/assignature.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AssignaturePage);
    return AssignaturePage;
}());



/***/ })

}]);
//# sourceMappingURL=tabs-assignature-module-es5.js.map