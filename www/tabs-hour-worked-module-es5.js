(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tabs-hour-worked-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/home/maintenance-order/tabs/hour-worked.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/maintenance-order/tabs/hour-worked.page.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n</ion-header>\n\n<ion-content>\n  <div class=\"m-top-4\">\n    <ion-row>\n      <ion-col size=\"6\" class=\"align-center\">\n        <ion-label class=\"font-style-bold\" color=\"primary\">Data:</ion-label>\n        <ion-item class=\"p-left-6 p-right-6\">\n          <ion-datetime style=\"--placeholder-color: #797777; font-weight: bold\" placeholder=\"DD-MM-YYYY\" displayFormat=\"DD-MM-YYYY\" min=\"2000\"></ion-datetime>\n        </ion-item>\n      </ion-col>\n      <ion-col size=\"6\" class=\"align-center\">\n        <ion-label class=\"font-style-bold\" color=\"primary\">Intervalo:</ion-label>\n        <ion-item class=\"p-left-6 p-right-6\">\n          <ion-datetime style=\"--placeholder-color: #797777; font-weight: bold\" placeholder=\"HH:MM\" displayFormat=\"h:mm\" min=\"2000\"></ion-datetime>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col size=\"6\" class=\"align-center\">\n        <ion-label class=\"font-style-bold\" color=\"primary\">Hora Inical:</ion-label>\n        <ion-item class=\"p-left-6 p-right-6 align-center\">\n          <ion-datetime style=\"--placeholder-color: #797777; font-weight: bold\" placeholder=\"HH:MM\" displayFormat=\"HH:mm\" min=\"2000\"></ion-datetime>\n        </ion-item>\n      </ion-col>\n      <ion-col size=\"6\" class=\"align-center\">\n        <ion-label class=\"font-style-bold\" color=\"primary\">Hora Inical:</ion-label>\n        <ion-item class=\"p-left-6 p-right-6\">\n          <ion-datetime style=\"--placeholder-color: #797777; font-weight: bold\" placeholder=\"HH:MM\" displayFormat=\"HH:mm\" min=\"2000\"></ion-datetime>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n  </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/home/maintenance-order/tabs/hour-worked.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/home/maintenance-order/tabs/hour-worked.module.ts ***!
  \*******************************************************************/
/*! exports provided: HourWorkedPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HourWorkedPageModule", function() { return HourWorkedPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _hour_worked_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./hour-worked.page */ "./src/app/home/maintenance-order/tabs/hour-worked.page.ts");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm5/angular-fontawesome.js");








var routes = [
    {
        path: '',
        component: _hour_worked_page__WEBPACK_IMPORTED_MODULE_6__["HourWorkedPage"]
    }
];
var HourWorkedPageModule = /** @class */ (function () {
    function HourWorkedPageModule() {
    }
    HourWorkedPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FontAwesomeModule"]
            ],
            declarations: [_hour_worked_page__WEBPACK_IMPORTED_MODULE_6__["HourWorkedPage"]]
        })
    ], HourWorkedPageModule);
    return HourWorkedPageModule;
}());



/***/ }),

/***/ "./src/app/home/maintenance-order/tabs/hour-worked.page.scss":
/*!*******************************************************************!*\
  !*** ./src/app/home/maintenance-order/tabs/hour-worked.page.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvbWFpbnRlbmFuY2Utb3JkZXIvdGFicy9ob3VyLXdvcmtlZC5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/home/maintenance-order/tabs/hour-worked.page.ts":
/*!*****************************************************************!*\
  !*** ./src/app/home/maintenance-order/tabs/hour-worked.page.ts ***!
  \*****************************************************************/
/*! exports provided: HourWorkedPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HourWorkedPage", function() { return HourWorkedPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HourWorkedPage = /** @class */ (function () {
    function HourWorkedPage() {
    }
    HourWorkedPage.prototype.ngOnInit = function () {
    };
    HourWorkedPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-hour-worked',
            template: __webpack_require__(/*! raw-loader!./hour-worked.page.html */ "./node_modules/raw-loader/index.js!./src/app/home/maintenance-order/tabs/hour-worked.page.html"),
            styles: [__webpack_require__(/*! ./hour-worked.page.scss */ "./src/app/home/maintenance-order/tabs/hour-worked.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HourWorkedPage);
    return HourWorkedPage;
}());



/***/ })

}]);
//# sourceMappingURL=tabs-hour-worked-module-es5.js.map