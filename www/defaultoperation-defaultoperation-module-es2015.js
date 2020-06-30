(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["defaultoperation-defaultoperation-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/defaultoperation/defaultoperation.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/defaultoperation/defaultoperation.page.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n</ion-header>\n\n<ion-content>  \n  <div *ngIf=\"order != undefined\">\n    <ion-card style=\"background-color: #E8E8E8;\" *ngFor=\"let itemOperation of order.orderEquipment[0].orderOperation; let i = index\">\n      <ion-card-header (click)=\"expandedItem(itemOperation)\">\n        <ion-label class=\"font-size-medium\">\n          <ion-icon class=\"p-right-2 executed icon-default-size color-success\" name=\"checkmark\" *ngIf=\"itemOperation.executed\"></ion-icon>\n          <ion-icon class=\"p-right-2 executed icon-default-size color-primary\" name=\"alert\" *ngIf=\"!itemOperation.executed\"></ion-icon>        \n          {{i + 1}} - {{itemOperation.description}}        \n          <ion-icon class=\"p-right-2 arrow-icons-right icon-default-size\" name=\"arrow-forward\" *ngIf=\"!itemOperation.expanded\"></ion-icon>        \n          <ion-icon class=\"p-right-2 arrow-icons-right icon-default-size\" name=\"arrow-down\" *ngIf=\"itemOperation.expanded\"></ion-icon>\n        </ion-label>      \n      </ion-card-header>\n    \n      <ion-card-content *ngIf=\"itemOperation.expanded\">\n        <div class=\"m-top-2 p-2\">\n          <div class=\"align-center\">\n            <ion-label class=\"font-size-medium\">Componentes</ion-label>\n          </div>\n    \n          <div *ngFor=\"let itemComponent of itemOperation.orderComponent\">\n            - {{itemComponent.item.description}}\n          </div>   \n                  \n          <hr class=\"m-top-6\" style=\"width: 98%; height: 2px; background-color: #A9A9A9;\">\n          <ion-row>\n            <ion-col size=\"6\" style=\"display: flex; align-items: center;\" class=\"font-size-small\">\n              <ion-label>Operação realizada</ion-label>\n            </ion-col>\n  \n            <ion-col size=\"6\" style=\"display: flex; align-items: center;\">\n              <ion-toggle [(ngModel)]=\"itemOperation.executed\"></ion-toggle>\n            </ion-col>\n          </ion-row>\n        </div>\n      </ion-card-content>\n    </ion-card>\n  </div>  \n\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\" (click)=\"addOperation()\">\n    <ion-fab-button>\n      <ion-icon name=\"add\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/defaultoperation/defaultoperation.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/defaultoperation/defaultoperation.module.ts ***!
  \*************************************************************/
/*! exports provided: DefaultOperationPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultOperationPageModule", function() { return DefaultOperationPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _defaultoperation_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./defaultoperation.page */ "./src/app/defaultoperation/defaultoperation.page.ts");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm2015/angular-fontawesome.js");








const routes = [
    {
        path: '',
        component: _defaultoperation_page__WEBPACK_IMPORTED_MODULE_6__["DefaultOperationPage"]
    }
];
let DefaultOperationPageModule = class DefaultOperationPageModule {
};
DefaultOperationPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FontAwesomeModule"]
        ],
        declarations: [_defaultoperation_page__WEBPACK_IMPORTED_MODULE_6__["DefaultOperationPage"]]
    })
], DefaultOperationPageModule);



/***/ }),

/***/ "./src/app/defaultoperation/defaultoperation.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/defaultoperation/defaultoperation.page.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".arrow-icons-right {\n  float: right; }\n\n.executed {\n  float: left; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVmYXVsdG9wZXJhdGlvbi9DOlxcVXNlcnNcXEluaWNpYW5kbyBvIFdpbmRvd3NcXERlc2t0b3BcXEN1cnNvXFwzIC0gU2VtZXN0cmVcXER1YXMgUm9kYXNcXEFnaWwtaXRcXG1vYmlsZS9zcmNcXGFwcFxcZGVmYXVsdG9wZXJhdGlvblxcZGVmYXVsdG9wZXJhdGlvbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFZLEVBQUE7O0FBR2hCO0VBQ0ksV0FBVyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvZGVmYXVsdG9wZXJhdGlvbi9kZWZhdWx0b3BlcmF0aW9uLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hcnJvdy1pY29ucy1yaWdodHtcclxuICAgIGZsb2F0OiByaWdodDtcclxufVxyXG5cclxuLmV4ZWN1dGVke1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/defaultoperation/defaultoperation.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/defaultoperation/defaultoperation.page.ts ***!
  \***********************************************************/
/*! exports provided: DefaultOperationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultOperationPage", function() { return DefaultOperationPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_cad_operation_cad_operation_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/cad-operation/cad-operation.component */ "./src/app/cad-operation/cad-operation.component.ts");
/* harmony import */ var _eventemitter_eventemitter_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../eventemitter/eventemitter.service */ "./src/app/eventemitter/eventemitter.service.ts");





let DefaultOperationPage = class DefaultOperationPage {
    constructor(modalController, changeDetectorRef) {
        this.modalController = modalController;
        this.changeDetectorRef = changeDetectorRef;
        this.order = undefined;
    }
    ngOnInit() {
        this.subscribe = _eventemitter_eventemitter_service__WEBPACK_IMPORTED_MODULE_4__["EventEmitterService"].get('defaultOrderData').subscribe((data) => {
            this.order = data;
        });
        _eventemitter_eventemitter_service__WEBPACK_IMPORTED_MODULE_4__["EventEmitterService"].get('requestOrderData').emit();
    }
    ngOnDestroy() {
        this.subscribe.unsubscribe();
    }
    expandedItem(item) {
        item.expanded = !item.expanded;
    }
    addOperation() {
        this.presentModal();
    }
    presentModal() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: src_app_cad_operation_cad_operation_component__WEBPACK_IMPORTED_MODULE_3__["CadOperationComponent"]
            });
            return yield modal.present();
        });
    }
};
DefaultOperationPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
];
DefaultOperationPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-defaultoperation',
        template: __webpack_require__(/*! raw-loader!./defaultoperation.page.html */ "./node_modules/raw-loader/index.js!./src/app/defaultoperation/defaultoperation.page.html"),
        styles: [__webpack_require__(/*! ./defaultoperation.page.scss */ "./src/app/defaultoperation/defaultoperation.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
], DefaultOperationPage);



/***/ })

}]);
//# sourceMappingURL=defaultoperation-defaultoperation-module-es2015.js.map