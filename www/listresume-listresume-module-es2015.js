(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["listresume-listresume-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/listresume/listresume.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/listresume/listresume.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n</ion-header>\n\n<ion-content>\n  <div *ngIf=\"order != undefined\">\n    <div *ngFor=\"let item of order.orderEquipment\">\n      <ion-card>\n        <ion-card-header>\n          <ion-item-divider>\n            <fa-icon icon=\"hammer\" size=\"2x\"></fa-icon>\n            <ion-label class=\"font-size-large m-left-4\"><strong>{{item.equipment.description}}</strong></ion-label>\n          </ion-item-divider>\n        </ion-card-header> \n        \n        <ion-card-header>\n          <ion-item-divider>\n            <fa-icon class=\"color-blue\" icon=\"map-marker-alt\" size=\"2x\"></fa-icon>\n            <ion-label class=\"font-size-large m-left-6\"><strong>{{item.installationArea.description}}</strong></ion-label>\n          </ion-item-divider>\n        </ion-card-header>\n        <ion-card-content>\n          <div (click)=\"expandOperation(item)\">\n            <ion-icon class=\"p-right-2 arrow-icons-right icon-default-size\" name=\"arrow-forward\" *ngIf=\"!item.operation_expanded\"></ion-icon>\n            <ion-icon class=\"p-right-2 arrow-icons-right icon-default-size\" name=\"arrow-down\" *ngIf=\"item.operation_expanded\"></ion-icon>\n            <ion-label class=\"align-center\">Operações</ion-label>\n          </div>          \n          <div *ngIf=\"item.operation_expanded\">\n            <ion-list>\n              <ion-item *ngFor=\"let operation of item.orderOperation\" (click)=\"expandComponent(operation)\">                \n                <div style=\"display: flex; align-items: center;\">\n                  <ion-label class=\"font-size-large font-arial color-secondary\">{{operation.description}}</ion-label>\n                </div>                \n              </ion-item>\n            </ion-list>          \n          </div>          \n        </ion-card-content>\n      </ion-card>\n    </div>\n\n    \n  </div>  \n</ion-content>\n"

/***/ }),

/***/ "./src/app/listresume/listresume.module.ts":
/*!*************************************************!*\
  !*** ./src/app/listresume/listresume.module.ts ***!
  \*************************************************/
/*! exports provided: ListResumePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListResumePageModule", function() { return ListResumePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _listresume_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./listresume.page */ "./src/app/listresume/listresume.page.ts");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm2015/angular-fontawesome.js");








const routes = [
    {
        path: '',
        component: _listresume_page__WEBPACK_IMPORTED_MODULE_6__["ListResumePage"]
    }
];
let ListResumePageModule = class ListResumePageModule {
};
ListResumePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FontAwesomeModule"]
        ],
        declarations: [_listresume_page__WEBPACK_IMPORTED_MODULE_6__["ListResumePage"]]
    })
], ListResumePageModule);



/***/ }),

/***/ "./src/app/listresume/listresume.page.scss":
/*!*************************************************!*\
  !*** ./src/app/listresume/listresume.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xpc3RyZXN1bWUvbGlzdHJlc3VtZS5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/listresume/listresume.page.ts":
/*!***********************************************!*\
  !*** ./src/app/listresume/listresume.page.ts ***!
  \***********************************************/
/*! exports provided: ListResumePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListResumePage", function() { return ListResumePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _eventemitter_eventemitter_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../eventemitter/eventemitter.service */ "./src/app/eventemitter/eventemitter.service.ts");
/* harmony import */ var _cad_operation_cad_operation_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../cad-operation/cad-operation.component */ "./src/app/cad-operation/cad-operation.component.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");





let ListResumePage = class ListResumePage {
    constructor(modalController) {
        this.modalController = modalController;
        this.order = undefined;
    }
    ngOnInit() {
        this.subscribe = _eventemitter_eventemitter_service__WEBPACK_IMPORTED_MODULE_2__["EventEmitterService"].get('listOrderData').subscribe((data) => {
            this.order = data;
            console.log(this.order);
        });
        _eventemitter_eventemitter_service__WEBPACK_IMPORTED_MODULE_2__["EventEmitterService"].get('requestOrderData').emit();
    }
    ngOnDestroy() {
        this.subscribe.unsubscribe();
    }
    expandOperation(item) {
        item.operation_expanded = !item.operation_expanded;
    }
    expandComponent(item) {
        this.presentModal(item);
    }
    presentModal(data) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _cad_operation_cad_operation_component__WEBPACK_IMPORTED_MODULE_3__["CadOperationComponent"],
                componentProps: {
                    'operationData': data
                }
            });
            return yield modal.present();
        });
    }
};
ListResumePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] }
];
ListResumePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-listresume',
        template: __webpack_require__(/*! raw-loader!./listresume.page.html */ "./node_modules/raw-loader/index.js!./src/app/listresume/listresume.page.html"),
        styles: [__webpack_require__(/*! ./listresume.page.scss */ "./src/app/listresume/listresume.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]])
], ListResumePage);



/***/ })

}]);
//# sourceMappingURL=listresume-listresume-module-es2015.js.map