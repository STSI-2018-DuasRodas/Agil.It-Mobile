(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["list-list-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/list/list.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/list/list.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <div>\r\n      <div class=\"align-center\">\r\n        <ion-title>{{order.orderNumber}}</ion-title>\r\n      </div>\r\n      <div>\r\n        <div class=\"align-center\">\r\n          <ion-icon class=\"icon-default-size\" *ngIf=\"order.priority == 'urgent'\" name=\"bookmark\" color=\"primary\"></ion-icon>\r\n          <ion-icon class=\"icon-default-size\" *ngIf=\"order.priority == 'high'\"   name=\"bookmark\" color=\"warning\"></ion-icon>\r\n          <ion-icon class=\"icon-default-size\" *ngIf=\"order.priority == 'medium'\" name=\"bookmark\" color=\"medium\"></ion-icon>\r\n          <ion-icon class=\"icon-default-size\" *ngIf=\"order.priority == 'low'\"    name=\"bookmark\" color=\"light\"></ion-icon>\r\n          <ion-label name=\"orderType\" class=\"font-size-medium\">{{order.orderType}}</ion-label>\r\n\r\n          <ion-icon style=\"float: right;\" (click)=\"presentPopover()\" class=\"icon-default-size m-right-2\" name=\"settings\"></ion-icon>\r\n        </div>                  \r\n      </div>\r\n    </div>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"home/monitor\"></ion-back-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-tabs>\r\n    <ion-tab-bar slot=\"bottom\" color=\"\">\r\n      <ion-tab-button *ngFor=\"let tab of tabs\" [tab]=\"tab.route\">\r\n        <ion-icon [name]=\"tab.icon\"></ion-icon>\r\n      </ion-tab-button>\r\n    </ion-tab-bar>\r\n  </ion-tabs>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/list/list.module.ts":
/*!*************************************!*\
  !*** ./src/app/list/list.module.ts ***!
  \*************************************/
/*! exports provided: ListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListPageModule", function() { return ListPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./list.page */ "./src/app/list/list.page.ts");







const routes = [
    {
        path: '',
        component: _list_page__WEBPACK_IMPORTED_MODULE_6__["ListPage"],
        children: [
            {
                path: "resume",
                loadChildren: () => __webpack_require__.e(/*! import() | listresume-listresume-module */ "listresume-listresume-module").then(__webpack_require__.bind(null, /*! ../listresume/listresume.module */ "./src/app/listresume/listresume.module.ts")).then(m => m.ListResumePageModule)
            },
            {
                path: "hourWorked",
                loadChildren: () => __webpack_require__.e(/*! import() | listhourworked-listhourworked-module */ "listhourworked-listhourworked-module").then(__webpack_require__.bind(null, /*! ../listhourworked/listhourworked.module */ "./src/app/listhourworked/listhourworked.module.ts")).then(m => m.ListHourworkedPageModule)
            },
            {
                path: "assignature",
                loadChildren: () => __webpack_require__.e(/*! import() | listassignature-listassignature-module */ "listassignature-listassignature-module").then(__webpack_require__.bind(null, /*! ../listassignature/listassignature.module */ "./src/app/listassignature/listassignature.module.ts")).then(m => m.ListassignaturePageModule)
            },
            {
                path: "",
                redirectTo: "resume",
                pathMatch: "full"
            }
        ]
    }
];
let ListPageModule = class ListPageModule {
};
ListPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_list_page__WEBPACK_IMPORTED_MODULE_6__["ListPage"]]
    })
], ListPageModule);



/***/ }),

/***/ "./src/app/list/list.page.scss":
/*!*************************************!*\
  !*** ./src/app/list/list.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xpc3QvbGlzdC5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/list/list.page.ts":
/*!***********************************!*\
  !*** ./src/app/list/list.page.ts ***!
  \***********************************/
/*! exports provided: ListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListPage", function() { return ListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_utils_agilitUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/utils/agilitUtils */ "./src/app/utils/agilitUtils.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_popover_popover_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/popover/popover.component */ "./src/app/popover/popover.component.ts");
/* harmony import */ var _eventemitter_eventemitter_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../eventemitter/eventemitter.service */ "./src/app/eventemitter/eventemitter.service.ts");
/* harmony import */ var _rest_restorder__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../rest/restorder */ "./src/app/rest/restorder.ts");
/* harmony import */ var _utils_viewUtils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/viewUtils */ "./src/app/utils/viewUtils.ts");









let ListPage = class ListPage {
    constructor(activeRoute, menuCtrl, agilitUtils, popoverController, events, restOrder, viewUtils) {
        this.activeRoute = activeRoute;
        this.menuCtrl = menuCtrl;
        this.agilitUtils = agilitUtils;
        this.popoverController = popoverController;
        this.events = events;
        this.restOrder = restOrder;
        this.viewUtils = viewUtils;
        this.order = this.createOrderObject();
        this.tabs = this.obterTabs();
        this.currentPopover = null;
    }
    ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.loadOrderById(this.activeRoute.snapshot.paramMap.get('id'));
            this.requestOrderData = _eventemitter_eventemitter_service__WEBPACK_IMPORTED_MODULE_6__["EventEmitterService"].get('requestOrderData').subscribe(() => {
                this.emitOrderEvent();
            });
        });
    }
    ionViewWillEnter() {
        this.menuCtrl.enable(false);
    }
    ionViewWillLeave() {
        this.menuCtrl.enable(true);
    }
    loadOrderById(idOrder) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (idOrder == '') {
                return;
            }
            yield this.viewUtils.showProgressBar();
            yield this.restOrder.loadOrder(idOrder).then((response) => {
                this.viewUtils.hideProgressBar();
                if (src_app_utils_agilitUtils__WEBPACK_IMPORTED_MODULE_2__["AgilitUtils"].isNullOrUndefined(response)) {
                    return;
                }
                this.order = response;
                this.loadOrderSuccess();
                _eventemitter_eventemitter_service__WEBPACK_IMPORTED_MODULE_6__["EventEmitterService"].get('listOrderData').emit(this.order);
            }).catch(error => {
                console.log('Error');
                this.viewUtils.hideProgressBar();
            });
        });
    }
    emitOrderEvent() {
        _eventemitter_eventemitter_service__WEBPACK_IMPORTED_MODULE_6__["EventEmitterService"].get('listOrderData').emit(this.order);
    }
    loadOrderSuccess() {
        if (src_app_utils_agilitUtils__WEBPACK_IMPORTED_MODULE_2__["AgilitUtils"].isNullOrUndefined(this.order)) {
            return;
        }
        src_app_utils_agilitUtils__WEBPACK_IMPORTED_MODULE_2__["AgilitUtils"].verifyProperty(this.order, 'orderType', '');
        src_app_utils_agilitUtils__WEBPACK_IMPORTED_MODULE_2__["AgilitUtils"].verifyProperty(this.order, 'priorityFormated', '');
        src_app_utils_agilitUtils__WEBPACK_IMPORTED_MODULE_2__["AgilitUtils"].verifyProperty(this.order, 'openDateFormated', '');
        this.order.orderType = src_app_utils_agilitUtils__WEBPACK_IMPORTED_MODULE_2__["AgilitUtils"].formatValues(this.order.orderLayout.orderLayout);
        this.order.priorityFormated = src_app_utils_agilitUtils__WEBPACK_IMPORTED_MODULE_2__["AgilitUtils"].formatValues(this.order.priority);
        this.order.openDateFormated = new Date(this.order.openedDate).getDate() + '/' + new Date(this.order.openedDate).getMonth() + '/' + new Date(this.order.openedDate).getFullYear();
        for (const equipament of this.order.orderEquipment) {
            src_app_utils_agilitUtils__WEBPACK_IMPORTED_MODULE_2__["AgilitUtils"].verifyProperty(equipament, 'operation_expanded', false);
            for (const operation of equipament.orderOperation) {
                src_app_utils_agilitUtils__WEBPACK_IMPORTED_MODULE_2__["AgilitUtils"].verifyProperty(operation, 'component_expanded', false);
            }
        }
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
                component: src_app_popover_popover_component__WEBPACK_IMPORTED_MODULE_5__["PopoverComponent"],
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
    obterTabs() {
        return [
            {
                route: "resume",
                icon: "clipboard"
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
};
ListPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"] },
    { type: src_app_utils_agilitUtils__WEBPACK_IMPORTED_MODULE_2__["AgilitUtils"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["PopoverController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Events"] },
    { type: _rest_restorder__WEBPACK_IMPORTED_MODULE_7__["RestOrder"] },
    { type: _utils_viewUtils__WEBPACK_IMPORTED_MODULE_8__["ViewUtils"] }
];
ListPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-list',
        template: __webpack_require__(/*! raw-loader!./list.page.html */ "./node_modules/raw-loader/index.js!./src/app/list/list.page.html"),
        styles: [__webpack_require__(/*! ./list.page.scss */ "./src/app/list/list.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"], src_app_utils_agilitUtils__WEBPACK_IMPORTED_MODULE_2__["AgilitUtils"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["PopoverController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Events"], _rest_restorder__WEBPACK_IMPORTED_MODULE_7__["RestOrder"], _utils_viewUtils__WEBPACK_IMPORTED_MODULE_8__["ViewUtils"]])
], ListPage);



/***/ })

}]);
//# sourceMappingURL=list-list-module-es2015.js.map