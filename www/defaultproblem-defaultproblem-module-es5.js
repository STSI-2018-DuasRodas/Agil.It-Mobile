(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["defaultproblem-defaultproblem-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/defaultproblem/defaultproblem.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/defaultproblem/defaultproblem.page.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n</ion-header>\n\n<ion-content>\n  <div *ngIf=\"order != undefined\">\n    <ion-card>\n      <ion-card-header>\n        <ion-item-divider>\n          <ion-card-title color=\"secondary\">Problemas</ion-card-title>\n        </ion-item-divider>\n      </ion-card-header>\n  \n      <ion-card-content>\n        <div>\n          <ion-label class=\"font-size-small font-style-bold\" color=\"primary\" position=\"stacked\">Causa</ion-label>\n          <ion-item lines=\"none\">\n            <ion-input class=\"font-size-small\" disabled>{{order.defectOrigin.description}}</ion-input>\n          </ion-item>\n        </div>\n  \n        <div class=\"m-top-2\">\n          <ion-label class=\"font-size-small font-style-bold\" color=\"primary\" position=\"stacked\">Informações da Causa</ion-label>\n          <ion-item>\n            <ion-input class=\"font-size-small\" disabled>{{order.defectOriginNote}}</ion-input>\n          </ion-item>\n        </div>\n  \n        <div class=\"m-top-6\">\n          <ion-label class=\"font-size-small font-style-bold\" color=\"primary\" position=\"stacked\">Sintoma</ion-label>\n          <ion-item lines=\"none\">\n            <ion-input class=\"font-size-small\" disabled>{{order.defectOrigin.description}}</ion-input>\n          </ion-item>\n        </div>\n  \n        <div class=\"m-top-2\">\n          <ion-label class=\"font-size-small font-style-bold\" color=\"primary\" position=\"stacked\">Informações do Sintoma</ion-label>\n          <ion-item>\n            <ion-input class=\"font-size-small\" disabled>{{order.defectSymptom.description}}</ion-input>\n          </ion-item>\n        </div>\n  \n        <div class=\"m-top-6\">\n          <ion-label class=\"font-size-small font-style-bold\" color=\"primary\" position=\"stacked\">Componente Defeituoso</ion-label>\n          <ion-item lines=\"none\">\n            <ion-input class=\"font-size-small\" disabled>{{order.orderEquipment[0].equipment.description}}</ion-input>\n          </ion-item>\n        </div>      \n      </ion-card-content>\n    </ion-card>\n  </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/defaultproblem/defaultproblem.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/defaultproblem/defaultproblem.module.ts ***!
  \*********************************************************/
/*! exports provided: DefaultProblemPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultProblemPageModule", function() { return DefaultProblemPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _defaultproblem_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./defaultproblem.page */ "./src/app/defaultproblem/defaultproblem.page.ts");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm5/angular-fontawesome.js");
/* harmony import */ var src_app_utils_customComponents_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/utils/customComponents.module */ "./src/app/utils/customComponents.module.ts");









var routes = [
    {
        path: '',
        component: _defaultproblem_page__WEBPACK_IMPORTED_MODULE_6__["DefaultProblemPage"]
    }
];
var DefaultProblemPageModule = /** @class */ (function () {
    function DefaultProblemPageModule() {
    }
    DefaultProblemPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FontAwesomeModule"],
                src_app_utils_customComponents_module__WEBPACK_IMPORTED_MODULE_8__["CustomComponentsModule"]
            ],
            declarations: [_defaultproblem_page__WEBPACK_IMPORTED_MODULE_6__["DefaultProblemPage"]]
        })
    ], DefaultProblemPageModule);
    return DefaultProblemPageModule;
}());



/***/ }),

/***/ "./src/app/defaultproblem/defaultproblem.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/defaultproblem/defaultproblem.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlZmF1bHRwcm9ibGVtL2RlZmF1bHRwcm9ibGVtLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/defaultproblem/defaultproblem.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/defaultproblem/defaultproblem.page.ts ***!
  \*******************************************************/
/*! exports provided: DefaultProblemPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultProblemPage", function() { return DefaultProblemPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _eventemitter_eventemitter_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../eventemitter/eventemitter.service */ "./src/app/eventemitter/eventemitter.service.ts");



var DefaultProblemPage = /** @class */ (function () {
    function DefaultProblemPage() {
        this.order = undefined;
    }
    DefaultProblemPage.prototype.ngOnInit = function () {
        var _this = this;
        this.subscribe = _eventemitter_eventemitter_service__WEBPACK_IMPORTED_MODULE_2__["EventEmitterService"].get('defaultOrderData').subscribe(function (data) {
            _this.order = data;
        });
        _eventemitter_eventemitter_service__WEBPACK_IMPORTED_MODULE_2__["EventEmitterService"].get('requestOrderData').emit();
    };
    DefaultProblemPage.prototype.ngOnDestroy = function () {
        this.subscribe.unsubscribe();
    };
    DefaultProblemPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-defaultproblem',
            template: __webpack_require__(/*! raw-loader!./defaultproblem.page.html */ "./node_modules/raw-loader/index.js!./src/app/defaultproblem/defaultproblem.page.html"),
            styles: [__webpack_require__(/*! ./defaultproblem.page.scss */ "./src/app/defaultproblem/defaultproblem.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DefaultProblemPage);
    return DefaultProblemPage;
}());



/***/ })

}]);
//# sourceMappingURL=defaultproblem-defaultproblem-module-es5.js.map