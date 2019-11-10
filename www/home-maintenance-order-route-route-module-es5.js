(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-maintenance-order-route-route-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/home/maintenance-order/route/route.page.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/maintenance-order/route/route.page.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title>Rota Manutenção</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"home/monitor\"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-tabs>\n    <ion-tab-bar slot=\"bottom\" color=\"\">\n      <ion-tab-button *ngFor=\"let tab of tabs\" [tab]=\"tab.route\">\n        <ion-icon [name]=\"tab.icon\"></ion-icon>\n      </ion-tab-button>\n    </ion-tab-bar>\n  </ion-tabs>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/home/maintenance-order/route/route.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/home/maintenance-order/route/route.module.ts ***!
  \**************************************************************/
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
/* harmony import */ var _route_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./route.page */ "./src/app/home/maintenance-order/route/route.page.ts");







var routes = [
    {
        path: '',
        component: _route_page__WEBPACK_IMPORTED_MODULE_6__["RoutePage"],
        children: [
            {
                path: "resume",
                loadChildren: function () { return __webpack_require__.e(/*! import() | tabs-resume-module */ "tabs-resume-module").then(__webpack_require__.bind(null, /*! ../tabs/resume.module */ "./src/app/home/maintenance-order/tabs/resume.module.ts")).then(function (m) { return m.ResumePageModule; }); }
            },
            {
                path: "components",
                loadChildren: function () { return __webpack_require__.e(/*! import() | tabs-components-module */ "tabs-components-module").then(__webpack_require__.bind(null, /*! ../tabs/components.module */ "./src/app/home/maintenance-order/tabs/components.module.ts")).then(function (m) { return m.ComponentsPageModule; }); }
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

/***/ "./src/app/home/maintenance-order/route/route.page.scss":
/*!**************************************************************!*\
  !*** ./src/app/home/maintenance-order/route/route.page.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvbWFpbnRlbmFuY2Utb3JkZXIvcm91dGUvcm91dGUucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/home/maintenance-order/route/route.page.ts":
/*!************************************************************!*\
  !*** ./src/app/home/maintenance-order/route/route.page.ts ***!
  \************************************************************/
/*! exports provided: RoutePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoutePage", function() { return RoutePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var RoutePage = /** @class */ (function () {
    function RoutePage() {
        this.tabs = this.obterTabs();
    }
    RoutePage.prototype.ngOnInit = function () {
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
    RoutePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-route',
            template: __webpack_require__(/*! raw-loader!./route.page.html */ "./node_modules/raw-loader/index.js!./src/app/home/maintenance-order/route/route.page.html"),
            styles: [__webpack_require__(/*! ./route.page.scss */ "./src/app/home/maintenance-order/route/route.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], RoutePage);
    return RoutePage;
}());



/***/ })

}]);
//# sourceMappingURL=home-maintenance-order-route-route-module-es5.js.map