(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./src/app/pages/home/dialog-overview-example-dialog.html":
/*!****************************************************************!*\
  !*** ./src/app/pages/home/dialog-overview-example-dialog.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Hi {{data.category}}</h1>\n\n<!-- <div class=\"example-container\">\n    <mat-form-field>\n      <input matInput placeholder=\"Input\">\n    </mat-form-field>\n  \n    <mat-form-field>\n      <textarea matInput placeholder=\"Textarea\"></textarea>\n    </mat-form-field>\n  \n    <mat-form-field>\n      <mat-select placeholder=\"Select\">\n         <mat-option value=\"option\">Option</mat-option> \n      </mat-select>\n    </mat-form-field>\n  </div> -->\n  \n  <!-- <form [formGroup]=\"myForm\" (ngSubmit)=\"save(myForm.value)\">\n    <mat-form-field>\n      <input matInput [matDatepicker]=\"picker\" placeholder=\"Start\" formControlName=\"date\">\n      <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n      <mat-datepicker #picker></mat-datepicker>\n    </mat-form-field>\n    <button mat-raised-button color=\"accent\" [disabled]=\"myForm.invalid\">Save</button>\n  </form> -->\n<!-- \n  <div class=\"basic-container\">\n    <md-form-field>\n      <input mdInput [mdDatepicker]=\"picker\" placeholder=\"Choose a date\">\n      <md-datepicker-toggle mdSuffix [for]=\"picker\"></md-datepicker-toggle>\n      <md-datepicker #picker></md-datepicker>\n    </md-form-field>\n  </div> -->\n\n  <form [formGroup]=\"appDetailsForm\">\n          <mat-form-field>\n            <input formControlName=\"name\" matInput placeholder=\"Name\">\n          </mat-form-field>\n        \n          <mat-form-field>\n            <textarea formControlName=\"address\" matInput placeholder=\"Address\"></textarea>\n          </mat-form-field>\n        \n          <mat-form-field>\n              <mat-select formControlName=\"service\" required>\n                  <mat-option *ngFor=\"let service of services\" value=\"{{ serv }}\">\n                    {{ service }}\n                  </mat-option>\n                </mat-select>\n          </mat-form-field>\n  </form>"

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

/***/ "./src/app/pages/home/home.page.html":
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.page.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <app-header></app-header>\n</ion-header>\n\n<ion-content no-padding>\n  <ion-grid>\n    <ion-row>\n      <ion-slides\n        pager=\"true\"\n        [options]=\"slideOptsOne\"\n        #slider\n        (ionSlideDidChange)=\"slidesDidLoad(slider)\"\n        loop=\"true\"\n        speed=\"2000\"\n      >\n        <ion-slide *ngFor=\"let s of items\">\n          <img [src]=\"s.url\" />\n        </ion-slide>\n      </ion-slides>\n    </ion-row>\n    <img src=\"../../../assets/images/header.jpg\" />\n  </ion-grid>\n\n  <h3\n  style=\"text-align: center; font-weight: bold;font-size: 15px;color: black; margin-left: 1cm; margin-right: 1cm;font-family: Arial, Helvetica, sans-serif\"\n  no-padding\n>\n  The convenient & affordable way to get things done around the home\n</h3>\n\n<br>\n\n  <ion-slides pager=\"false\" [options]=\"slideOpts\" loop=\"true\" speed=\"2000\">\n    <ion-slide *ngFor=\"let p of pages\">\n          <mat-card (click)=\"openDialog(p.title)\">\n              <img mat-card-image [src]=\"p.icon\" alt=\"service pic\">\n            <mat-card-subtitle style=\"color: black;font-weight: bolder;font-family:Arial, Helvetica, sans-serif\">\n            {{ p.title }}\n          </mat-card-subtitle>\n      </mat-card>\n    </ion-slide>\n  </ion-slides>\n  <img src=\"../../../assets/images/diy_back.jpg\" />\n\n  <h3 style=\"text-align: center; font-weight: bold;font-size: 25px;color: black; margin-left: 1cm; margin-right: 1cm;font-family: 'Times New Roman', Times, serif\">\n  HOW IT WORKS!\n</h3>\n\n<!-- <div style=\"text-align: center\" class=\"card\" *ngFor=\"let card of cardsContent\">\n    <div style=\"text-align: center; font-weight: bold; background-size: auto; color:black\" class=\"heading\" [style.background]=\"'url('+card.image+')'\"><h1>{{card.heading}}</h1></div>\n    <div style=\"text-align: center; font-weight: bold\" class=\"content\"><p>{{card.body}}</p></div>\n</div> -->\n\n<div style=\"text-align: center\" *ngFor=\"let card of cardsContent\">\n  <img style=\"border-radius: 50%; height: 42;width: 42;\" [src]=card.image/>\n  <div style=\"text-align: center; font-weight: bolder; font-size: larger\" class=\"content\"><p>{{card.heading}}</p></div>\n  <div style=\"text-align: center ;font-weight: bold; margin-left: 60px; margin-right: 60px\" class=\"content\"><p>{{card.body}}</p></div>\n</div> \n  \n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/home/home.page.scss":
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-badge {\n  color: #fff;\n  position: absolute;\n  top: 0px;\n  right: 0px;\n  border-radius: 100%; }\n\n.category-block {\n  size: 50px;\n  margin-bottom: 10px; }\n\nion-header {\n  --ion-background-color: #2E4AFC !important; }\n\n.align-text-middle {\n  align-items: center; }\n\nh1 {\n  margin: 0;\n  padding: 0; }\n\np {\n  margin: 0.8em 0;\n  padding: 0; }\n\n.cards-set {\n  font-size: 0; }\n\n.card {\n  display: inline-block;\n  margin-left: 30px;\n  margin-bottom: 20px;\n  width: 350px;\n  min-height: 100px;\n  font-size: 16px;\n  background-color: #ffffff;\n  border-radius: 2px;\n  box-shadow: 0 12px 15px 0 rgba(0, 0, 0, 0.24); }\n\n.card .heading {\n  position: relative;\n  height: 150px;\n  color: #ffffff; }\n\n.card .heading h1 {\n  position: absolute;\n  bottom: 16px;\n  left: 16px;\n  font-size: 24px; }\n\n.card .content {\n  height: 80px;\n  margin-top: 0px; }\n\n.example-container {\n  display: flex;\n  flex-direction: column; }\n\n.example-container > * {\n  width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RlamFzL1RlanUvSmF2YVNjcmlwdC9Jb25pYy9oYW5keS9zcmMvYXBwL3BhZ2VzL2hvbWUvaG9tZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixVQUFVO0VBQ1YsbUJBQW1CLEVBQUE7O0FBR3JCO0VBQ0ksVUFBVTtFQUNaLG1CQUFtQixFQUFBOztBQUdyQjtFQUNFLDBDQUF1QixFQUFBOztBQUd6QjtFQUNJLG1CQUFtQixFQUFBOztBQUd2QjtFQUNDLFNBQVM7RUFDVCxVQUFVLEVBQUE7O0FBRVQ7RUFDRCxlQUFlO0VBQ2YsVUFBVSxFQUFBOztBQUVUO0VBQ0QsWUFBWSxFQUFBOztBQUVYO0VBQ0QscUJBQXFCO0VBQ3BCLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDcEIsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNqQiw2Q0FBNkMsRUFBQTs7QUFFN0M7RUFDRCxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLGNBQWMsRUFBQTs7QUFFYjtFQUNELGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osVUFBVTtFQUNWLGVBQWUsRUFBQTs7QUFFZDtFQUNBLFlBQVk7RUFDWixlQUNBLEVBQUE7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCLEVBQUE7O0FBR3hCO0VBQ0UsV0FBVyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1iYWRnZSB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMHB4O1xyXG4gIHJpZ2h0OiAwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxufVxyXG5cclxuLmNhdGVnb3J5LWJsb2NrIHtcclxuICAgIHNpemU6IDUwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuaW9uLWhlYWRlciB7XHJcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogIzJFNEFGQyAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYWxpZ24tdGV4dC1taWRkbGUge1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuaDEge1xyXG5cdG1hcmdpbjogMDtcclxuXHRwYWRkaW5nOiAwO1xyXG4gIH1cclxuICBwIHtcclxuXHRtYXJnaW46IDAuOGVtIDA7XHJcblx0cGFkZGluZzogMDtcclxuICB9XHJcbiAgLmNhcmRzLXNldCB7XHJcblx0Zm9udC1zaXplOiAwO1xyXG4gIH1cclxuICAuY2FyZCB7XHJcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIG1hcmdpbi1sZWZ0OiAzMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcblx0d2lkdGg6IDM1MHB4O1xyXG5cdG1pbi1oZWlnaHQ6IDEwMHB4O1xyXG5cdGZvbnQtc2l6ZTogMTZweDtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG5cdGJvcmRlci1yYWRpdXM6IDJweDtcclxuICBib3gtc2hhZG93OiAwIDEycHggMTVweCAwIHJnYmEoMCwgMCwgMCwgMC4yNCk7XHJcbiAgfVxyXG4gIC5jYXJkIC5oZWFkaW5nIHtcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0aGVpZ2h0OiAxNTBweDtcclxuXHRjb2xvcjogI2ZmZmZmZjtcclxuICB9XHJcbiAgLmNhcmQgLmhlYWRpbmcgaDEge1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRib3R0b206IDE2cHg7XHJcblx0bGVmdDogMTZweDtcclxuXHRmb250LXNpemU6IDI0cHg7XHJcbiAgfVxyXG4gIC5jYXJkIC5jb250ZW50IHtcclxuICBoZWlnaHQ6IDgwcHg7XHJcbiAgbWFyZ2luLXRvcDogMHB4XHJcbiAgfVxyXG5cclxuICAuZXhhbXBsZS1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgfVxyXG4gIFxyXG4gIC5leGFtcGxlLWNvbnRhaW5lciA+ICoge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfSJdfQ== */"

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
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _providers_home_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../providers/home.service */ "./src/app/providers/home.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");








var HomePage = /** @class */ (function () {
    function HomePage(router, sideMenuService, navCtrl, dialog, homeService) {
        var _this = this;
        this.router = router;
        this.sideMenuService = sideMenuService;
        this.navCtrl = navCtrl;
        this.dialog = dialog;
        this.homeService = homeService;
        this.category = '';
        this.pages = [
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
        this.selectedPath = "";
        this.sliderConfig = {
            spaceBetween: 10,
            centeredSlides: true,
            slidesPerView: 2.6
        };
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
        this.slideOptions = {
            initialSlide: 0,
            speed: 2000,
        };
        this.items = [
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
        this.cardsContent = [
            {
                heading: "Select Service",
                body: "Select the type of service you like to get completed with our assistant",
                //image : "../../../assets/selectservice.jpg"
                image: "../../../assets/se.gif"
            },
            {
                heading: "Location Information",
                body: "Share information of location where the selected service is to be accomplished",
                //image : "../../../assets/location.jpg"
                image: "../../../assets/ll.gif"
            },
            {
                heading: "Payment",
                body: "Pay once the job is completed",
                //image : "../../../assets/payment.jpg"
                image: "../../../assets/pp.gif"
            }
        ];
        this.router.events
            .subscribe(function (event) {
            _this.selectedPath = event.url;
        });
    }
    HomePage.prototype.slidesDidLoad = function (slides) {
        slides.startAutoplay();
    };
    HomePage.prototype.ngOnInit = function () {
        this.homeService.get_products();
        this.homeService.post_request();
        console.log("In home page");
    };
    HomePage.prototype.setTitle = function (title) {
        console.log("title :", title);
        this.sideMenuService.setTitle(title);
    };
    HomePage.prototype.goToHome = function () {
        //this.navCtrl.setRoot('Tabs');
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
            //console.log('The dialog was closed');
            _this.category = cat;
        });
    };
    HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.page.html */ "./src/app/pages/home/home.page.html"),
            styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/pages/home/home.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _providers_sidemenu_service__WEBPACK_IMPORTED_MODULE_3__["SidemenuService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"],
            _providers_home_service__WEBPACK_IMPORTED_MODULE_5__["HomeService"]])
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
            'name': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            'address': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].maxLength(200)],
            'service': [this.services, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]
        });
    }
    DialogOverviewExampleDialog.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    DialogOverviewExampleDialog = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'dialog-overview-example-dialog',
            template: __webpack_require__(/*! ./dialog-overview-example-dialog.html */ "./src/app/pages/home/dialog-overview-example-dialog.html"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogRef"], Object])
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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var HomeService = /** @class */ (function () {
    function HomeService(httpClient) {
        this.httpClient = httpClient;
        this.baseUrl = 'http://127.0.0.1:5000';
    }
    HomeService.prototype.get_products = function () {
        this.httpClient.get(this.baseUrl + '/').subscribe(function (res) {
            console.log(res);
        });
    };
    HomeService.prototype.post_request = function () {
        this.httpClient.post(this.baseUrl + '/add', { 'id': '12', 'name': 'tejas' }).subscribe(function (res) {
            console.log(res);
        });
    };
    HomeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], HomeService);
    return HomeService;
}());



/***/ })

}]);
//# sourceMappingURL=home-home-module.js.map