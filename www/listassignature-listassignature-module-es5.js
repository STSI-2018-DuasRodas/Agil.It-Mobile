(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["listassignature-listassignature-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/listassignature/listassignature.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/listassignature/listassignature.page.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n</ion-header>\n\n<ion-content>\n  <ion-card>\n    <ion-card-header>\n    \n    </ion-card-header>\n    <ion-card-content>\n      <ion-item>\n        <ion-label color=\"secondary\" position=\"floating\">Digite sua senha:</ion-label>\n        <ion-input type=\"password\" [(ngModel)]=\"assignaturePassword\"></ion-input>\n      </ion-item>\n      <ion-item lines=\"none\">\n        <ion-checkbox slot=\"start\" [(ngModel)]=\"assignatureVerificationChecked\"></ion-checkbox>\n        <ion-label>Confirmar Assinatura?</ion-label>\n      </ion-item>\n      <div class=\"align-center p-top-6\">\n        <agilit-button (click)=\"assineOm()\" [disabled]=\"!assignatureVerificationChecked\">Assinar</agilit-button>\n      </div>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/listassignature/listassignature.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/listassignature/listassignature.module.ts ***!
  \***********************************************************/
/*! exports provided: ListassignaturePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListassignaturePageModule", function() { return ListassignaturePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _listassignature_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./listassignature.page */ "./src/app/listassignature/listassignature.page.ts");
/* harmony import */ var _utils_customComponents_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/customComponents.module */ "./src/app/utils/customComponents.module.ts");








var routes = [
    {
        path: '',
        component: _listassignature_page__WEBPACK_IMPORTED_MODULE_6__["ListAssignaturePage"]
    }
];
var ListassignaturePageModule = /** @class */ (function () {
    function ListassignaturePageModule() {
    }
    ListassignaturePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _utils_customComponents_module__WEBPACK_IMPORTED_MODULE_7__["CustomComponentsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_listassignature_page__WEBPACK_IMPORTED_MODULE_6__["ListAssignaturePage"]]
        })
    ], ListassignaturePageModule);
    return ListassignaturePageModule;
}());



/***/ }),

/***/ "./src/app/listassignature/listassignature.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/listassignature/listassignature.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xpc3Rhc3NpZ25hdHVyZS9saXN0YXNzaWduYXR1cmUucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/listassignature/listassignature.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/listassignature/listassignature.page.ts ***!
  \*********************************************************/
/*! exports provided: ListAssignaturePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListAssignaturePage", function() { return ListAssignaturePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _eventemitter_eventemitter_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../eventemitter/eventemitter.service */ "./src/app/eventemitter/eventemitter.service.ts");



var ListAssignaturePage = /** @class */ (function () {
    function ListAssignaturePage() {
        this.order = undefined;
        this.assignaturePassword = '';
        this.assignatureVerificationChecked = false;
    }
    ListAssignaturePage.prototype.ngOnInit = function () {
        var _this = this;
        _eventemitter_eventemitter_service__WEBPACK_IMPORTED_MODULE_2__["EventEmitterService"].get('listOrderData').subscribe(function (data) {
            _this.order = data;
            console.log(_this.order);
        });
    };
    ListAssignaturePage.prototype.assineOm = function () {
        if (this.assignaturePassword != window.localStorage.getItem("password")) {
            return;
        }
    };
    ListAssignaturePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-listassignature',
            template: __webpack_require__(/*! raw-loader!./listassignature.page.html */ "./node_modules/raw-loader/index.js!./src/app/listassignature/listassignature.page.html"),
            styles: [__webpack_require__(/*! ./listassignature.page.scss */ "./src/app/listassignature/listassignature.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ListAssignaturePage);
    return ListAssignaturePage;
}());



/***/ })

}]);
//# sourceMappingURL=listassignature-listassignature-module-es5.js.map