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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _route_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./route.page */ "./src/app/route/route.page.ts");







var routes = [
    {
        path: '',
        component: _route_page__WEBPACK_IMPORTED_MODULE_6__["RoutePage"],
        children: [
            {
                path: "resume",
                loadChildren: function () { return __webpack_require__.e(/*! import() | routeresume-routeresume-module */ "routeresume-routeresume-module").then(__webpack_require__.bind(null, /*! ../routeresume/routeresume.module */ "./src/app/routeresume/routeresume.module.ts")).then(function (m) { return m.RouteResumePageModule; }); }
            },
            {
                path: "components",
                loadChildren: function () { return __webpack_require__.e(/*! import() | routecomponent-routecomponent-module */ "routecomponent-routecomponent-module").then(__webpack_require__.bind(null, /*! ../routecomponent/routecomponent.module */ "./src/app/routecomponent/routecomponent.module.ts")).then(function (m) { return m.RouteComponentPageModule; }); }
            },
            {
                path: "hourWorked",
                loadChildren: function () { return __webpack_require__.e(/*! import() | routehourworked-routehourworked-module */ "routehourworked-routehourworked-module").then(__webpack_require__.bind(null, /*! ../routehourworked/routehourworked.module */ "./src/app/routehourworked/routehourworked.module.ts")).then(function (m) { return m.RouteHourworkedPageModule; }); }
            },
            {
                path: "assignature",
                loadChildren: function () { return __webpack_require__.e(/*! import() | routeassignature-routeassignature-module */ "routeassignature-routeassignature-module").then(__webpack_require__.bind(null, /*! ../routeassignature/routeassignature.module */ "./src/app/routeassignature/routeassignature.module.ts")).then(function (m) { return m.RouteAssignaturePageModule; }); }
            },
            {
                path: "",
                redirectTo: "resume",
                pathMatch: "full"
            }
        ]
    }
];
var RoutePageModule = /** @class */ (function () {
    function RoutePageModule() {
    }
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
    return RoutePageModule;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _utils_viewUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/viewUtils */ "./src/app/utils/viewUtils.ts");
/* harmony import */ var _rest_restorder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../rest/restorder */ "./src/app/rest/restorder.ts");
/* harmony import */ var _utils_agilitUtils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/agilitUtils */ "./src/app/utils/agilitUtils.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _eventemitter_eventemitter_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../eventemitter/eventemitter.service */ "./src/app/eventemitter/eventemitter.service.ts");
/* harmony import */ var _popover_popover_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../popover/popover.component */ "./src/app/popover/popover.component.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");









var RoutePage = /** @class */ (function () {
    function RoutePage(activeRoute, viewUtils, restOrder, popoverController, events) {
        this.activeRoute = activeRoute;
        this.viewUtils = viewUtils;
        this.restOrder = restOrder;
        this.popoverController = popoverController;
        this.events = events;
        this.order = this.createOrderObject();
        this.currentPopover = null;
        this.tabs = this.obterTabs();
    }
    RoutePage.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadOrderById(this.activeRoute.snapshot.paramMap.get('id'))];
                    case 1:
                        _a.sent();
                        this.requestOrderData = _eventemitter_eventemitter_service__WEBPACK_IMPORTED_MODULE_6__["EventEmitterService"].get('requestOrderData').subscribe(function () {
                            _this.emitOrderEvent();
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    RoutePage.prototype.obterTabs = function () {
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
    };
    RoutePage.prototype.loadOrderById = function (idOrder) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (idOrder == '') {
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this.viewUtils.showProgressBar()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.restOrder.loadOrder(idOrder).then(function (response) {
                                _this.viewUtils.hideProgressBar();
                                if (_utils_agilitUtils__WEBPACK_IMPORTED_MODULE_4__["AgilitUtils"].isNullOrUndefined(response)) {
                                    return;
                                }
                                _this.order = response;
                                _this.loadOrderSuccess();
                                _this.emitOrderEvent();
                            }).catch(function (error) {
                                console.log('Error');
                                _this.viewUtils.hideProgressBar();
                            })];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    RoutePage.prototype.loadOrderSuccess = function () {
        if (_utils_agilitUtils__WEBPACK_IMPORTED_MODULE_4__["AgilitUtils"].isNullOrUndefined(this.order)) {
            return;
        }
        _utils_agilitUtils__WEBPACK_IMPORTED_MODULE_4__["AgilitUtils"].verifyProperty(this.order, 'orderType', '');
        _utils_agilitUtils__WEBPACK_IMPORTED_MODULE_4__["AgilitUtils"].verifyProperty(this.order, 'priorityFormated', '');
        _utils_agilitUtils__WEBPACK_IMPORTED_MODULE_4__["AgilitUtils"].verifyProperty(this.order, 'openDateFormated', '');
        this.order.orderType = _utils_agilitUtils__WEBPACK_IMPORTED_MODULE_4__["AgilitUtils"].formatValues(this.order.orderLayout.orderLayout);
        this.order.priorityFormated = _utils_agilitUtils__WEBPACK_IMPORTED_MODULE_4__["AgilitUtils"].formatValues(this.order.priority);
        this.order.openDateFormated = new Date(this.order.openedDate).getDate() + '/' + new Date(this.order.openedDate).getMonth() + '/' + new Date(this.order.openedDate).getFullYear();
    };
    RoutePage.prototype.emitOrderEvent = function () {
        _eventemitter_eventemitter_service__WEBPACK_IMPORTED_MODULE_6__["EventEmitterService"].get('routeOrderData').emit(this.order);
    };
    RoutePage.prototype.createOrderObject = function () {
        return {
            orderNumber: '',
            type: '',
            orderTypeId: ''
        };
    };
    RoutePage.prototype.presentPopover = function (ev) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var popover;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.popoverController.create({
                            component: _popover_popover_component__WEBPACK_IMPORTED_MODULE_7__["PopoverComponent"],
                            event: ev,
                            id: 'popover',
                            translucent: true
                        })];
                    case 1:
                        popover = _a.sent();
                        this.currentPopover = popover;
                        this.subscribeMethods();
                        return [4 /*yield*/, popover.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    RoutePage.prototype.subscribeMethods = function () {
        var _this = this;
        this.events.subscribe('assume', function () {
            console.log("Assumir");
            _this.unSubscribeMethods();
        });
        this.events.subscribe('start', function () {
            console.log("Inicar");
            _this.unSubscribeMethods();
        });
        this.events.subscribe('pause', function () {
            console.log("Pausar");
            _this.unSubscribeMethods();
        });
        this.events.subscribe('delegate', function () {
            console.log("Delegar");
            _this.unSubscribeMethods();
        });
        this.events.subscribe('invite', function () {
            console.log("Convidar");
            _this.unSubscribeMethods();
        });
        this.events.subscribe('requestParticipation', function () {
            console.log("Solicitar Participação");
            _this.unSubscribeMethods();
        });
        this.events.subscribe('equipamentStatus', function () {
            console.log("status do equipamento");
            _this.unSubscribeMethods();
        });
        this.events.subscribe('checkList', function () {
            console.log("CheckList");
            _this.unSubscribeMethods();
        });
    };
    RoutePage.prototype.unSubscribeMethods = function () {
        this.events.unsubscribe('assume');
        this.events.unsubscribe('start');
        this.events.unsubscribe('pause');
        this.events.unsubscribe('delegate');
        this.events.unsubscribe('invite');
        this.events.unsubscribe('requestParticipation');
        this.events.unsubscribe('equipamentStatus');
        this.events.unsubscribe('checkList');
    };
    RoutePage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
        { type: _utils_viewUtils__WEBPACK_IMPORTED_MODULE_2__["ViewUtils"] },
        { type: _rest_restorder__WEBPACK_IMPORTED_MODULE_3__["RestOrder"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["PopoverController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["Events"] }
    ]; };
    RoutePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-route',
            template: __webpack_require__(/*! raw-loader!./route.page.html */ "./node_modules/raw-loader/index.js!./src/app/route/route.page.html"),
            styles: [__webpack_require__(/*! ./route.page.scss */ "./src/app/route/route.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], _utils_viewUtils__WEBPACK_IMPORTED_MODULE_2__["ViewUtils"], _rest_restorder__WEBPACK_IMPORTED_MODULE_3__["RestOrder"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["PopoverController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["Events"]])
    ], RoutePage);
    return RoutePage;
}());



/***/ })

}]);
//# sourceMappingURL=route-route-module-es5.js.map