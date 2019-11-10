(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tabs-resume-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/home/maintenance-order/tabs/resume.page.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/maintenance-order/tabs/resume.page.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n\n</ion-header>\n\n<ion-content>\n  <ion-row>\n    <ion-col size=\"6\">\n      <ion-card>\n        <ion-card-header>\n          <ion-item-divider>\n            <ion-col size=\"3\">\n              <fa-icon class=\"color-blue\" icon=\"map-marker-alt\" size=\"2x\"></fa-icon>\n            </ion-col>\n            <ion-col size=\"9\">\n              <ion-label>Localização</ion-label>\n            </ion-col>\n          </ion-item-divider>\n        </ion-card-header>      \n        <ion-card-content class=\"align-center\">\n          Galpão 02 / B210\n        </ion-card-content>\n      </ion-card>\n    </ion-col>\n\n    <ion-col size=\"6\">\n      <ion-card>\n        <ion-card-header>\n          <ion-item-divider>\n            <ion-col size=\"3\">\n              <fa-icon icon=\"hammer\" size=\"2x\"></fa-icon>\n            </ion-col>\n            <ion-col size=\"9\">\n              <ion-label>Equip.</ion-label>\n            </ion-col>\n          </ion-item-divider>\n        </ion-card-header>      \n        <ion-card-content class=\"align-center\">\n            DHA03005/007\n        </ion-card-content>\n      </ion-card>\n    </ion-col>\n  </ion-row>\n\n  <ion-card>\n    <ion-card-header>\n      <ion-row>\n        <ion-col size=\"6\">\n          <div class=\"align-center\">\n            <ion-item-divider>\n              <ion-col size=\"2\">\n                <fa-icon class=\"color-yellow\" icon=\"exclamation-triangle\" size=\"2x\"></fa-icon>\n              </ion-col>\n              <ion-col size=\"10\">\n                <ion-label>Causas</ion-label>\n              </ion-col>\n            </ion-item-divider>\n          </div>\n        </ion-col>\n        <ion-col size=\"6\">\n          <div class=\"align-center\">\n            <ion-item-divider>\n              <ion-col size=\"2\">\n                <fa-icon icon=\"frown\" size=\"2x\"></fa-icon>\n              </ion-col>\n              <ion-col size=\"10\">\n                <ion-label>Sintoma</ion-label>\n              </ion-col>\n            </ion-item-divider>\n          </div>\n        </ion-col>\n      </ion-row>\n      \n    </ion-card-header>      \n    <ion-card-content>\n      <ion-row>\n        <ion-col size=\"6\">\n          <div class=\"align-center\">\n            Descarga elétrica\n          </div>\n        </ion-col>\n        <ion-col size=\"6\">\n          <div class=\"align-center\">\n            Motor queimado\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-card-content>\n  </ion-card>\n\n  <div class=\"align-center\">\n    <ion-row>\n      <ion-col size=\"12\">\n        <ion-label class=\"font-size-large\">Horário de Abertura</ion-label>\n      </ion-col>\n      <ion-col size=\"12\">\n        <ion-label class=\"font-size-large\">10:25</ion-label>\n      </ion-col>\n      <ion-col size=\"12\">\n        <ion-label class=\"font-size-small\">Qua 11 Setembro</ion-label>\n      </ion-col>\n    </ion-row>\n  </div>\n\n  <ion-card>\n    <ion-card-header>\n      <ion-item-divider>\n        <ion-label class=\"font-size-small\">Responsável pela Manutenção</ion-label>\n      </ion-item-divider>\n    </ion-card-header>      \n    <ion-card-content class=\"align-center\">\n      <ion-label class=\"font-size-medium\">José Correa</ion-label>\n    </ion-card-content>\n  </ion-card>\n  \n  <ion-card>\n    <ion-card-header class=\"align-center\">\n      <ion-item-divider>\n        <ion-label class=\"font-size-small\">Centro de Trabalho Responsável</ion-label>\n      </ion-item-divider>\n    </ion-card-header>      \n    <ion-card-content class=\"align-center\">\n      <ion-label class=\"font-size-medium\">Elétrico</ion-label>\n    </ion-card-content>\n  </ion-card>\n  \n</ion-content>"

/***/ }),

/***/ "./src/app/home/maintenance-order/tabs/resume.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/home/maintenance-order/tabs/resume.module.ts ***!
  \**************************************************************/
/*! exports provided: ResumePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResumePageModule", function() { return ResumePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _resume_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./resume.page */ "./src/app/home/maintenance-order/tabs/resume.page.ts");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm5/angular-fontawesome.js");








var routes = [
    {
        path: '',
        component: _resume_page__WEBPACK_IMPORTED_MODULE_6__["ResumePage"]
    }
];
var ResumePageModule = /** @class */ (function () {
    function ResumePageModule() {
    }
    ResumePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FontAwesomeModule"]
            ],
            declarations: [_resume_page__WEBPACK_IMPORTED_MODULE_6__["ResumePage"]]
        })
    ], ResumePageModule);
    return ResumePageModule;
}());



/***/ }),

/***/ "./src/app/home/maintenance-order/tabs/resume.page.scss":
/*!**************************************************************!*\
  !*** ./src/app/home/maintenance-order/tabs/resume.page.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvbWFpbnRlbmFuY2Utb3JkZXIvdGFicy9yZXN1bWUucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/home/maintenance-order/tabs/resume.page.ts":
/*!************************************************************!*\
  !*** ./src/app/home/maintenance-order/tabs/resume.page.ts ***!
  \************************************************************/
/*! exports provided: ResumePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResumePage", function() { return ResumePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ResumePage = /** @class */ (function () {
    function ResumePage() {
    }
    ResumePage.prototype.ngOnInit = function () {
    };
    ResumePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-resume',
            template: __webpack_require__(/*! raw-loader!./resume.page.html */ "./node_modules/raw-loader/index.js!./src/app/home/maintenance-order/tabs/resume.page.html"),
            styles: [__webpack_require__(/*! ./resume.page.scss */ "./src/app/home/maintenance-order/tabs/resume.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ResumePage);
    return ResumePage;
}());



/***/ })

}]);
//# sourceMappingURL=tabs-resume-module-es5.js.map