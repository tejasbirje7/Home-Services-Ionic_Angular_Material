(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-sidemenu-sidemenu-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/sidemenu/sidemenu.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/sidemenu/sidemenu.page.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-split-pane>\n  <ion-menu side=\"end\" contentId=\"content\">\n\n    <ion-header>\n      <ion-toolbar>\n        <ion-title>Menu</ion-title>\n      </ion-toolbar>\n    </ion-header>\n\n    <ion-content>\n      <ion-list>\n        <ion-menu-toggle auto-hide=\"false\" *ngFor=\"let p of selections\">\n          <ion-item\n            (click)=\"setTitle(p.title)\"\n            [routerLink]=\"p.url\"\n            routeDirection=\"root\"\n            [class.active-item]=\"selectedPath == p.url\">\n            <img [src]=\"p.icon\" width=\"30\" height=\"30\" alt=\"\" hspace=\"8\" class=\"pull-left\" align=\"left\" />\n                {{p.title}} \n          </ion-item>\n        </ion-menu-toggle>\n      </ion-list>\n    </ion-content>\n  </ion-menu>\n\n  <ion-router-outlet id=\"content\" main></ion-router-outlet>\n</ion-split-pane>\n"

/***/ }),

/***/ "./src/app/pages/sidemenu/sidemenu.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/sidemenu/sidemenu.module.ts ***!
  \***************************************************/
/*! exports provided: SidemenuPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidemenuPageModule", function() { return SidemenuPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _sidemenu_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sidemenu.page */ "./src/app/pages/sidemenu/sidemenu.page.ts");







const routes = [
    {
        path: 'sidemenu',
        component: _sidemenu_page__WEBPACK_IMPORTED_MODULE_6__["SidemenuPage"],
        children: [
            {
                path: 'home',
                loadChildren: '../home/home.module#HomePageModule'
            },
            {
                path: 'proffessional',
                loadChildren: '../proffessional/proffessional.module#ProffessionalPageModule'
            },
            {
                path: 'shop',
                loadChildren: '../shop/shop.module#ShopPageModule'
            },
            {
                path: 'help',
                loadChildren: '../help/help.module#HelpPageModule'
            }
        ]
    },
    {
        path: '',
        redirectTo: '/sidemenu/home'
    }
];
let SidemenuPageModule = class SidemenuPageModule {
};
SidemenuPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_sidemenu_page__WEBPACK_IMPORTED_MODULE_6__["SidemenuPage"]]
    })
], SidemenuPageModule);



/***/ }),

/***/ "./src/app/pages/sidemenu/sidemenu.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/sidemenu/sidemenu.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-header {\n  --ion-background-color: #FF1493;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RlamFzL3RlanUvamF2YXNjcmlwdC9wd2FfaW9uaWNfYW5ndWxhci9zcmMvYXBwL3BhZ2VzL3NpZGVtZW51L3NpZGVtZW51LnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvc2lkZW1lbnUvc2lkZW1lbnUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsK0JBQUE7QUNDRCIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NpZGVtZW51L3NpZGVtZW51LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXIge1xyXG5cdC0taW9uLWJhY2tncm91bmQtY29sb3I6ICNGRjE0OTM7XHJcbn0iLCJpb24taGVhZGVyIHtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogI0ZGMTQ5Mztcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/sidemenu/sidemenu.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/sidemenu/sidemenu.page.ts ***!
  \*************************************************/
/*! exports provided: SidemenuPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidemenuPage", function() { return SidemenuPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _providers_sidemenu_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../providers/sidemenu.service */ "./src/app/providers/sidemenu.service.ts");




let SidemenuPage = class SidemenuPage {
    constructor(router, sidemenuService) {
        this.router = router;
        this.sidemenuService = sidemenuService;
        this.selections = [];
        this.selectedPath = "";
        this.router.events
            .subscribe((event) => {
            this.selectedPath = event.url;
        });
    }
    ngOnInit() {
        this.selections = this.sidemenuService.get_selections();
    }
    setTitle(title) {
        console.log('Side Menu Title :', title);
        this.sidemenuService.setTitle(title);
    }
};
SidemenuPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _providers_sidemenu_service__WEBPACK_IMPORTED_MODULE_3__["SidemenuService"] }
];
SidemenuPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sidemenu',
        template: __webpack_require__(/*! raw-loader!./sidemenu.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/sidemenu/sidemenu.page.html"),
        styles: [__webpack_require__(/*! ./sidemenu.page.scss */ "./src/app/pages/sidemenu/sidemenu.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _providers_sidemenu_service__WEBPACK_IMPORTED_MODULE_3__["SidemenuService"]])
], SidemenuPage);



/***/ })

}]);
//# sourceMappingURL=pages-sidemenu-sidemenu-module-es2015.js.map