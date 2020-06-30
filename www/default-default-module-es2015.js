(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default-default-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/default/default.page.html":
/*!*********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/default/default.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <div>\n      <div class=\"align-center\">\n        <ion-title>{{order.orderNumber}}</ion-title>\n      </div>\n      <div>\n        <div class=\"align-center\">\n          <ion-icon class=\"icon-default-size\" *ngIf=\"order.priority == 'urgent'\" name=\"bookmark\" color=\"primary\"></ion-icon>\n          <ion-icon class=\"icon-default-size\" *ngIf=\"order.priority == 'high'\"   name=\"bookmark\" color=\"warning\"></ion-icon>\n          <ion-icon class=\"icon-default-size\" *ngIf=\"order.priority == 'medium'\" name=\"bookmark\" color=\"medium\"></ion-icon>\n          <ion-icon class=\"icon-default-size\" *ngIf=\"order.priority == 'low'\"    name=\"bookmark\" color=\"light\"></ion-icon>\n          <ion-label name=\"orderType\" class=\"font-size-medium\">{{order.orderType}}</ion-label>\n\n          <ion-icon style=\"float: right;\" (click)=\"presentPopover()\" class=\"icon-default-size m-right-2\" name=\"settings\"></ion-icon>\n        </div>                  \n      </div>\n    </div>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"home/monitor\"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-tabs>\n    <ion-tab-bar slot=\"bottom\" color=\"\">\n      <ion-tab-button *ngFor=\"let tab of tabs\" [tab]=\"tab.route\">\n        <ion-icon [name]=\"tab.icon\"></ion-icon>\n      </ion-tab-button>\n    </ion-tab-bar>\n  </ion-tabs>\n</ion-content>"

/***/ }),

/***/ "./src/app/default/default.module.ts":
/*!*******************************************!*\
  !*** ./src/app/default/default.module.ts ***!
  \*******************************************/
/*! exports provided: DefaultPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultPageModule", function() { return DefaultPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _default_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./default.page */ "./src/app/default/default.page.ts");







const routes = [
    {
        path: '',
        component: _default_page__WEBPACK_IMPORTED_MODULE_6__["DefaultPage"],
        children: [
            {
                path: "resume",
                loadChildren: () => __webpack_require__.e(/*! import() | defaultresume-defaultresume-module */ "defaultresume-defaultresume-module").then(__webpack_require__.bind(null, /*! ../defaultresume/defaultresume.module */ "./src/app/defaultresume/defaultresume.module.ts")).then(m => m.DefaultResumePageModule)
            },
            {
                path: "problem",
                loadChildren: () => __webpack_require__.e(/*! import() | defaultproblem-defaultproblem-module */ "defaultproblem-defaultproblem-module").then(__webpack_require__.bind(null, /*! ../defaultproblem/defaultproblem.module */ "./src/app/defaultproblem/defaultproblem.module.ts")).then(m => m.DefaultProblemPageModule)
            },
            {
                path: "operation",
                loadChildren: () => __webpack_require__.e(/*! import() | defaultoperation-defaultoperation-module */ "defaultoperation-defaultoperation-module").then(__webpack_require__.bind(null, /*! ../defaultoperation/defaultoperation.module */ "./src/app/defaultoperation/defaultoperation.module.ts")).then(m => m.DefaultOperationPageModule)
            },
            {
                path: "hourWorked",
                loadChildren: () => __webpack_require__.e(/*! import() | defaulthourworked-defaulthourworked-module */ "defaulthourworked-defaulthourworked-module").then(__webpack_require__.bind(null, /*! ../defaulthourworked/defaulthourworked.module */ "./src/app/defaulthourworked/defaulthourworked.module.ts")).then(m => m.DefaultHourWorkedPageModule)
            },
            {
                path: "assignature",
                loadChildren: () => __webpack_require__.e(/*! import() | defaultassignature-defaultassignature-module */ "defaultassignature-defaultassignature-module").then(__webpack_require__.bind(null, /*! ../defaultassignature/defaultassignature.module */ "./src/app/defaultassignature/defaultassignature.module.ts")).then(m => m.DefaultAssignaturePageModule)
            },
            {
                path: "",
                redirectTo: "resume",
                pathMatch: "full"
            }
        ]
    }
];
let DefaultPageModule = class DefaultPageModule {
};
DefaultPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_default_page__WEBPACK_IMPORTED_MODULE_6__["DefaultPage"]]
    })
], DefaultPageModule);



/***/ }),

/***/ "./src/app/default/default.page.scss":
/*!*******************************************!*\
  !*** ./src/app/default/default.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlZmF1bHQvZGVmYXVsdC5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/default/default.page.ts":
/*!*****************************************!*\
  !*** ./src/app/default/default.page.ts ***!
  \*****************************************/
/*! exports provided: DefaultPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultPage", function() { return DefaultPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_popover_popover_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/popover/popover.component */ "./src/app/popover/popover.component.ts");
/* harmony import */ var src_app_utils_agilitUtils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/utils/agilitUtils */ "./src/app/utils/agilitUtils.ts");
/* harmony import */ var src_app_rest_restorder__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/rest/restorder */ "./src/app/rest/restorder.ts");
/* harmony import */ var src_app_utils_viewUtils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/utils/viewUtils */ "./src/app/utils/viewUtils.ts");
/* harmony import */ var _eventemitter_eventemitter_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../eventemitter/eventemitter.service */ "./src/app/eventemitter/eventemitter.service.ts");









let DefaultPage = class DefaultPage {
    constructor(activeRoute, menuCtrl, popoverController, events, agilitUtils, restOrder, viewUtils) {
        this.activeRoute = activeRoute;
        this.menuCtrl = menuCtrl;
        this.popoverController = popoverController;
        this.events = events;
        this.agilitUtils = agilitUtils;
        this.restOrder = restOrder;
        this.viewUtils = viewUtils;
        this.tabs = this.defineTabs();
        this.order = this.createOrderObject();
        this.currentPopover = null;
    }
    ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.loadOrderById(this.activeRoute.snapshot.paramMap.get('id'));
            this.requestOrderData = _eventemitter_eventemitter_service__WEBPACK_IMPORTED_MODULE_8__["EventEmitterService"].get('requestOrderData').subscribe(() => {
                this.emitOrderEvent();
            });
        });
    }
    ngOnDestroy() {
        this.requestOrderData.unsubscribe();
    }
    ionViewWillEnter() {
        this.menuCtrl.enable(false);
    }
    ionViewWillLeave() {
        this.menuCtrl.enable(true);
    }
    defineTabs() {
        return [
            {
                route: "resume",
                icon: "clipboard"
            },
            {
                route: "problem",
                icon: "alert"
            },
            {
                route: "operation",
                icon: "construct"
            },
            {
                route: "hourWorked",
                icon: "alarm"
            },
            {
                route: "assignature",
                icon: "create"
            }
        ];
    }
    loadOrderById(idOrder) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (idOrder == '') {
                return;
            }
            yield this.viewUtils.showProgressBar();
            yield this.restOrder.loadOrder(idOrder).then((response) => {
                this.viewUtils.hideProgressBar();
                if (src_app_utils_agilitUtils__WEBPACK_IMPORTED_MODULE_5__["AgilitUtils"].isNullOrUndefined(response)) {
                    return;
                }
                this.order = response;
                this.loadOrderSuccess();
                this.emitOrderEvent();
            }).catch(error => {
                console.log('Error');
                this.viewUtils.hideProgressBar();
            });
        });
    }
    emitOrderEvent() {
        _eventemitter_eventemitter_service__WEBPACK_IMPORTED_MODULE_8__["EventEmitterService"].get('defaultOrderData').emit(this.order);
    }
    loadOrderSuccess() {
        if (src_app_utils_agilitUtils__WEBPACK_IMPORTED_MODULE_5__["AgilitUtils"].isNullOrUndefined(this.order)) {
            return;
        }
        src_app_utils_agilitUtils__WEBPACK_IMPORTED_MODULE_5__["AgilitUtils"].verifyProperty(this.order, 'orderType', '');
        src_app_utils_agilitUtils__WEBPACK_IMPORTED_MODULE_5__["AgilitUtils"].verifyProperty(this.order, 'priorityFormated', '');
        src_app_utils_agilitUtils__WEBPACK_IMPORTED_MODULE_5__["AgilitUtils"].verifyProperty(this.order, 'openDateFormated', '');
        this.order.orderType = src_app_utils_agilitUtils__WEBPACK_IMPORTED_MODULE_5__["AgilitUtils"].formatValues(this.order.orderLayout.orderLayout);
        this.order.priorityFormated = src_app_utils_agilitUtils__WEBPACK_IMPORTED_MODULE_5__["AgilitUtils"].formatValues(this.order.priority);
        this.order.openDateFormated = new Date(this.order.openedDate).getDate() + '/' + new Date(this.order.openedDate).getMonth() + '/' + new Date(this.order.openedDate).getFullYear();
    }
    createOrderObject() {
        return {
            orderNumber: '',
            type: '',
            orderTypeId: ''
        };
    }
    presentPopover(ev) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const popover = yield this.popoverController.create({
                component: src_app_popover_popover_component__WEBPACK_IMPORTED_MODULE_4__["PopoverComponent"],
                event: ev,
                id: 'popover',
                translucent: true
            });
            this.currentPopover = popover;
            this.subscribeMethods();
            return yield popover.present();
        });
    }
    subscribeMethods() {
        this.events.subscribe('assume', () => {
            console.log("Assumir");
            this.unSubscribeMethods();
        });
        this.events.subscribe('start', () => {
            console.log("Inicar");
            this.unSubscribeMethods();
        });
        this.events.subscribe('pause', () => {
            console.log("Pausar");
            this.unSubscribeMethods();
        });
        this.events.subscribe('delegate', () => {
            console.log("Delegar");
            this.unSubscribeMethods();
        });
        this.events.subscribe('invite', () => {
            console.log("Convidar");
            this.unSubscribeMethods();
        });
        this.events.subscribe('requestParticipation', () => {
            console.log("Solicitar Participação");
            this.unSubscribeMethods();
        });
        this.events.subscribe('equipamentStatus', () => {
            console.log("status do equipamento");
            this.unSubscribeMethods();
        });
        this.events.subscribe('checkList', () => {
            console.log("CheckList");
            this.unSubscribeMethods();
        });
    }
    unSubscribeMethods() {
        this.events.unsubscribe('assume');
        this.events.unsubscribe('start');
        this.events.unsubscribe('pause');
        this.events.unsubscribe('delegate');
        this.events.unsubscribe('invite');
        this.events.unsubscribe('requestParticipation');
        this.events.unsubscribe('equipamentStatus');
        this.events.unsubscribe('checkList');
    }
};
DefaultPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"] },
    { type: src_app_utils_agilitUtils__WEBPACK_IMPORTED_MODULE_5__["AgilitUtils"] },
    { type: src_app_rest_restorder__WEBPACK_IMPORTED_MODULE_6__["RestOrder"] },
    { type: src_app_utils_viewUtils__WEBPACK_IMPORTED_MODULE_7__["ViewUtils"] }
];
DefaultPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-default',
        template: __webpack_require__(/*! raw-loader!./default.page.html */ "./node_modules/raw-loader/index.js!./src/app/default/default.page.html"),
        styles: [__webpack_require__(/*! ./default.page.scss */ "./src/app/default/default.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"], src_app_utils_agilitUtils__WEBPACK_IMPORTED_MODULE_5__["AgilitUtils"], src_app_rest_restorder__WEBPACK_IMPORTED_MODULE_6__["RestOrder"], src_app_utils_viewUtils__WEBPACK_IMPORTED_MODULE_7__["ViewUtils"]])
], DefaultPage);



/***/ })

}]);
//# sourceMappingURL=default-default-module-es2015.js.map