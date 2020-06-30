(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["route-route-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/route/route.page.html":
/*!*****************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/route/route.page.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <div>\n      <div class=\"align-center\">\n        <ion-title>{{order.orderNumber}}</ion-title>\n      </div>\n      <div>\n        <div class=\"align-center\">\n          <ion-icon class=\"icon-default-size\" *ngIf=\"order.priority == 'urgent'\" name=\"bookmark\" color=\"primary\"></ion-icon>\n          <ion-icon class=\"icon-default-size\" *ngIf=\"order.priority == 'high'\"   name=\"bookmark\" color=\"warning\"></ion-icon>\n          <ion-icon class=\"icon-default-size\" *ngIf=\"order.priority == 'medium'\" name=\"bookmark\" color=\"medium\"></ion-icon>\n          <ion-icon class=\"icon-default-size\" *ngIf=\"order.priority == 'low'\"    name=\"bookmark\" color=\"light\"></ion-icon>\n          <ion-label name=\"orderType\" class=\"font-size-medium\">{{order.orderType}}</ion-label>\n\n          <ion-icon style=\"float: right;\" (click)=\"presentPopover()\" class=\"icon-default-size m-right-2\" name=\"settings\"></ion-icon>\n        </div>                  \n      </div>\n    </div>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"home/monitor\"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-tabs>\n    <ion-tab-bar slot=\"bottom\" color=\"\">\n      <ion-tab-button *ngFor=\"let tab of tabs\" [tab]=\"tab.route\">\n        <ion-icon [name]=\"tab.icon\"></ion-icon>\n      </ion-tab-button>\n    </ion-tab-bar>\n  </ion-tabs>\n</ion-content>"

/***/ }),

/***/ "./src/app/route/route.module.ts":
/*!***************************************!*\
  !*** ./src/app/route/route.module.ts ***!
  \***************************************/
/*! exports provided: RoutePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoutePageModule", function() { return RoutePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _route_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./route.page */ "./src/app/route/route.page.ts");







const routes = [
    {
        path: '',
        component: _route_page__WEBPACK_IMPORTED_MODULE_6__["RoutePage"],
        children: [
            {
                path: "resume",
                loadChildren: () => __webpack_require__.e(/*! import() | routeresume-routeresume-module */ "routeresume-routeresume-module").then(__webpack_require__.bind(null, /*! ../routeresume/routeresume.module */ "./src/app/routeresume/routeresume.module.ts")).then(m => m.RouteResumePageModule)
            },
            {
                path: "components",
                loadChildren: () => __webpack_require__.e(/*! import() | routecomponent-routecomponent-module */ "routecomponent-routecomponent-module").then(__webpack_require__.bind(null, /*! ../routecomponent/routecomponent.module */ "./src/app/routecomponent/routecomponent.module.ts")).then(m => m.RouteComponentPageModule)
            },
            {
                path: "hourWorked",
                loadChildren: () => __webpack_require__.e(/*! import() | routehourworked-routehourworked-module */ "routehourworked-routehourworked-module").then(__webpack_require__.bind(null, /*! ../routehourworked/routehourworked.module */ "./src/app/routehourworked/routehourworked.module.ts")).then(m => m.RouteHourworkedPageModule)
            },
            {
                path: "assignature",
                loadChildren: () => __webpack_require__.e(/*! import() | routeassignature-routeassignature-module */ "routeassignature-routeassignature-module").then(__webpack_require__.bind(null, /*! ../routeassignature/routeassignature.module */ "./src/app/routeassignature/routeassignature.module.ts")).then(m => m.RouteAssignaturePageModule)
            },
            {
                path: "",
                redirectTo: "resume",
                pathMatch: "full"
            }
        ]
    }
];
let RoutePageModule = class RoutePageModule {
};
RoutePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_route_page__WEBPACK_IMPORTED_MODULE_6__["RoutePage"]]
    })
], RoutePageModule);



/***/ }),

/***/ "./src/app/route/route.page.scss":
/*!***************************************!*\
  !*** ./src/app/route/route.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JvdXRlL3JvdXRlLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/route/route.page.ts":
/*!*************************************!*\
  !*** ./src/app/route/route.page.ts ***!
  \*************************************/
/*! exports provided: RoutePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoutePage", function() { return RoutePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _utils_viewUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/viewUtils */ "./src/app/utils/viewUtils.ts");
/* harmony import */ var _rest_restorder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../rest/restorder */ "./src/app/rest/restorder.ts");
/* harmony import */ var _utils_agilitUtils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/agilitUtils */ "./src/app/utils/agilitUtils.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _eventemitter_eventemitter_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../eventemitter/eventemitter.service */ "./src/app/eventemitter/eventemitter.service.ts");
/* harmony import */ var _popover_popover_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../popover/popover.component */ "./src/app/popover/popover.component.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");









let RoutePage = class RoutePage {
    constructor(activeRoute, viewUtils, restOrder, popoverController, events) {
        this.activeRoute = activeRoute;
        this.viewUtils = viewUtils;
        this.restOrder = restOrder;
        this.popoverController = popoverController;
        this.events = events;
        this.order = this.createOrderObject();
        this.currentPopover = null;
        this.tabs = this.obterTabs();
    }
    ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.loadOrderById(this.activeRoute.snapshot.paramMap.get('id'));
            this.requestOrderData = _eventemitter_eventemitter_service__WEBPACK_IMPORTED_MODULE_6__["EventEmitterService"].get('requestOrderData').subscribe(() => {
                this.emitOrderEvent();
            });
        });
    }
    obterTabs() {
        return [
            {
                route: "resume",
                icon: "clipboard"
            },
            {
                route: "components",
                icon: "build"
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
                if (_utils_agilitUtils__WEBPACK_IMPORTED_MODULE_4__["AgilitUtils"].isNullOrUndefined(response)) {
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
    loadOrderSuccess() {
        if (_utils_agilitUtils__WEBPACK_IMPORTED_MODULE_4__["AgilitUtils"].isNullOrUndefined(this.order)) {
            return;
        }
        _utils_agilitUtils__WEBPACK_IMPORTED_MODULE_4__["AgilitUtils"].verifyProperty(this.order, 'orderType', '');
        _utils_agilitUtils__WEBPACK_IMPORTED_MODULE_4__["AgilitUtils"].verifyProperty(this.order, 'priorityFormated', '');
        _utils_agilitUtils__WEBPACK_IMPORTED_MODULE_4__["AgilitUtils"].verifyProperty(this.order, 'openDateFormated', '');
        this.order.orderType = _utils_agilitUtils__WEBPACK_IMPORTED_MODULE_4__["AgilitUtils"].formatValues(this.order.orderLayout.orderLayout);
        this.order.priorityFormated = _utils_agilitUtils__WEBPACK_IMPORTED_MODULE_4__["AgilitUtils"].formatValues(this.order.priority);
        this.order.openDateFormated = new Date(this.order.openedDate).getDate() + '/' + new Date(this.order.openedDate).getMonth() + '/' + new Date(this.order.openedDate).getFullYear();
    }
    emitOrderEvent() {
        _eventemitter_eventemitter_service__WEBPACK_IMPORTED_MODULE_6__["EventEmitterService"].get('routeOrderData').emit(this.order);
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
                component: _popover_popover_component__WEBPACK_IMPORTED_MODULE_7__["PopoverComponent"],
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
RoutePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _utils_viewUtils__WEBPACK_IMPORTED_MODULE_2__["ViewUtils"] },
    { type: _rest_restorder__WEBPACK_IMPORTED_MODULE_3__["RestOrder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["PopoverController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["Events"] }
];
RoutePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-route',
        template: __webpack_require__(/*! raw-loader!./route.page.html */ "./node_modules/raw-loader/index.js!./src/app/route/route.page.html"),
        styles: [__webpack_require__(/*! ./route.page.scss */ "./src/app/route/route.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], _utils_viewUtils__WEBPACK_IMPORTED_MODULE_2__["ViewUtils"], _rest_restorder__WEBPACK_IMPORTED_MODULE_3__["RestOrder"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["PopoverController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["Events"]])
], RoutePage);



/***/ })

}]);
//# sourceMappingURL=route-route-module-es2015.js.map