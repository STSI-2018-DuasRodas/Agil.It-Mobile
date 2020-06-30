(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["listhourworked-listhourworked-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/listhourworked/listhourworked.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/listhourworked/listhourworked.page.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n</ion-header>\n\n<ion-content>  \n  <ion-card>\n    <ion-card-header>\n    </ion-card-header>\n    <ion-card-content>\n      <div class=\"m-top-4\">\n        <ion-row>\n          <ion-col size=\"6\" class=\"align-center\">\n            <ion-label class=\"font-style-bold\" color=\"primary\">Data</ion-label>\n            <ion-item class=\"p-left-6 p-right-6\">\n              <ion-datetime [(ngModel)]=\"date\" style=\"--placeholder-color: #797777; font-weight: bold\" placeholder=\"DD-MM-YYYY\" displayFormat=\"DD-MM-YYYY\" min=\"2000\"></ion-datetime>\n            </ion-item>\n          </ion-col>\n          <ion-col size=\"6\" class=\"align-center\">\n            <ion-label class=\"font-style-bold\" color=\"primary\">Intervalo</ion-label>\n            <ion-item class=\"p-left-6 p-right-6\">\n              <ion-datetime [(ngModel)]=\"interval\" style=\"--placeholder-color: #797777; font-weight: bold\" placeholder=\"HH:MM\" displayFormat=\"h:mm\" min=\"2000\"></ion-datetime>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n\n        <ion-row>\n          <ion-col size=\"6\" class=\"align-center\">\n            <ion-label class=\"font-style-bold\" color=\"primary\">Hora Inicial</ion-label>\n            <ion-item class=\"p-left-6 p-right-6 align-center\">\n              <ion-datetime [(ngModel)]=\"initialHour\" style=\"--placeholder-color: #797777; font-weight: bold\" placeholder=\"HH:MM\" displayFormat=\"HH:mm\" min=\"2000\"></ion-datetime>\n            </ion-item>\n          </ion-col>\n          <ion-col size=\"6\" class=\"align-center\">\n            <ion-label class=\"font-style-bold\" color=\"primary\">Hora Final</ion-label>\n            <ion-item class=\"p-left-6 p-right-6\">\n              <ion-datetime [(ngModel)]=\"finalHour\" style=\"--placeholder-color: #797777; font-weight: bold\" placeholder=\"HH:MM\" displayFormat=\"HH:mm\" min=\"2000\"></ion-datetime>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n        <div class=\"align-center\">\n          <ion-row>\n            <ion-col size=\"6\">\n              <agilit-button [color]=\"'secondary'\" (click)=\"confirmAppointments()\">Cancelar</agilit-button>\n            </ion-col>\n            <ion-col size=\"6\">\n              <agilit-button (click)=\"confirmAppointments()\">Confirmar</agilit-button>\n            </ion-col>\n          </ion-row>\n        </div>\n      </div>        \n    </ion-card-content>\n  </ion-card>\n\n  <ion-item-divider>\n  </ion-item-divider>\n\n  <ion-card>\n    <ion-card-header>    \n      <div class=\"align-center\">\n        <ion-row>\n          <ion-col size=\"12\">  \n            <ion-label class=\"font-size-large font-style-bold\">Total Geral</ion-label>        \n          </ion-col>\n          <ion-col size=\"12\">\n            <ion-icon name=\"time\" color=\"primary\" class=\"m-right-2 icon-default-size\"></ion-icon>\n            <ion-label class=\"font-size-large font-style-bold\">07:30</ion-label>        \n          </ion-col>\n        </ion-row>    \n      </div>\n      <ion-item-divider>\n      </ion-item-divider>\n    </ion-card-header>\n    \n    <ion-card-content>\n      <div *ngFor=\"let hourAponted of hoursAponted\">\n        <ion-label class=\"font-size-small font-style-bold color-black m-left-2\">Data: {{hourAponted.Date | agilitdate}}</ion-label>                \n        <fa-icon icon=\"trash-alt\" class=\"float-right\" size=\"1x\"></fa-icon>        \n        <fa-icon icon=\"pen\" class=\"float-right p-right-2\" size=\"1x\"></fa-icon>  \n        <ion-row>\n          <ion-col size=\"6\">\n            <ion-label class=\"font-size-small\" color=\"secondary\">Início: {{hourAponted.InitialHour | agilittime}}</ion-label>\n          </ion-col>\n          <ion-col size=\"6\">\n            <ion-label class=\"font-size-small\" color=\"secondary\">Intervalo: {{hourAponted.Interval | agilittime}}</ion-label>\n          </ion-col>\n          <ion-col size=\"6\">\n            <ion-label class=\"font-size-small\" color=\"secondary\">Final: {{hourAponted.FinalHour | agilittime}}</ion-label>\n          </ion-col>\n          <ion-col size=\"6\">\n            <ion-label class=\"font-size-small\" color=\"secondary\">Total: 06:30</ion-label>\n          </ion-col>\n        </ion-row>\n        <ion-item-divider>\n        </ion-item-divider>\n      </div>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/listhourworked/listhourworked.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/listhourworked/listhourworked.module.ts ***!
  \*********************************************************/
/*! exports provided: ListHourworkedPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListHourworkedPageModule", function() { return ListHourworkedPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _listhourworked_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./listhourworked.page */ "./src/app/listhourworked/listhourworked.page.ts");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm5/angular-fontawesome.js");
/* harmony import */ var _utils_customComponents_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/customComponents.module */ "./src/app/utils/customComponents.module.ts");









var routes = [
    {
        path: '',
        component: _listhourworked_page__WEBPACK_IMPORTED_MODULE_6__["ListHourworkedPage"]
    }
];
var ListHourworkedPageModule = /** @class */ (function () {
    function ListHourworkedPageModule() {
    }
    ListHourworkedPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FontAwesomeModule"],
                _utils_customComponents_module__WEBPACK_IMPORTED_MODULE_8__["CustomComponentsModule"],
            ],
            declarations: [_listhourworked_page__WEBPACK_IMPORTED_MODULE_6__["ListHourworkedPage"]]
        })
    ], ListHourworkedPageModule);
    return ListHourworkedPageModule;
}());



/***/ }),

/***/ "./src/app/listhourworked/listhourworked.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/listhourworked/listhourworked.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xpc3Rob3Vyd29ya2VkL2xpc3Rob3Vyd29ya2VkLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/listhourworked/listhourworked.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/listhourworked/listhourworked.page.ts ***!
  \*******************************************************/
/*! exports provided: ListHourworkedPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListHourworkedPage", function() { return ListHourworkedPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _utils_viewUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/viewUtils */ "./src/app/utils/viewUtils.ts");
/* harmony import */ var _eventemitter_eventemitter_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../eventemitter/eventemitter.service */ "./src/app/eventemitter/eventemitter.service.ts");




var ListHourworkedPage = /** @class */ (function () {
    function ListHourworkedPage(viewUtils) {
        this.viewUtils = viewUtils;
        this.order = undefined;
        this.hoursAponted = [];
    }
    ListHourworkedPage.prototype.ngOnInit = function () {
        var _this = this;
        _eventemitter_eventemitter_service__WEBPACK_IMPORTED_MODULE_3__["EventEmitterService"].get('listOrderData').subscribe(function (data) {
            _this.order = data;
            console.log(_this.order);
        });
    };
    ListHourworkedPage.prototype.confirmAppointments = function () {
        var hourAponted = {};
        hourAponted.Date = new Date(this.date);
        hourAponted.InitialHour = new Date(this.initialHour);
        hourAponted.FinalHour = new Date(this.finalHour);
        hourAponted.Interval = new Date(this.interval);
        this.date = '';
        this.initialHour = '';
        this.finalHour = '';
        this.interval = '';
        this.hoursAponted.push(hourAponted);
    };
    ListHourworkedPage.ctorParameters = function () { return [
        { type: _utils_viewUtils__WEBPACK_IMPORTED_MODULE_2__["ViewUtils"] }
    ]; };
    ListHourworkedPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-listhourworked',
            template: __webpack_require__(/*! raw-loader!./listhourworked.page.html */ "./node_modules/raw-loader/index.js!./src/app/listhourworked/listhourworked.page.html"),
            styles: [__webpack_require__(/*! ./listhourworked.page.scss */ "./src/app/listhourworked/listhourworked.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_utils_viewUtils__WEBPACK_IMPORTED_MODULE_2__["ViewUtils"]])
    ], ListHourworkedPage);
    return ListHourworkedPage;
}());



/***/ })

}]);
//# sourceMappingURL=listhourworked-listhourworked-module-es5.js.map