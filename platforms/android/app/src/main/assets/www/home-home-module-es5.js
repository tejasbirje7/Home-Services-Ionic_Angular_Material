(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/home/dialog-overview-example-dialog.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/home/dialog-overview-example-dialog.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>{{data.category}}</h1>\n\n  <form [formGroup]=\"appDetailsForm\">\n          <mat-form-field>\n            <input formControlName=\"name\" matInput placeholder=\"Name\">\n          </mat-form-field>\n        \n          <mat-form-field>\n            <textarea formControlName=\"address\" matInput placeholder=\"Address\"></textarea>\n          </mat-form-field>\n        \n          <mat-form-field>\n              <mat-select formControlName=\"service\" placeholder=\"Locality\" required>\n                  <mat-option *ngFor=\"let service of services\" value=\"{{ serv }}\">\n                    {{ service }}\n                  </mat-option>\n                </mat-select>\n          </mat-form-field>\n  </form>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/home/home.page.html":
/*!*********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/home/home.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <app-header></app-header>\n</ion-header>\n\n<ion-content no-padding>\n  <ion-grid>\n    <ion-row>\n      <ion-slides\n        pager=\"true\"\n        [options]=\"slideOptsOne\"\n        #slider\n        (ionSlideDidChange)=\"slidesDidLoad(slider)\"\n        loop=\"true\"\n        speed=\"2000\"\n      >\n        <ion-slide *ngFor=\"let ad of ads\">\n          <img [src]=\"ad.url\" />\n        </ion-slide>\n      </ion-slides>\n    </ion-row>\n    <img src=\"../../../assets/images/header.jpg\" />\n  </ion-grid>\n\n  <h3\n  style=\"text-align: center; font-weight: bold;font-size: 15px;color: black; margin-left: 1cm; margin-right: 1cm;font-family: Arial, Helvetica, sans-serif\"\n  no-padding\n>\n  The convenient & affordable way to get things done around the home\n</h3>\n\n<br>\n\n  <ion-slides pager=\"false\" [options]=\"slideOpts\" loop=\"true\" speed=\"2000\">\n    <ion-slide *ngFor=\"let service of services\">\n          <mat-card (click)=\"openDialog(service.title)\">\n              <img mat-card-image [src]=\"service.icon\" alt=\"service pic\">\n            <mat-card-subtitle style=\"color: black;font-weight: bolder;font-family:Arial, Helvetica, sans-serif\">\n            {{ service.title }}\n          </mat-card-subtitle>\n      </mat-card>\n    </ion-slide>\n  </ion-slides>\n  <img src=\"../../../assets/images/diy_back.jpg\" />\n\n  <h3 style=\"text-align: center; font-weight: bold;font-size: 25px;color: black; margin-left: 1cm; margin-right: 1cm;font-family: 'Times New Roman', Times, serif\">\n  HOW IT WORKS!\n</h3>\n\n<div style=\"text-align: center\" *ngFor=\"let card of worksContent\">\n  <img style=\"border-radius: 50%; height: 42;width: 42;\" [src]=card.image/>\n  <div style=\"text-align: center; font-weight: bolder; font-size: larger\" class=\"content\"><p>{{card.heading}}</p></div>\n  <div style=\"text-align: center ;font-weight: bold; margin-left: 60px; margin-right: 60px\" class=\"content\"><p>{{card.body}}</p></div>\n</div> \n  \n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/home/home.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.module.ts ***!
  \*******************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/pages/home/home.page.ts");
/* harmony import */ var _components_component_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/component.module */ "./src/app/components/component.module.ts");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm5/select.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");














var routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
    },
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_6__["DialogOverviewExampleDialog"]
    }
];
var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"],
                _components_component_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialogModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatNativeDateModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatDatepickerModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"], _home_page__WEBPACK_IMPORTED_MODULE_6__["DialogOverviewExampleDialog"]]
        })
    ], HomePageModule);
    return HomePageModule;
}());



/***/ }),

/***/ "./src/app/pages/home/home.page.scss":
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-badge {\n  color: #fff;\n  position: absolute;\n  top: 0px;\n  right: 0px;\n  border-radius: 100%;\n}\n\n.category-block {\n  size: 50px;\n  margin-bottom: 10px;\n}\n\nion-header {\n  --ion-background-color: #2E4AFC !important;\n}\n\n.align-text-middle {\n  -webkit-box-align: center;\n          align-items: center;\n}\n\nh1 {\n  margin: 0;\n  padding: 0;\n}\n\np {\n  margin: 0.8em 0;\n  padding: 0;\n}\n\n.cards-set {\n  font-size: 0;\n}\n\n.card {\n  display: inline-block;\n  margin-left: 30px;\n  margin-bottom: 20px;\n  width: 350px;\n  min-height: 100px;\n  font-size: 16px;\n  background-color: #ffffff;\n  border-radius: 2px;\n  box-shadow: 0 12px 15px 0 rgba(0, 0, 0, 0.24);\n}\n\n.card .heading {\n  position: relative;\n  height: 150px;\n  color: #ffffff;\n}\n\n.card .heading h1 {\n  position: absolute;\n  bottom: 16px;\n  left: 16px;\n  font-size: 24px;\n}\n\n.card .content {\n  height: 80px;\n  margin-top: 0px;\n}\n\n.example-container {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n\n.example-container > * {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RlamFzL3RlanUvamF2YXNjcmlwdC9wd2FfaW9uaWNfYW5ndWxhci9zcmMvYXBwL3BhZ2VzL2hvbWUvaG9tZS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2hvbWUvaG9tZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0FDQ0Y7O0FERUE7RUFDSSxVQUFBO0VBQ0YsbUJBQUE7QUNDRjs7QURFQTtFQUNFLDBDQUFBO0FDQ0Y7O0FERUE7RUFDSSx5QkFBQTtVQUFBLG1CQUFBO0FDQ0o7O0FERUE7RUFDQyxTQUFBO0VBQ0EsVUFBQTtBQ0NEOztBRENFO0VBQ0QsZUFBQTtFQUNBLFVBQUE7QUNFRDs7QURBRTtFQUNELFlBQUE7QUNHRDs7QURERTtFQUNELHFCQUFBO0VBQ0MsaUJBQUE7RUFDQSxtQkFBQTtFQUNELFlBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0MsNkNBQUE7QUNJRjs7QURGRTtFQUNELGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7QUNLRDs7QURIRTtFQUNELGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0FDTUQ7O0FESkU7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQ09GOztBREpFO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0FDT0o7O0FESkU7RUFDRSxXQUFBO0FDT0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9ob21lL2hvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWJhZGdlIHtcclxuICBjb2xvcjogI2ZmZjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwcHg7XHJcbiAgcmlnaHQ6IDBweDtcclxuICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG59XHJcblxyXG4uY2F0ZWdvcnktYmxvY2sge1xyXG4gICAgc2l6ZTogNTBweDtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG5pb24taGVhZGVyIHtcclxuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjMkU0QUZDICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5hbGlnbi10ZXh0LW1pZGRsZSB7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG5oMSB7XHJcblx0bWFyZ2luOiAwO1xyXG5cdHBhZGRpbmc6IDA7XHJcbiAgfVxyXG4gIHAge1xyXG5cdG1hcmdpbjogMC44ZW0gMDtcclxuXHRwYWRkaW5nOiAwO1xyXG4gIH1cclxuICAuY2FyZHMtc2V0IHtcclxuXHRmb250LXNpemU6IDA7XHJcbiAgfVxyXG4gIC5jYXJkIHtcclxuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgbWFyZ2luLWxlZnQ6IDMwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuXHR3aWR0aDogMzUwcHg7XHJcblx0bWluLWhlaWdodDogMTAwcHg7XHJcblx0Zm9udC1zaXplOiAxNnB4O1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcblx0Ym9yZGVyLXJhZGl1czogMnB4O1xyXG4gIGJveC1zaGFkb3c6IDAgMTJweCAxNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjI0KTtcclxuICB9XHJcbiAgLmNhcmQgLmhlYWRpbmcge1xyXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRoZWlnaHQ6IDE1MHB4O1xyXG5cdGNvbG9yOiAjZmZmZmZmO1xyXG4gIH1cclxuICAuY2FyZCAuaGVhZGluZyBoMSB7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdGJvdHRvbTogMTZweDtcclxuXHRsZWZ0OiAxNnB4O1xyXG5cdGZvbnQtc2l6ZTogMjRweDtcclxuICB9XHJcbiAgLmNhcmQgLmNvbnRlbnQge1xyXG4gIGhlaWdodDogODBweDtcclxuICBtYXJnaW4tdG9wOiAwcHhcclxuICB9XHJcblxyXG4gIC5leGFtcGxlLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB9XHJcbiAgXHJcbiAgLmV4YW1wbGUtY29udGFpbmVyID4gKiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9IiwiaW9uLWJhZGdlIHtcbiAgY29sb3I6ICNmZmY7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwcHg7XG4gIHJpZ2h0OiAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG59XG5cbi5jYXRlZ29yeS1ibG9jayB7XG4gIHNpemU6IDUwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbmlvbi1oZWFkZXIge1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjMkU0QUZDICFpbXBvcnRhbnQ7XG59XG5cbi5hbGlnbi10ZXh0LW1pZGRsZSB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbmgxIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG5wIHtcbiAgbWFyZ2luOiAwLjhlbSAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG4uY2FyZHMtc2V0IHtcbiAgZm9udC1zaXplOiAwO1xufVxuXG4uY2FyZCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luLWxlZnQ6IDMwcHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIHdpZHRoOiAzNTBweDtcbiAgbWluLWhlaWdodDogMTAwcHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBib3gtc2hhZG93OiAwIDEycHggMTVweCAwIHJnYmEoMCwgMCwgMCwgMC4yNCk7XG59XG5cbi5jYXJkIC5oZWFkaW5nIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDE1MHB4O1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cblxuLmNhcmQgLmhlYWRpbmcgaDEge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMTZweDtcbiAgbGVmdDogMTZweDtcbiAgZm9udC1zaXplOiAyNHB4O1xufVxuXG4uY2FyZCAuY29udGVudCB7XG4gIGhlaWdodDogODBweDtcbiAgbWFyZ2luLXRvcDogMHB4O1xufVxuXG4uZXhhbXBsZS1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uZXhhbXBsZS1jb250YWluZXIgPiAqIHtcbiAgd2lkdGg6IDEwMCU7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/home/home.page.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/home/home.page.ts ***!
  \*****************************************/
/*! exports provided: HomePage, DialogOverviewExampleDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogOverviewExampleDialog", function() { return DialogOverviewExampleDialog; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _providers_sidemenu_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../providers/sidemenu.service */ "./src/app/providers/sidemenu.service.ts");
/* harmony import */ var _providers_home_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../providers/home.service */ "./src/app/providers/home.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");







var HomePage = /** @class */ (function () {
    function HomePage(router, sideMenuService, dialog, homeService) {
        var _this = this;
        this.router = router;
        this.sideMenuService = sideMenuService;
        this.dialog = dialog;
        this.homeService = homeService;
        this.category = '';
        this.selectedPath = "";
        this.services = [];
        this.ads = [];
        this.worksContent = [];
        this.slideOptsOne = {
            initialSlide: 0,
            slidesPerView: 1,
            autoplay: true
        };
        this.slideOpts = {
            slidesPerView: 2.5,
            freeMode: true,
            initialSlide: 0,
            autoplay: true,
            spaceBetween: 10
        };
        this.router.events
            .subscribe(function (event) {
            _this.selectedPath = event.url;
        });
    }
    HomePage.prototype.ngOnInit = function () {
        console.log("In home page");
        this.services = this.homeService.get_services();
        this.ads = this.homeService.get_ads();
        this.worksContent = this.homeService.get_worksContent();
    };
    HomePage.prototype.slidesDidLoad = function (slides) {
        slides.startAutoplay();
    };
    HomePage.prototype.setTitle = function (title) {
        console.log("title :", title);
        this.sideMenuService.setTitle(title);
    };
    HomePage.prototype.openDialog = function (cat) {
        var _this = this;
        console.log("category is :", cat);
        var dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
            width: '250px',
            height: '250px',
            data: { category: cat }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            _this.category = cat;
        });
    };
    HomePage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _providers_sidemenu_service__WEBPACK_IMPORTED_MODULE_3__["SidemenuService"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] },
        { type: _providers_home_service__WEBPACK_IMPORTED_MODULE_4__["HomeService"] }
    ]; };
    HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/home/home.page.html"),
            styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/pages/home/home.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _providers_sidemenu_service__WEBPACK_IMPORTED_MODULE_3__["SidemenuService"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"],
            _providers_home_service__WEBPACK_IMPORTED_MODULE_4__["HomeService"]])
    ], HomePage);
    return HomePage;
}());

var DialogOverviewExampleDialog = /** @class */ (function () {
    function DialogOverviewExampleDialog(_formBuilder, dialogRef, data) {
        this._formBuilder = _formBuilder;
        this.dialogRef = dialogRef;
        this.data = data;
        this.services = ['home', 'office', 'local place'];
        this.serv = '';
        this.appDetailsForm = this._formBuilder.group({
            'name': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            'address': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].maxLength(200)],
            'service': [this.services, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]
        });
    }
    DialogOverviewExampleDialog.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    DialogOverviewExampleDialog.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogRef"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MAT_DIALOG_DATA"],] }] }
    ]; };
    DialogOverviewExampleDialog = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'dialog-overview-example-dialog',
            template: __webpack_require__(/*! raw-loader!./dialog-overview-example-dialog.html */ "./node_modules/raw-loader/index.js!./src/app/pages/home/dialog-overview-example-dialog.html"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogRef"], Object])
    ], DialogOverviewExampleDialog);
    return DialogOverviewExampleDialog;
}());



/***/ }),

/***/ "./src/app/providers/home.service.ts":
/*!*******************************************!*\
  !*** ./src/app/providers/home.service.ts ***!
  \*******************************************/
/*! exports provided: HomeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeService", function() { return HomeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeService = /** @class */ (function () {
    function HomeService() {
        this.services = [
            {
                'title': 'Cleaning',
                'url': '/sidemenu/cleaning',
                'icon': '../../../assets/images/cleaning.jpg'
            },
            {
                'title': 'Electronics',
                'url': '/sidemenu/electronics',
                'icon': '../../../assets/images/electronics.jpg'
            },
            {
                'title': 'Assembly',
                'url': '/sidemenu/assembly',
                'icon': '../../../assets/images/assembly.jpg'
            },
            {
                'title': 'Plumbing',
                'url': '/sidemenu/plumbing',
                'icon': '../../../assets/images/plumbing.jpg'
            },
            {
                'title': 'Housing/Office',
                'url': '/sidemenu/housingoffice',
                'icon': '../../../assets/images/housingoffice.jpg'
            },
            {
                'title': 'Delivery',
                'url': '/sidemenu/delivery',
                'icon': '../../../assets/images/delivery.jpg'
            },
            {
                'title': 'Moving',
                'url': '/sidemenu/moving',
                'icon': '../../../assets/images/moving.jpg'
            },
            {
                'title': 'Storage',
                'url': '/sidemenu/storage',
                'icon': '../../../assets/images/storage.jpg'
            }
        ];
        this.ads = [
            {
                url: '../../../assets/images/shop2.jpg'
            },
            {
                url: '../../../assets/images/shop3.jpg'
            },
            {
                url: '../../../assets/images/shop4.jpg'
            }
        ];
        this.worksContent = [
            {
                heading: "Select Service",
                body: "Select the type of service you like to get completed with our assistant",
                image: "../../../assets/se.gif"
            },
            {
                heading: "Location Information",
                body: "Share information of location where the selected service is to be accomplished",
                image: "../../../assets/ll.gif"
            },
            {
                heading: "Payment",
                body: "Pay once the job is completed",
                image: "../../../assets/pp.gif"
            }
        ];
    }
    HomeService.prototype.get_services = function () {
        return this.services;
    };
    HomeService.prototype.get_ads = function () {
        return this.ads;
    };
    HomeService.prototype.get_worksContent = function () {
        return this.worksContent;
    };
    HomeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], HomeService);
    return HomeService;
}());

/*
Simple HTTP get and post request example

baseUrl = 'http://127.0.0.1:5000'

constructor(private httpClient: HttpClient) { }

get_products(){
  this.httpClient.get(this.baseUrl + '/').subscribe((res)=>{
      console.log(res);
  });
}

post_request(){
  this.httpClient.post(this.baseUrl + '/add',{'id':'12','name':'tejas'}).subscribe((res)=>{
    console.log(res);
  });
}

*/


/***/ })

}]);
//# sourceMappingURL=home-home-module-es5.js.map