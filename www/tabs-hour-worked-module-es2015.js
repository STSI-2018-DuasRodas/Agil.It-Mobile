(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tabs-hour-worked-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/home/maintenance-order/tabs/hour-worked.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/maintenance-order/tabs/hour-worked.page.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n</ion-header>\r\n\r\n<ion-content>  \r\n  <ion-card>\r\n    <ion-card-header>\r\n    </ion-card-header>\r\n    <ion-card-content>\r\n      <div class=\"m-top-4\">\r\n        <ion-row>\r\n          <ion-col size=\"6\" class=\"align-center\">\r\n            <ion-label class=\"font-style-bold\" color=\"primary\">Data</ion-label>\r\n            <ion-item class=\"p-left-6 p-right-6\">\r\n              <ion-datetime [(ngModel)]=\"date\" style=\"--placeholder-color: #797777; font-weight: bold\" placeholder=\"DD-MM-YYYY\" displayFormat=\"DD-MM-YYYY\" min=\"2000\"></ion-datetime>\r\n            </ion-item>\r\n          </ion-col>\r\n          <ion-col size=\"6\" class=\"align-center\">\r\n            <ion-label class=\"font-style-bold\" color=\"primary\">Intervalo</ion-label>\r\n            <ion-item class=\"p-left-6 p-right-6\">\r\n              <ion-datetime [(ngModel)]=\"interval\" style=\"--placeholder-color: #797777; font-weight: bold\" placeholder=\"HH:MM\" displayFormat=\"h:mm\" min=\"2000\"></ion-datetime>\r\n            </ion-item>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row>\r\n          <ion-col size=\"6\" class=\"align-center\">\r\n            <ion-label class=\"font-style-bold\" color=\"primary\">Hora Inicial</ion-label>\r\n            <ion-item class=\"p-left-6 p-right-6 align-center\">\r\n              <ion-datetime [(ngModel)]=\"initialHour\" style=\"--placeholder-color: #797777; font-weight: bold\" placeholder=\"HH:MM\" displayFormat=\"HH:mm\" min=\"2000\"></ion-datetime>\r\n            </ion-item>\r\n          </ion-col>\r\n          <ion-col size=\"6\" class=\"align-center\">\r\n            <ion-label class=\"font-style-bold\" color=\"primary\">Hora Final</ion-label>\r\n            <ion-item class=\"p-left-6 p-right-6\">\r\n              <ion-datetime [(ngModel)]=\"finalHour\" style=\"--placeholder-color: #797777; font-weight: bold\" placeholder=\"HH:MM\" displayFormat=\"HH:mm\" min=\"2000\"></ion-datetime>\r\n            </ion-item>\r\n          </ion-col>\r\n        </ion-row>\r\n        <div class=\"align-center\">\r\n          <ion-row>\r\n            <ion-col size=\"6\">\r\n              <agilit-button [color]=\"'secondary'\" (click)=\"confirmAppointments()\">Cancelar</agilit-button>\r\n            </ion-col>\r\n            <ion-col size=\"6\">\r\n              <agilit-button (click)=\"confirmAppointments()\">Confirmar</agilit-button>\r\n            </ion-col>\r\n          </ion-row>\r\n        </div>\r\n      </div>        \r\n    </ion-card-content>\r\n  </ion-card>\r\n\r\n  <ion-item-divider>\r\n  </ion-item-divider>\r\n\r\n  <ion-card>\r\n    <ion-card-header>    \r\n      <div class=\"align-center\">\r\n        <ion-row>\r\n          <ion-col size=\"12\">  \r\n            <ion-label class=\"font-size-large font-style-bold\">Total Geral</ion-label>        \r\n          </ion-col>\r\n          <ion-col size=\"12\">\r\n            <ion-icon name=\"time\" color=\"primary\" class=\"m-right-2 icon-default-size\"></ion-icon>\r\n            <ion-label class=\"font-size-large font-style-bold\">07:30</ion-label>        \r\n          </ion-col>\r\n        </ion-row>    \r\n      </div>\r\n      <ion-item-divider>\r\n      </ion-item-divider>\r\n    </ion-card-header>\r\n    \r\n    <ion-card-content>\r\n      <div *ngFor=\"let hourAponted of hoursAponted\">\r\n        <ion-label class=\"font-size-small font-style-bold color-black m-left-2\">Data: {{hourAponted.Date | agilitdate}}</ion-label>                \r\n        <fa-icon icon=\"trash-alt\" class=\"float-right\" size=\"1x\"></fa-icon>        \r\n        <fa-icon icon=\"pen\" class=\"float-right p-right-2\" size=\"1x\"></fa-icon>  \r\n        <ion-row>\r\n          <ion-col size=\"6\">\r\n            <ion-label class=\"font-size-small\" color=\"secondary\">Início: {{hourAponted.InitialHour | agilittime}}</ion-label>\r\n          </ion-col>\r\n          <ion-col size=\"6\">\r\n            <ion-label class=\"font-size-small\" color=\"secondary\">Intervalo: {{hourAponted.Interval | agilittime}}</ion-label>\r\n          </ion-col>\r\n          <ion-col size=\"6\">\r\n            <ion-label class=\"font-size-small\" color=\"secondary\">Final: {{hourAponted.FinalHour | agilittime}}</ion-label>\r\n          </ion-col>\r\n          <ion-col size=\"6\">\r\n            <ion-label class=\"font-size-small\" color=\"secondary\">Total: 06:30</ion-label>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-item-divider>\r\n        </ion-item-divider>\r\n      </div>\r\n    </ion-card-content>\r\n  </ion-card>\r\n</ion-content>\r\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _hour_worked_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./hour-worked.page */ "./src/app/home/maintenance-order/tabs/hour-worked.page.ts");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm2015/angular-fontawesome.js");
/* harmony import */ var src_app_utils_customComponents_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/utils/customComponents.module */ "./src/app/utils/customComponents.module.ts");
/* harmony import */ var src_app_pipe_date_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/pipe/date.pipe */ "./src/app/pipe/date.pipe.ts");
/* harmony import */ var src_app_pipe_time_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/pipe/time.pipe */ "./src/app/pipe/time.pipe.ts");











const routes = [
    {
        path: '',
        component: _hour_worked_page__WEBPACK_IMPORTED_MODULE_6__["HourWorkedPage"]
    }
];
let HourWorkedPageModule = class HourWorkedPageModule {
};
HourWorkedPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            src_app_utils_customComponents_module__WEBPACK_IMPORTED_MODULE_8__["CustomComponentsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FontAwesomeModule"]
        ],
        declarations: [_hour_worked_page__WEBPACK_IMPORTED_MODULE_6__["HourWorkedPage"], src_app_pipe_date_pipe__WEBPACK_IMPORTED_MODULE_9__["AgilitDatePipe"], src_app_pipe_time_pipe__WEBPACK_IMPORTED_MODULE_10__["AgilitTimePipe"]]
    })
], HourWorkedPageModule);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_utils_viewUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/utils/viewUtils */ "./src/app/utils/viewUtils.ts");



let HourWorkedPage = class HourWorkedPage {
    constructor(viewUtils) {
        this.viewUtils = viewUtils;
        this.hoursAponted = [];
        this.initializingObject();
    }
    ngOnInit() {
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
HourWorkedPage.ctorParameters = () => [
    { type: src_app_utils_viewUtils__WEBPACK_IMPORTED_MODULE_2__["ViewUtils"] }
];
HourWorkedPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-hour-worked',
        template: __webpack_require__(/*! raw-loader!./hour-worked.page.html */ "./node_modules/raw-loader/index.js!./src/app/home/maintenance-order/tabs/hour-worked.page.html"),
        styles: [__webpack_require__(/*! ./hour-worked.page.scss */ "./src/app/home/maintenance-order/tabs/hour-worked.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_utils_viewUtils__WEBPACK_IMPORTED_MODULE_2__["ViewUtils"]])
], HourWorkedPage);



/***/ }),

/***/ "./src/app/pipe/date.pipe.ts":
/*!***********************************!*\
  !*** ./src/app/pipe/date.pipe.ts ***!
  \***********************************/
/*! exports provided: AgilitDatePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgilitDatePipe", function() { return AgilitDatePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AgilitDatePipe = class AgilitDatePipe {
    constructor() {
    }
    transform(value) {
        let date = `${value.getDate()}`;
        if (value.getDate().toString().length == 1) {
            date = `0${value.getDate()}`;
        }
        return `${date}/${value.getMonth() + 1}/${value.getFullYear()}`;
    }
};
AgilitDatePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'agilitdate' }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], AgilitDatePipe);



/***/ }),

/***/ "./src/app/pipe/time.pipe.ts":
/*!***********************************!*\
  !*** ./src/app/pipe/time.pipe.ts ***!
  \***********************************/
/*! exports provided: AgilitTimePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgilitTimePipe", function() { return AgilitTimePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AgilitTimePipe = class AgilitTimePipe {
    constructor() {
    }
    transform(value) {
        let hour = `${value.getHours()}`;
        let minute = `${value.getMinutes()}`;
        if (value.getHours().toString().length == 1) {
            hour = `0${value.getHours()}`;
        }
        if (value.getMinutes().toString().length == 1) {
            minute = `0${value.getMinutes()}`;
        }
        return `${hour}:${minute}`;
    }
};
AgilitTimePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'agilittime' }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], AgilitTimePipe);



/***/ })

}]);
//# sourceMappingURL=tabs-hour-worked-module-es2015.js.map