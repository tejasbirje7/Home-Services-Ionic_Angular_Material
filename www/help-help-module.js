(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["help-help-module"],{

/***/ "./src/app/pages/help/help.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/help/help.module.ts ***!
  \*******************************************/
/*! exports provided: HelpPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpPageModule", function() { return HelpPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _help_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./help.page */ "./src/app/pages/help/help.page.ts");
/* harmony import */ var _components_component_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/component.module */ "./src/app/components/component.module.ts");








var routes = [
    {
        path: '',
        component: _help_page__WEBPACK_IMPORTED_MODULE_6__["HelpPage"]
    }
];
var HelpPageModule = /** @class */ (function () {
    function HelpPageModule() {
    }
    HelpPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _components_component_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_help_page__WEBPACK_IMPORTED_MODULE_6__["HelpPage"]]
        })
    ], HelpPageModule);
    return HelpPageModule;
}());



/***/ }),

/***/ "./src/app/pages/help/help.page.html":
/*!*******************************************!*\
  !*** ./src/app/pages/help/help.page.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header> \n  <app-header></app-header>\n</ion-header>\n\n<ion-content>\n Need any help\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/help/help.page.scss":
/*!*******************************************!*\
  !*** ./src/app/pages/help/help.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hlbHAvaGVscC5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/help/help.page.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/help/help.page.ts ***!
  \*****************************************/
/*! exports provided: HelpPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpPage", function() { return HelpPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HelpPage = /** @class */ (function () {
    function HelpPage() {
    }
    HelpPage.prototype.ngOnInit = function () {
    };
    HelpPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-help',
            template: __webpack_require__(/*! ./help.page.html */ "./src/app/pages/help/help.page.html"),
            styles: [__webpack_require__(/*! ./help.page.scss */ "./src/app/pages/help/help.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HelpPage);
    return HelpPage;
}());



/***/ })

}]);
//# sourceMappingURL=help-help-module.js.map