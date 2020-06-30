(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["defaultassignature-defaultassignature-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/defaultassignature/defaultassignature.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/defaultassignature/defaultassignature.page.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n\n</ion-header>\n\n<ion-content>\n  <ion-card>\n    <ion-card-header>\n    \n    </ion-card-header>\n    <ion-card-content>\n      <ion-item>\n        <ion-label color=\"secondary\" position=\"floating\">Digite sua senha:</ion-label>\n        <ion-input type=\"password\" [(ngModel)]=\"assignaturePassword\"></ion-input>\n      </ion-item>\n      <ion-item lines=\"none\">\n        <ion-checkbox slot=\"start\" [(ngModel)]=\"assignatureVerificationChecked\"></ion-checkbox>\n        <ion-label>Confirmar Assinatura?</ion-label>\n      </ion-item>\n      <div class=\"align-center p-top-6\">\n        <agilit-button (click)=\"assineOm()\" [disabled]=\"!assignatureVerificationChecked\">Assinar</agilit-button>\n      </div>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/defaultassignature/defaultassignature.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/defaultassignature/defaultassignature.module.ts ***!
  \*****************************************************************/
/*! exports provided: DefaultAssignaturePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultAssignaturePageModule", function() { return DefaultAssignaturePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _defaultassignature_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./defaultassignature.page */ "./src/app/defaultassignature/defaultassignature.page.ts");
/* harmony import */ var src_app_utils_customComponents_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/utils/customComponents.module */ "./src/app/utils/customComponents.module.ts");








var routes = [
    {
        path: '',
        component: _defaultassignature_page__WEBPACK_IMPORTED_MODULE_6__["DefaultAssignaturePage"]
    }
];
var DefaultAssignaturePageModule = /** @class */ (function () {
    function DefaultAssignaturePageModule() {
    }
    DefaultAssignaturePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                src_app_utils_customComponents_module__WEBPACK_IMPORTED_MODULE_7__["CustomComponentsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_defaultassignature_page__WEBPACK_IMPORTED_MODULE_6__["DefaultAssignaturePage"]]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DefaultAssignaturePageModule);
    return DefaultAssignaturePageModule;
}());



/***/ }),

/***/ "./src/app/defaultassignature/defaultassignature.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/defaultassignature/defaultassignature.page.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlZmF1bHRhc3NpZ25hdHVyZS9kZWZhdWx0YXNzaWduYXR1cmUucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/defaultassignature/defaultassignature.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/defaultassignature/defaultassignature.page.ts ***!
  \***************************************************************/
/*! exports provided: DefaultAssignaturePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultAssignaturePage", function() { return DefaultAssignaturePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _eventemitter_eventemitter_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../eventemitter/eventemitter.service */ "./src/app/eventemitter/eventemitter.service.ts");



var DefaultAssignaturePage = /** @class */ (function () {
    function DefaultAssignaturePage() {
        this.order = undefined;
        this.assignaturePassword = '';
        this.assignatureVerificationChecked = false;
    }
    DefaultAssignaturePage.prototype.ngOnInit = function () {
        var _this = this;
        this.subscribe = _eventemitter_eventemitter_service__WEBPACK_IMPORTED_MODULE_2__["EventEmitterService"].get('defaultOrderData').subscribe(function (data) {
            _this.order = data;
        });
    };
    DefaultAssignaturePage.prototype.ngOnDestroy = function () {
        this.subscribe.unsubscribe();
    };
    DefaultAssignaturePage.prototype.assineOm = function () {
        if (this.assignaturePassword != window.localStorage.getItem("password")) {
            return;
        }
    };
    DefaultAssignaturePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-defaultassignature',
            template: __webpack_require__(/*! raw-loader!./defaultassignature.page.html */ "./node_modules/raw-loader/index.js!./src/app/defaultassignature/defaultassignature.page.html"),
            styles: [__webpack_require__(/*! ./defaultassignature.page.scss */ "./src/app/defaultassignature/defaultassignature.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DefaultAssignaturePage);
    return DefaultAssignaturePage;
}());



/***/ })

}]);
//# sourceMappingURL=defaultassignature-defaultassignature-module-es5.js.map