(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["defaultresume-defaultresume-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/defaultresume/defaultresume.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/defaultresume/defaultresume.page.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div *ngIf=\"order != undefined\">\r\n    <ion-row>\r\n      <ion-col size=\"6\">\r\n        <ion-card>\r\n          <ion-card-header>\r\n            <ion-item-divider>\r\n              <ion-col size=\"3\">\r\n                <fa-icon class=\"color-blue\" icon=\"map-marker-alt\" size=\"2x\"></fa-icon>\r\n              </ion-col>\r\n              <ion-col size=\"9\">\r\n                <ion-label>Localização</ion-label>\r\n              </ion-col>\r\n            </ion-item-divider>\r\n          </ion-card-header>      \r\n          <ion-card-content class=\"align-center\">\r\n            {{order.orderEquipment[0].installationArea.description}}\r\n          </ion-card-content>\r\n        </ion-card>\r\n      </ion-col>\r\n  \r\n      <ion-col size=\"6\">\r\n        <ion-card>\r\n          <ion-card-header>\r\n            <ion-item-divider>\r\n              <ion-col size=\"3\">\r\n                <fa-icon icon=\"hammer\" size=\"2x\"></fa-icon>\r\n              </ion-col>\r\n              <ion-col size=\"9\">\r\n                <ion-label>Equip.</ion-label>\r\n              </ion-col>\r\n            </ion-item-divider>\r\n          </ion-card-header>      \r\n          <ion-card-content class=\"align-center\">\r\n              {{order.orderEquipment[0].equipment.description}}\r\n          </ion-card-content>\r\n        </ion-card>\r\n      </ion-col>\r\n    </ion-row>\r\n  \r\n    <ion-card>\r\n      <ion-card-header>\r\n        <ion-row>\r\n          <ion-col size=\"6\">\r\n            <div class=\"align-center\">\r\n              <ion-item-divider>\r\n                <ion-col size=\"2\">\r\n                  <fa-icon class=\"color-yellow\" icon=\"exclamation-triangle\" size=\"2x\"></fa-icon>\r\n                </ion-col>\r\n                <ion-col size=\"10\">\r\n                  <ion-label>Causas</ion-label>\r\n                </ion-col>\r\n              </ion-item-divider>\r\n            </div>\r\n          </ion-col>\r\n          <ion-col size=\"6\">\r\n            <div class=\"align-center\">\r\n              <ion-item-divider>\r\n                <ion-col size=\"2\">\r\n                  <fa-icon icon=\"frown\" size=\"2x\"></fa-icon>\r\n                </ion-col>\r\n                <ion-col size=\"10\">\r\n                  <ion-label>Sintoma</ion-label>\r\n                </ion-col>\r\n              </ion-item-divider>\r\n            </div>\r\n          </ion-col>\r\n        </ion-row>\r\n        \r\n      </ion-card-header>      \r\n      <ion-card-content>\r\n        <ion-row>\r\n          <ion-col size=\"6\">\r\n            <div class=\"align-center\">\r\n              {{order.defectOrigin.description}}\r\n            </div>\r\n          </ion-col>\r\n          <ion-col size=\"6\">\r\n            <div class=\"align-center\">\r\n              {{order.defectSymptom.description}}\r\n            </div>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-card-content>\r\n    </ion-card>\r\n  \r\n    <div class=\"align-center\">\r\n      <ion-row>\r\n        <ion-col size=\"12\">\r\n          <ion-label class=\"font-size-large\">Horário de Abertura</ion-label>\r\n        </ion-col>\r\n        <ion-col size=\"12\">\r\n          <ion-label class=\"font-size-large\">{{order.openDateFormated}}</ion-label>\r\n        </ion-col>\r\n        <ion-col size=\"12\">\r\n          <ion-label class=\"font-size-small\">PENDENTE</ion-label>\r\n        </ion-col>\r\n      </ion-row>\r\n    </div>\r\n  \r\n    <ion-card>\r\n      <ion-card-header>\r\n        <ion-item-divider>\r\n          <ion-label class=\"font-size-small\">Responsável pela Manutenção</ion-label>\r\n        </ion-item-divider>\r\n      </ion-card-header>      \r\n      <ion-card-content class=\"align-center\" *ngFor=\"let workers of order.maintenanceWorker\">\r\n        <ion-label *ngIf=\"workers.isMain\" class=\"font-size-medium\">{{workers.user.name}}</ion-label>\r\n      </ion-card-content>\r\n    </ion-card>\r\n    \r\n    <ion-card>\r\n      <ion-card-header class=\"align-center\">\r\n        <ion-item-divider>\r\n          <ion-label class=\"font-size-small\">Centro de Trabalho Responsável</ion-label>\r\n        </ion-item-divider>\r\n      </ion-card-header>      \r\n      <ion-card-content class=\"align-center\">\r\n        <ion-label class=\"font-size-medium\">{{order.orderEquipment[0].installationArea.description}}</ion-label>\r\n      </ion-card-content>\r\n    </ion-card>\r\n  </div>    \r\n</ion-content>"

/***/ }),

/***/ "./src/app/defaultresume/defaultresume.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/defaultresume/defaultresume.module.ts ***!
  \*******************************************************/
/*! exports provided: DefaultResumePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultResumePageModule", function() { return DefaultResumePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _defaultresume_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./defaultresume.page */ "./src/app/defaultresume/defaultresume.page.ts");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm5/angular-fontawesome.js");








var routes = [
    {
        path: '',
        component: _defaultresume_page__WEBPACK_IMPORTED_MODULE_6__["DefaultResumePage"]
    }
];
var DefaultResumePageModule = /** @class */ (function () {
    function DefaultResumePageModule() {
    }
    DefaultResumePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FontAwesomeModule"]
            ],
            declarations: [_defaultresume_page__WEBPACK_IMPORTED_MODULE_6__["DefaultResumePage"]]
        })
    ], DefaultResumePageModule);
    return DefaultResumePageModule;
}());



/***/ }),

/***/ "./src/app/defaultresume/defaultresume.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/defaultresume/defaultresume.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlZmF1bHRyZXN1bWUvZGVmYXVsdHJlc3VtZS5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/defaultresume/defaultresume.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/defaultresume/defaultresume.page.ts ***!
  \*****************************************************/
/*! exports provided: DefaultResumePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultResumePage", function() { return DefaultResumePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _eventemitter_eventemitter_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../eventemitter/eventemitter.service */ "./src/app/eventemitter/eventemitter.service.ts");



var DefaultResumePage = /** @class */ (function () {
    function DefaultResumePage() {
        this.order = undefined;
    }
    DefaultResumePage.prototype.ngOnInit = function () {
        var _this = this;
        this.subscribe = _eventemitter_eventemitter_service__WEBPACK_IMPORTED_MODULE_2__["EventEmitterService"].get('defaultOrderData').subscribe(function (data) {
            _this.order = data;
            console.log(_this.order);
        });
    };
    DefaultResumePage.prototype.ngOnDestroy = function () {
        this.subscribe.unsubscribe();
    };
    DefaultResumePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-defaultresume',
            template: __webpack_require__(/*! raw-loader!./defaultresume.page.html */ "./node_modules/raw-loader/index.js!./src/app/defaultresume/defaultresume.page.html"),
            styles: [__webpack_require__(/*! ./defaultresume.page.scss */ "./src/app/defaultresume/defaultresume.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DefaultResumePage);
    return DefaultResumePage;
}());



/***/ })

}]);
//# sourceMappingURL=defaultresume-defaultresume-module-es5.js.map