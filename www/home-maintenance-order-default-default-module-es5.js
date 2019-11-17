(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-maintenance-order-default-default-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/home/maintenance-order/default/default.page.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/maintenance-order/default/default.page.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <div class=\"align-center\" style=\"margin-right: 8%;\">\n      <ion-row>\n        <ion-col size=\"12\">\n          <ion-title>{{order.orderNumber}}</ion-title>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"3\"></ion-col>\n        <ion-col size=\"1\">\n          <ion-icon class=\"icon-default-size\" *ngIf=\"order.orderTypeId == 0\" name=\"bookmark\" color=\"primary\"></ion-icon>\n          <ion-icon class=\"icon-default-size\" *ngIf=\"order.orderTypeId == 1\" name=\"bookmark\" color=\"warning\"></ion-icon>\n          <ion-icon class=\"icon-default-size\" *ngIf=\"order.orderTypeId == 2\" name=\"bookmark\" color=\"medium\"></ion-icon>\n        </ion-col>\n        <ion-col size=\"5\">\n          <ion-label class=\"font-size-medium\">{{order.type}}</ion-label>\n        </ion-col>\n        <ion-col size=\"2\"></ion-col>\n        <ion-col size=\"1\">\n          <ion-icon (click)=\"presentPopover()\" class=\"icon-default-size\" name=\"settings\"></ion-icon>\n        </ion-col>\n      </ion-row>\n    </div>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"home/monitor\"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-tabs>\n    <ion-tab-bar slot=\"bottom\" color=\"\">\n      <ion-tab-button *ngFor=\"let tab of tabs\" [tab]=\"tab.route\">\n        <ion-icon [name]=\"tab.icon\"></ion-icon>\n      </ion-tab-button>\n    </ion-tab-bar>\n  </ion-tabs>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/home/maintenance-order/default/default.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/home/maintenance-order/default/default.module.ts ***!
  \******************************************************************/
/*! exports provided: DefaultPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultPageModule", function() { return DefaultPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _default_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./default.page */ "./src/app/home/maintenance-order/default/default.page.ts");







var routes = [
    {
        path: '',
        component: _default_page__WEBPACK_IMPORTED_MODULE_6__["DefaultPage"],
        children: [
            {
                path: "resume",
                loadChildren: function () { return __webpack_require__.e(/*! import() | tabs-resume-module */ "tabs-resume-module").then(__webpack_require__.bind(null, /*! ../tabs/resume.module */ "./src/app/home/maintenance-order/tabs/resume.module.ts")).then(function (m) { return m.ResumePageModule; }); }
            },
            {
                path: "problems",
                loadChildren: function () { return __webpack_require__.e(/*! import() | tabs-problems-module */ "tabs-problems-module").then(__webpack_require__.bind(null, /*! ../tabs/problems.module */ "./src/app/home/maintenance-order/tabs/problems.module.ts")).then(function (m) { return m.ProblemsPageModule; }); }
            },
            {
                path: "components",
                loadChildren: function () { return __webpack_require__.e(/*! import() | tabs-components-module */ "tabs-components-module").then(__webpack_require__.bind(null, /*! ../tabs/components.module */ "./src/app/home/maintenance-order/tabs/components.module.ts")).then(function (m) { return m.ComponentsPageModule; }); }
            },
            {
                path: "operations",
                loadChildren: function () { return __webpack_require__.e(/*! import() | tabs-operations-module */ "tabs-operations-module").then(__webpack_require__.bind(null, /*! ../tabs/operations.module */ "./src/app/home/maintenance-order/tabs/operations.module.ts")).then(function (m) { return m.OperationsPageModule; }); }
            },
            {
                path: "hourWorked",
                loadChildren: function () { return __webpack_require__.e(/*! import() | tabs-hour-worked-module */ "tabs-hour-worked-module").then(__webpack_require__.bind(null, /*! ../tabs/hour-worked.module */ "./src/app/home/maintenance-order/tabs/hour-worked.module.ts")).then(function (m) { return m.HourWorkedPageModule; }); }
            },
            {
                path: "assignature",
                loadChildren: function () { return __webpack_require__.e(/*! import() | tabs-assignature-module */ "tabs-assignature-module").then(__webpack_require__.bind(null, /*! ../tabs/assignature.module */ "./src/app/home/maintenance-order/tabs/assignature.module.ts")).then(function (m) { return m.AssignaturePageModule; }); }
            },
            {
                path: "",
                redirectTo: "resume",
                pathMatch: "full"
            }
        ]
    }
];
var DefaultPageModule = /** @class */ (function () {
    function DefaultPageModule() {
    }
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
    return DefaultPageModule;
}());



/***/ }),

/***/ "./src/app/home/maintenance-order/default/default.page.scss":
/*!******************************************************************!*\
  !*** ./src/app/home/maintenance-order/default/default.page.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvbWFpbnRlbmFuY2Utb3JkZXIvZGVmYXVsdC9kZWZhdWx0LnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/home/maintenance-order/default/default.page.ts":
/*!****************************************************************!*\
  !*** ./src/app/home/maintenance-order/default/default.page.ts ***!
  \****************************************************************/
/*! exports provided: DefaultPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultPage", function() { return DefaultPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_popover_popover_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/popover/popover.component */ "./src/app/popover/popover.component.ts");





var DefaultPage = /** @class */ (function () {
    function DefaultPage(activeRoute, menuCtrl, popoverController, events) {
        this.activeRoute = activeRoute;
        this.menuCtrl = menuCtrl;
        this.popoverController = popoverController;
        this.events = events;
        this.tabs = this.obterTabs();
        this.order = {};
        this.currentPopover = null;
        this.loadOrderById(this.activeRoute.snapshot.paramMap.get('id'));
    }
    DefaultPage.prototype.ngOnInit = function () {
    };
    DefaultPage.prototype.ionViewWillEnter = function () {
        this.menuCtrl.enable(false);
    };
    DefaultPage.prototype.ionViewWillLeave = function () {
        this.menuCtrl.enable(true);
    };
    DefaultPage.prototype.obterTabs = function () {
        return [
            {
                route: "resume",
                icon: "clipboard"
            },
            {
                route: "problems",
                icon: "alert"
            },
            {
                route: "components",
                icon: "build"
            },
            {
                route: "operations",
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
    };
    DefaultPage.prototype.loadOrderById = function (idOrder) {
        this.order = {
            "id": 1,
            "integrationID": "1000",
            "createdAt": "17/01/2016",
            "deleted": 0,
            "orderNumber": "OM - 2445492/DJ0449",
            "priority": "urgent",
            "type": "Preventiva",
            "userId": 1,
            "installationAreaId": 1,
            "orderTypeId": 0,
            "orderClassificationId": 1,
            "orderEquipamentId": 1,
            "equipamentName": "DHA03005/007"
        };
    };
    DefaultPage.prototype.presentPopover = function (ev) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var popover;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.popoverController.create({
                            component: src_app_popover_popover_component__WEBPACK_IMPORTED_MODULE_4__["PopoverComponent"],
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
    DefaultPage.prototype.subscribeMethods = function () {
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
    DefaultPage.prototype.unSubscribeMethods = function () {
        this.events.unsubscribe('assume');
        this.events.unsubscribe('start');
        this.events.unsubscribe('pause');
        this.events.unsubscribe('delegate');
        this.events.unsubscribe('invite');
        this.events.unsubscribe('requestParticipation');
        this.events.unsubscribe('equipamentStatus');
        this.events.unsubscribe('checkList');
    };
    DefaultPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"] }
    ]; };
    DefaultPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-default',
            template: __webpack_require__(/*! raw-loader!./default.page.html */ "./node_modules/raw-loader/index.js!./src/app/home/maintenance-order/default/default.page.html"),
            styles: [__webpack_require__(/*! ./default.page.scss */ "./src/app/home/maintenance-order/default/default.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"]])
    ], DefaultPage);
    return DefaultPage;
}());



/***/ })

}]);
//# sourceMappingURL=home-maintenance-order-default-default-module-es5.js.map