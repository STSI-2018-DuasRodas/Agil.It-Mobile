(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["defaulthourworked-defaulthourworked-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/defaulthourworked/defaulthourworked.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/defaulthourworked/defaulthourworked.page.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n</ion-header>\r\n\r\n<ion-content>  \r\n  <ion-card>\r\n    <ion-card-header>\r\n    </ion-card-header>\r\n    <ion-card-content>\r\n      <div class=\"m-top-4\">\r\n        <ion-row>\r\n          <ion-col size=\"6\" class=\"align-center\">\r\n            <ion-label class=\"font-style-bold\" color=\"primary\">Data</ion-label>\r\n            <ion-item class=\"p-left-6 p-right-6\">\r\n              <ion-datetime [(ngModel)]=\"date\" style=\"--placeholder-color: #797777; font-weight: bold\" placeholder=\"DD-MM-YYYY\" displayFormat=\"DD-MM-YYYY\" min=\"2000\"></ion-datetime>\r\n            </ion-item>\r\n          </ion-col>\r\n          <ion-col size=\"6\" class=\"align-center\">\r\n            <ion-label class=\"font-style-bold\" color=\"primary\">Intervalo</ion-label>\r\n            <ion-item class=\"p-left-6 p-right-6\">\r\n              <ion-datetime [(ngModel)]=\"interval\" style=\"--placeholder-color: #797777; font-weight: bold\" placeholder=\"HH:MM\" displayFormat=\"h:mm\" min=\"2000\"></ion-datetime>\r\n            </ion-item>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row>\r\n          <ion-col size=\"6\" class=\"align-center\">\r\n            <ion-label class=\"font-style-bold\" color=\"primary\">Hora Inicial</ion-label>\r\n            <ion-item class=\"p-left-6 p-right-6 align-center\">\r\n              <ion-datetime [(ngModel)]=\"initialHour\" style=\"--placeholder-color: #797777; font-weight: bold\" placeholder=\"HH:MM\" displayFormat=\"HH:mm\" min=\"2000\"></ion-datetime>\r\n            </ion-item>\r\n          </ion-col>\r\n          <ion-col size=\"6\" class=\"align-center\">\r\n            <ion-label class=\"font-style-bold\" color=\"primary\">Hora Final</ion-label>\r\n            <ion-item class=\"p-left-6 p-right-6\">\r\n              <ion-datetime [(ngModel)]=\"finalHour\" style=\"--placeholder-color: #797777; font-weight: bold\" placeholder=\"HH:MM\" displayFormat=\"HH:mm\" min=\"2000\"></ion-datetime>\r\n            </ion-item>\r\n          </ion-col>\r\n        </ion-row>\r\n        <div class=\"align-center\">\r\n          <ion-row>\r\n            <ion-col size=\"6\">\r\n              <agilit-button [color]=\"'secondary'\" (click)=\"confirmAppointments()\">Cancelar</agilit-button>\r\n            </ion-col>\r\n            <ion-col size=\"6\">\r\n              <agilit-button (click)=\"confirmAppointments()\">Confirmar</agilit-button>\r\n            </ion-col>\r\n          </ion-row>\r\n        </div>\r\n      </div>        \r\n    </ion-card-content>\r\n  </ion-card>\r\n\r\n  <ion-item-divider>\r\n  </ion-item-divider>\r\n\r\n  <ion-card>\r\n    <ion-card-header>    \r\n      <div class=\"align-center\">\r\n        <ion-row>\r\n          <ion-col size=\"12\">  \r\n            <ion-label class=\"font-size-large font-style-bold\">Total Geral</ion-label>        \r\n          </ion-col>\r\n          <ion-col size=\"12\">\r\n            <ion-icon name=\"time\" color=\"primary\" class=\"m-right-2 icon-default-size\"></ion-icon>\r\n            <ion-label class=\"font-size-large font-style-bold\">07:30</ion-label>        \r\n          </ion-col>\r\n        </ion-row>    \r\n      </div>\r\n      <ion-item-divider>\r\n      </ion-item-divider>\r\n    </ion-card-header>\r\n    \r\n    <ion-card-content>\r\n      <div *ngFor=\"let hourAponted of hoursAponted\">\r\n        <ion-label class=\"font-size-small font-style-bold color-black m-left-2\">Data: {{hourAponted.Date | agilitdate}}</ion-label>                \r\n        <fa-icon icon=\"trash-alt\" class=\"float-right\" size=\"1x\"></fa-icon>        \r\n        <fa-icon icon=\"pen\" class=\"float-right p-right-2\" size=\"1x\"></fa-icon>  \r\n        <ion-row>\r\n          <ion-col size=\"6\">\r\n            <ion-label class=\"font-size-small\" color=\"secondary\">Início: {{hourAponted.InitialHour | agilittime}}</ion-label>\r\n          </ion-col>\r\n          <ion-col size=\"6\">\r\n            <ion-label class=\"font-size-small\" color=\"secondary\">Intervalo: {{hourAponted.Interval | agilittime}}</ion-label>\r\n          </ion-col>\r\n          <ion-col size=\"6\">\r\n            <ion-label class=\"font-size-small\" color=\"secondary\">Final: {{hourAponted.FinalHour | agilittime}}</ion-label>\r\n          </ion-col>\r\n          <ion-col size=\"6\">\r\n            <ion-label class=\"font-size-small\" color=\"secondary\">Total: 06:30</ion-label>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-item-divider>\r\n        </ion-item-divider>\r\n      </div>\r\n    </ion-card-content>\r\n  </ion-card>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/defaulthourworked/defaulthourworked.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/defaulthourworked/defaulthourworked.module.ts ***!
  \***************************************************************/
/*! exports provided: DefaultHourWorkedPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultHourWorkedPageModule", function() { return DefaultHourWorkedPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _defaulthourworked_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./defaulthourworked.page */ "./src/app/defaulthourworked/defaulthourworked.page.ts");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm2015/angular-fontawesome.js");
/* harmony import */ var src_app_utils_customComponents_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/utils/customComponents.module */ "./src/app/utils/customComponents.module.ts");









const routes = [
    {
        path: '',
        component: _defaulthourworked_page__WEBPACK_IMPORTED_MODULE_6__["DefaultHourWorkedPage"]
    }
];
let DefaultHourWorkedPageModule = class DefaultHourWorkedPageModule {
};
DefaultHourWorkedPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            src_app_utils_customComponents_module__WEBPACK_IMPORTED_MODULE_8__["CustomComponentsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FontAwesomeModule"]
        ],
        declarations: [_defaulthourworked_page__WEBPACK_IMPORTED_MODULE_6__["DefaultHourWorkedPage"]]
    })
], DefaultHourWorkedPageModule);



/***/ }),

/***/ "./src/app/defaulthourworked/defaulthourworked.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/defaulthourworked/defaulthourworked.page.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlZmF1bHRob3Vyd29ya2VkL2RlZmF1bHRob3Vyd29ya2VkLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/defaulthourworked/defaulthourworked.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/defaulthourworked/defaulthourworked.page.ts ***!
  \*************************************************************/
/*! exports provided: DefaultHourWorkedPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultHourWorkedPage", function() { return DefaultHourWorkedPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_utils_viewUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/utils/viewUtils */ "./src/app/utils/viewUtils.ts");
/* harmony import */ var _eventemitter_eventemitter_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../eventemitter/eventemitter.service */ "./src/app/eventemitter/eventemitter.service.ts");




let DefaultHourWorkedPage = class DefaultHourWorkedPage {
    constructor(viewUtils) {
        this.viewUtils = viewUtils;
        this.order = undefined;
        this.hoursAponted = [];
        this.initializingObject();
    }
    ngOnInit() {
        this.subscribe = _eventemitter_eventemitter_service__WEBPACK_IMPORTED_MODULE_3__["EventEmitterService"].get('defaultOrderData').subscribe((data) => {
            this.order = data;
        });
    }
    ngOnDestroy() {
        this.subscribe.unsubscribe();
    }
    confirmAppointments() {
        let hourAponted = {};
        hourAponted.Date = new Date(this.date);
        hourAponted.InitialHour = new Date(this.initialHour);
        hourAponted.FinalHour = new Date(this.finalHour);
        hourAponted.Interval = new Date(this.interval);
        this.date = '';
        this.initialHour = '';
        this.finalHour = '';
        this.interval = '';
        this.hoursAponted.push(hourAponted);
    }
    initializingObject() {
    }
};
DefaultHourWorkedPage.ctorParameters = () => [
    { type: src_app_utils_viewUtils__WEBPACK_IMPORTED_MODULE_2__["ViewUtils"] }
];
DefaultHourWorkedPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-defaulthourworked',
        template: __webpack_require__(/*! raw-loader!./defaulthourworked.page.html */ "./node_modules/raw-loader/index.js!./src/app/defaulthourworked/defaulthourworked.page.html"),
        styles: [__webpack_require__(/*! ./defaulthourworked.page.scss */ "./src/app/defaulthourworked/defaulthourworked.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_utils_viewUtils__WEBPACK_IMPORTED_MODULE_2__["ViewUtils"]])
], DefaultHourWorkedPage);



/***/ })

}]);
//# sourceMappingURL=defaulthourworked-defaulthourworked-module-es2015.js.map