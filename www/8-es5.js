(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

/***/ "./node_modules/@ionic/core/dist/esm-es5/ion-app_8-md.entry.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm-es5/ion-app_8-md.entry.js ***!
  \*********************************************************************/
/*! exports provided: ion_app, ion_buttons, ion_content, ion_footer, ion_header, ion_router_outlet, ion_title, ion_toolbar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_app", function() { return App; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_buttons", function() { return Buttons; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_content", function() { return Content; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_footer", function() { return Footer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_header", function() { return Header; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_router_outlet", function() { return RouterOutlet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_title", function() { return ToolbarTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_toolbar", function() { return Toolbar; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _core_13ed1ad7_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core-13ed1ad7.js */ "./node_modules/@ionic/core/dist/esm-es5/core-13ed1ad7.js");
/* harmony import */ var _config_bb99b659_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config-bb99b659.js */ "./node_modules/@ionic/core/dist/esm-es5/config-bb99b659.js");
/* harmony import */ var _constants_94c4865f_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants-94c4865f.js */ "./node_modules/@ionic/core/dist/esm-es5/constants-94c4865f.js");
/* harmony import */ var _theme_353a032e_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./theme-353a032e.js */ "./node_modules/@ionic/core/dist/esm-es5/theme-353a032e.js");
/* harmony import */ var _helpers_c90aaa66_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./helpers-c90aaa66.js */ "./node_modules/@ionic/core/dist/esm-es5/helpers-c90aaa66.js");
/* harmony import */ var _framework_delegate_00265c49_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./framework-delegate-00265c49.js */ "./node_modules/@ionic/core/dist/esm-es5/framework-delegate-00265c49.js");
/* harmony import */ var _index_eb64bc48_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./index-eb64bc48.js */ "./node_modules/@ionic/core/dist/esm-es5/index-eb64bc48.js");
/* harmony import */ var _cubic_bezier_90d0df24_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./cubic-bezier-90d0df24.js */ "./node_modules/@ionic/core/dist/esm-es5/cubic-bezier-90d0df24.js");









var App = /** @class */ (function () {
    function class_1(hostRef) {
        Object(_core_13ed1ad7_js__WEBPACK_IMPORTED_MODULE_1__["r"])(this, hostRef);
    }
    class_1.prototype.componentDidLoad = function () {
        Object(_helpers_c90aaa66_js__WEBPACK_IMPORTED_MODULE_5__["a"])(function () {
            var isHybrid = Object(_config_bb99b659_js__WEBPACK_IMPORTED_MODULE_2__["i"])(window, 'hybrid');
            if (!_config_bb99b659_js__WEBPACK_IMPORTED_MODULE_2__["b"].getBoolean('_testing')) {
                __webpack_require__.e(/*! import() | tap-click-b300ec79-js */ "tap-click-b300ec79-js").then(__webpack_require__.bind(null, /*! ./tap-click-b300ec79.js */ "./node_modules/@ionic/core/dist/esm-es5/tap-click-b300ec79.js")).then(function (module) { return module.startTapClick(_config_bb99b659_js__WEBPACK_IMPORTED_MODULE_2__["b"]); });
            }
            if (_config_bb99b659_js__WEBPACK_IMPORTED_MODULE_2__["b"].getBoolean('statusTap', isHybrid)) {
                __webpack_require__.e(/*! import() | status-tap-2758dfd1-js */ "status-tap-2758dfd1-js").then(__webpack_require__.bind(null, /*! ./status-tap-2758dfd1.js */ "./node_modules/@ionic/core/dist/esm-es5/status-tap-2758dfd1.js")).then(function (module) { return module.startStatusTap(); });
            }
            if (_config_bb99b659_js__WEBPACK_IMPORTED_MODULE_2__["b"].getBoolean('inputShims', needInputShims())) {
                __webpack_require__.e(/*! import() | input-shims-09d70723-js */ "input-shims-09d70723-js").then(__webpack_require__.bind(null, /*! ./input-shims-09d70723.js */ "./node_modules/@ionic/core/dist/esm-es5/input-shims-09d70723.js")).then(function (module) { return module.startInputShims(_config_bb99b659_js__WEBPACK_IMPORTED_MODULE_2__["b"]); });
            }
            if (_config_bb99b659_js__WEBPACK_IMPORTED_MODULE_2__["b"].getBoolean('hardwareBackButton', isHybrid)) {
                __webpack_require__.e(/*! import() | hardware-back-button-08f20350-js */ "hardware-back-button-08f20350-js").then(__webpack_require__.bind(null, /*! ./hardware-back-button-08f20350.js */ "./node_modules/@ionic/core/dist/esm-es5/hardware-back-button-08f20350.js")).then(function (module) { return module.startHardwareBackButton(); });
            }
            __webpack_require__.e(/*! import() | focus-visible-70161a50-js */ "focus-visible-70161a50-js").then(__webpack_require__.bind(null, /*! ./focus-visible-70161a50.js */ "./node_modules/@ionic/core/dist/esm-es5/focus-visible-70161a50.js")).then(function (module) { return module.startFocusVisible(); });
        });
    };
    class_1.prototype.render = function () {
        var _a;
        var mode = Object(_core_13ed1ad7_js__WEBPACK_IMPORTED_MODULE_1__["d"])(this);
        return (Object(_core_13ed1ad7_js__WEBPACK_IMPORTED_MODULE_1__["h"])(_core_13ed1ad7_js__WEBPACK_IMPORTED_MODULE_1__["H"], { class: (_a = {},
                _a[mode] = true,
                _a['ion-page'] = true,
                _a['force-statusbar-padding'] = _config_bb99b659_js__WEBPACK_IMPORTED_MODULE_2__["b"].getBoolean('_forceStatusbarPadding'),
                _a) }));
    };
    Object.defineProperty(class_1.prototype, "el", {
        get: function () { return Object(_core_13ed1ad7_js__WEBPACK_IMPORTED_MODULE_1__["e"])(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(class_1, "style", {
        get: function () { return "html.plt-mobile ion-app{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}ion-app.force-statusbar-padding{--ion-safe-area-top:20px}"; },
        enumerable: true,
        configurable: true
    });
    return class_1;
}());
var needInputShims = function () {
    return Object(_config_bb99b659_js__WEBPACK_IMPORTED_MODULE_2__["i"])(window, 'ios') && Object(_config_bb99b659_js__WEBPACK_IMPORTED_MODULE_2__["i"])(window, 'mobile');
};
var Buttons = /** @class */ (function () {
    function class_2(hostRef) {
        Object(_core_13ed1ad7_js__WEBPACK_IMPORTED_MODULE_1__["r"])(this, hostRef);
    }
    class_2.prototype.render = function () {
        return (Object(_core_13ed1ad7_js__WEBPACK_IMPORTED_MODULE_1__["h"])(_core_13ed1ad7_js__WEBPACK_IMPORTED_MODULE_1__["H"], { class: Object(_core_13ed1ad7_js__WEBPACK_IMPORTED_MODULE_1__["d"])(this) }));
    };
    Object.defineProperty(class_2, "style", {
        get: function () { return ".sc-ion-buttons-md-h{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-webkit-transform:translateZ(0);transform:translateZ(0);z-index:99}.sc-ion-buttons-md-s  ion-button {margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;--padding-top:0;--padding-bottom:0;--padding-start:8px;--padding-end:8px;--box-shadow:none;margin-left:2px;margin-right:2px;height:32px;font-size:14px;font-weight:500}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.sc-ion-buttons-md-s  ion-button {margin-left:unset;margin-right:unset;-webkit-margin-start:2px;margin-inline-start:2px;-webkit-margin-end:2px;margin-inline-end:2px}}.sc-ion-buttons-md-s  ion-button:not(.button-round) {--border-radius:2px}.sc-ion-buttons-md-h.ion-color.sc-ion-buttons-md-s  .button , .ion-color .sc-ion-buttons-md-h.sc-ion-buttons-md-s  .button {--color:initial;--color-focused:var(--ion-color-contrast);--color-hover:var(--ion-color-contrast);--background-hover:rgba(var(--ion-color-contrast-rgb),0.08);--background-focused:rgba(var(--ion-color-contrast-rgb),0.24)}.sc-ion-buttons-md-h.ion-color.sc-ion-buttons-md-s  .button-solid , .ion-color .sc-ion-buttons-md-h.sc-ion-buttons-md-s  .button-solid {--background:var(--ion-color-contrast);--background-activated:var(--ion-color-contrast);--background-focused:var(--ion-color-shade);--background-hover:var(--ion-color-tint);--color:var(--ion-color-base);--color-focused:var(--ion-color-base);--color-hover:var(--ion-color-base)}.sc-ion-buttons-md-h.ion-color.sc-ion-buttons-md-s  .button-outline , .ion-color .sc-ion-buttons-md-h.sc-ion-buttons-md-s  .button-outline {--border-color:var(--ion-color-contrast)}.sc-ion-buttons-md-s  .button-has-icon-only.button-clear {--padding-top:12px;--padding-end:12px;--padding-bottom:12px;--padding-start:12px;--border-radius:50%;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;width:48px;height:48px}.sc-ion-buttons-md-s  .button {--background-hover:rgba(66,66,66,0.08)}.sc-ion-buttons-md-s  .button-solid {--color:var(--ion-toolbar-background,var(--ion-background-color,#fff));--color-activated:var(--ion-toolbar-background,var(--ion-background-color,#fff));--background:var(--ion-toolbar-color,var(--ion-text-color,#424242));--background-activated:var(--ion-toolbar-color,var(--ion-text-color,#424242));--background-focused:var(--ion-toolbar-color-activated,#4a4a4a);--background-hover:rgba(66,66,66,0.92)}.sc-ion-buttons-md-s  .button-outline {--background:transparent;--background-activated:transparent;--border-color:var(--ion-toolbar-color,var(--ion-text-color,#424242));--background-focused:rgba(66,66,66,0.1)}.sc-ion-buttons-md-s  .button-clear , .sc-ion-buttons-md-s  .button-outline {--color:initial;--color-activated:currentColor;--color-focused:var(--ion-toolbar-color,var(--ion-text-color,#424242))}.sc-ion-buttons-md-s  .button-clear {--background:transparent;--background-focused:rgba(66,66,66,0.1)}.sc-ion-buttons-md-s  ion-icon[slot=start] {margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;margin-right:.3em;font-size:1.4em}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.sc-ion-buttons-md-s  ion-icon[slot=start] {margin-right:unset;-webkit-margin-end:.3em;margin-inline-end:.3em}}.sc-ion-buttons-md-s  ion-icon[slot=end] {margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;margin-left:.4em;font-size:1.4em}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.sc-ion-buttons-md-s  ion-icon[slot=end] {margin-left:unset;-webkit-margin-start:.4em;margin-inline-start:.4em}}.sc-ion-buttons-md-s  ion-icon[slot=icon-only] {padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;font-size:1.8em}"; },
        enumerable: true,
        configurable: true
    });
    return class_2;
}());
var Content = /** @class */ (function () {
    function class_3(hostRef) {
        Object(_core_13ed1ad7_js__WEBPACK_IMPORTED_MODULE_1__["r"])(this, hostRef);
        this.isScrolling = false;
        this.lastScroll = 0;
        this.queued = false;
        this.cTop = -1;
        this.cBottom = -1;
        // Detail is used in a hot loop in the scroll event, by allocating it here
        // V8 will be able to inline any read/write to it since it's a monomorphic class.
        // https://mrale.ph/blog/2015/01/11/whats-up-with-monomorphism.html
        this.detail = {
            scrollTop: 0,
            scrollLeft: 0,
            type: 'scroll',
            event: undefined,
            startX: 0,
            startY: 0,
            startTimeStamp: 0,
            currentX: 0,
            currentY: 0,
            velocityX: 0,
            velocityY: 0,
            deltaX: 0,
            deltaY: 0,
            timeStamp: 0,
            data: undefined,
            isScrolling: true,
        };
        /**
         * If `true`, the content will scroll behind the headers
         * and footers. This effect can easily be seen by setting the toolbar
         * to transparent.
         */
        this.fullscreen = false;
        /**
         * If you want to enable the content scrolling in the X axis, set this property to `true`.
         */
        this.scrollX = false;
        /**
         * If you want to disable the content scrolling in the Y axis, set this property to `false`.
         */
        this.scrollY = true;
        /**
         * Because of performance reasons, ionScroll events are disabled by default, in order to enable them
         * and start listening from (ionScroll), set this property to `true`.
         */
        this.scrollEvents = false;
        this.ionScrollStart = Object(_core_13ed1ad7_js__WEBPACK_IMPORTED_MODULE_1__["c"])(this, "ionScrollStart", 7);
        this.ionScroll = Object(_core_13ed1ad7_js__WEBPACK_IMPORTED_MODULE_1__["c"])(this, "ionScroll", 7);
        this.ionScrollEnd = Object(_core_13ed1ad7_js__WEBPACK_IMPORTED_MODULE_1__["c"])(this, "ionScrollEnd", 7);
    }
    class_3.prototype.componentWillLoad = function () {
        if (this.forceOverscroll === undefined) {
            var mode = Object(_core_13ed1ad7_js__WEBPACK_IMPORTED_MODULE_1__["d"])(this);
            this.forceOverscroll = mode === 'ios' && Object(_config_bb99b659_js__WEBPACK_IMPORTED_MODULE_2__["i"])(window, 'mobile');
        }
    };
    class_3.prototype.componentDidLoad = function () {
        this.resize();
    };
    class_3.prototype.componentDidUnload = function () {
        this.onScrollEnd();
    };
    class_3.prototype.onClick = function (ev) {
        if (this.isScrolling) {
            ev.preventDefault();
            ev.stopPropagation();
        }
    };
    class_3.prototype.resize = function () {
        if (this.fullscreen) {
            Object(_core_13ed1ad7_js__WEBPACK_IMPORTED_MODULE_1__["f"])(this.readDimensions.bind(this));
        }
        else if (this.cTop !== 0 || this.cBottom !== 0) {
            this.cTop = this.cBottom = 0;
            this.el.forceUpdate();
        }
    };
    class_3.prototype.readDimensions = function () {
        var page = getPageElement(this.el);
        var top = Math.max(this.el.offsetTop, 0);
        var bottom = Math.max(page.offsetHeight - top - this.el.offsetHeight, 0);
        var dirty = top !== this.cTop || bottom !== this.cBottom;
        if (dirty) {
            this.cTop = top;
            this.cBottom = bottom;
            this.el.forceUpdate();
        }
    };
    class_3.prototype.onScroll = function (ev) {
        var _this = this;
        var timeStamp = Date.now();
        var shouldStart = !this.isScrolling;
        this.lastScroll = timeStamp;
        if (shouldStart) {
            this.onScrollStart();
        }
        if (!this.queued && this.scrollEvents) {
            this.queued = true;
            Object(_core_13ed1ad7_js__WEBPACK_IMPORTED_MODULE_1__["f"])(function (ts) {
                _this.queued = false;
                _this.detail.event = ev;
                updateScrollDetail(_this.detail, _this.scrollEl, ts, shouldStart);
                _this.ionScroll.emit(_this.detail);
            });
        }
    };
    /**
     * Get the element where the actual scrolling takes place.
     * This element can be used to subscribe to `scroll` events or manually modify
     * `scrollTop`. However, it's recommended to use the API provided by `ion-content`:
     *
     * i.e. Using `ionScroll`, `ionScrollStart`, `ionScrollEnd` for scrolling events
     * and `scrollToPoint()` to scroll the content into a certain point.
     */
    class_3.prototype.getScrollElement = function () {
        return Promise.resolve(this.scrollEl);
    };
    /**
     * Scroll to the top of the component.
     *
     * @param duration The amount of time to take scrolling to the top. Defaults to `0`.
     */
    class_3.prototype.scrollToTop = function (duration) {
        if (duration === void 0) { duration = 0; }
        return this.scrollToPoint(undefined, 0, duration);
    };
    /**
     * Scroll to the bottom of the component.
     *
     * @param duration The amount of time to take scrolling to the bottom. Defaults to `0`.
     */
    class_3.prototype.scrollToBottom = function (duration) {
        if (duration === void 0) { duration = 0; }
        var y = this.scrollEl.scrollHeight - this.scrollEl.clientHeight;
        return this.scrollToPoint(undefined, y, duration);
    };
    /**
     * Scroll by a specified X/Y distance in the component.
     *
     * @param x The amount to scroll by on the horizontal axis.
     * @param y The amount to scroll by on the vertical axis.
     * @param duration The amount of time to take scrolling by that amount.
     */
    class_3.prototype.scrollByPoint = function (x, y, duration) {
        return this.scrollToPoint(x + this.scrollEl.scrollLeft, y + this.scrollEl.scrollTop, duration);
    };
    /**
     * Scroll to a specified X/Y location in the component.
     *
     * @param x The point to scroll to on the horizontal axis.
     * @param y The point to scroll to on the vertical axis.
     * @param duration The amount of time to take scrolling to that point. Defaults to `0`.
     */
    class_3.prototype.scrollToPoint = function (x, y, duration) {
        if (duration === void 0) { duration = 0; }
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var el, resolve, startTime, promise, fromY, fromX, deltaY, deltaX, step;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                el = this.scrollEl;
                if (duration < 32) {
                    if (y != null) {
                        el.scrollTop = y;
                    }
                    if (x != null) {
                        el.scrollLeft = x;
                    }
                    return [2 /*return*/];
                }
                startTime = 0;
                promise = new Promise(function (r) { return resolve = r; });
                fromY = el.scrollTop;
                fromX = el.scrollLeft;
                deltaY = y != null ? y - fromY : 0;
                deltaX = x != null ? x - fromX : 0;
                step = function (timeStamp) {
                    var linearTime = Math.min(1, ((timeStamp - startTime) / duration)) - 1;
                    var easedT = Math.pow(linearTime, 3) + 1;
                    if (deltaY !== 0) {
                        el.scrollTop = Math.floor((easedT * deltaY) + fromY);
                    }
                    if (deltaX !== 0) {
                        el.scrollLeft = Math.floor((easedT * deltaX) + fromX);
                    }
                    if (easedT < 1) {
                        // do not use DomController here
                        // must use nativeRaf in order to fire in the next frame
                        // TODO: remove as any
                        requestAnimationFrame(step);
                    }
                    else {
                        resolve();
                    }
                };
                // chill out for a frame first
                requestAnimationFrame(function (ts) {
                    startTime = ts;
                    step(ts);
                });
                return [2 /*return*/, promise];
            });
        });
    };
    class_3.prototype.onScrollStart = function () {
        var _this = this;
        this.isScrolling = true;
        this.ionScrollStart.emit({
            isScrolling: true
        });
        if (this.watchDog) {
            clearInterval(this.watchDog);
        }
        // watchdog
        this.watchDog = setInterval(function () {
            if (_this.lastScroll < Date.now() - 120) {
                _this.onScrollEnd();
            }
        }, 100);
    };
    class_3.prototype.onScrollEnd = function () {
        clearInterval(this.watchDog);
        this.watchDog = null;
        if (this.isScrolling) {
            this.isScrolling = false;
            this.ionScrollEnd.emit({
                isScrolling: false
            });
        }
    };
    class_3.prototype.render = function () {
        var _a;
        var _this = this;
        var mode = Object(_core_13ed1ad7_js__WEBPACK_IMPORTED_MODULE_1__["d"])(this);
        var _b = this, scrollX = _b.scrollX, scrollY = _b.scrollY, forceOverscroll = _b.forceOverscroll;
        var transitionShadow = (mode === 'ios' && _config_bb99b659_js__WEBPACK_IMPORTED_MODULE_2__["b"].getBoolean('experimentalTransitionShadow', true));
        this.resize();
        return (Object(_core_13ed1ad7_js__WEBPACK_IMPORTED_MODULE_1__["h"])(_core_13ed1ad7_js__WEBPACK_IMPORTED_MODULE_1__["H"], { class: Object.assign({}, Object(_theme_353a032e_js__WEBPACK_IMPORTED_MODULE_4__["c"])(this.color), (_a = {}, _a[mode] = true, _a['content-sizing'] = Object(_theme_353a032e_js__WEBPACK_IMPORTED_MODULE_4__["h"])('ion-popover', this.el), _a['overscroll'] = !!this.forceOverscroll, _a)), style: {
                '--offset-top': this.cTop + "px",
                '--offset-bottom': this.cBottom + "px",
            } }, Object(_core_13ed1ad7_js__WEBPACK_IMPORTED_MODULE_1__["h"])("main", { class: {
                'inner-scroll': true,
                'scroll-x': scrollX,
                'scroll-y': scrollY,
                'overscroll': (scrollX || scrollY) && !!forceOverscroll
            }, ref: function (el) { return _this.scrollEl = el; }, onScroll: function (ev) { return _this.onScroll(ev); } }, Object(_core_13ed1ad7_js__WEBPACK_IMPORTED_MODULE_1__["h"])("slot", null)), transitionShadow ? (Object(_core_13ed1ad7_js__WEBPACK_IMPORTED_MODULE_1__["h"])("div", { class: "transition-effect" }, Object(_core_13ed1ad7_js__WEBPACK_IMPORTED_MODULE_1__["h"])("div", { class: "transition-cover" }), Object(_core_13ed1ad7_js__WEBPACK_IMPORTED_MODULE_1__["h"])("div", { class: "transition-shadow" }))) : null, Object(_core_13ed1ad7_js__WEBPACK_IMPORTED_MODULE_1__["h"])("slot", { name: "fixed" })));
    };
    Object.defineProperty(class_3.prototype, "el", {
        get: function () { return Object(_core_13ed1ad7_js__WEBPACK_IMPORTED_MODULE_1__["e"])(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(class_3, "style", {
        get: function () { return ":host{--background:var(--ion-background-color,#fff);--color:var(--ion-text-color,#000);--padding-top:0px;--padding-bottom:0px;--padding-start:0px;--padding-end:0px;--keyboard-offset:0px;--offset-top:0px;--offset-bottom:0px;--overflow:auto;display:block;position:relative;-ms-flex:1;flex:1;width:100%;height:100%;margin:0!important;padding:0!important;font-family:var(--ion-font-family,inherit);contain:size style}:host(.ion-color) .inner-scroll{background:var(--ion-color-base);color:var(--ion-color-contrast)}:host(.outer-content){--background:var(--ion-color-step-50,#f2f2f2)}.inner-scroll{left:0;right:0;top:calc(var(--offset-top) * -1);bottom:calc(var(--offset-bottom) * -1);padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:calc(var(--padding-top) + var(--offset-top));padding-bottom:calc(var(--padding-bottom) + var(--keyboard-offset) + var(--offset-bottom));position:absolute;background:var(--background);color:var(--color);-webkit-box-sizing:border-box;box-sizing:border-box;overflow:hidden}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.inner-scroll{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.scroll-x,.scroll-y{-webkit-overflow-scrolling:touch;will-change:scroll-position;-ms-scroll-chaining:none;overscroll-behavior:contain}.scroll-y{-ms-touch-action:pan-y;touch-action:pan-y;overflow-y:var(--overflow)}.scroll-x{-ms-touch-action:pan-x;touch-action:pan-x;overflow-x:var(--overflow)}.scroll-x.scroll-y{-ms-touch-action:auto;touch-action:auto}.overscroll:after,.overscroll:before{position:absolute;width:1px;height:1px;content:\"\"}.overscroll:before{bottom:-1px}.overscroll:after{top:-1px}:host(.content-sizing){contain:none}:host(.content-sizing) .inner-scroll{position:relative}.transition-effect{left:-100%;opacity:0}.transition-cover,.transition-effect{position:absolute;width:100%;height:100%}.transition-cover{right:0;background:#000;opacity:.1}.transition-shadow{display:block;position:absolute;right:0;width:10px;height:100%;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAgCAYAAAAIXrg4AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MTE3MDgzRkQ5QTkyMTFFOUEwNzQ5MkJFREE1NUY2MjQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MTE3MDgzRkU5QTkyMTFFOUEwNzQ5MkJFREE1NUY2MjQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoxMTcwODNGQjlBOTIxMUU5QTA3NDkyQkVEQTU1RjYyNCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoxMTcwODNGQzlBOTIxMUU5QTA3NDkyQkVEQTU1RjYyNCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PmePEuQAAABNSURBVHjaYvz//z8DIxAwMDAwATGMhmFmPDQuOSZks0AMmoJBaQHjkPfB0Lfg/2gQjVow+HPy/yHvg9GiYjQfjMbBqAWjFgy/4hogwADYqwdzxy5BuwAAAABJRU5ErkJggg==);background-repeat:repeat-y;background-size:10px 16px}"; },
        enumerable: true,
        configurable: true
    });
    return class_3;
}());
var getParentElement = function (el) {
    if (el.parentElement) {
        // normal element with a parent element
        return el.parentElement;
    }
    if (el.parentNode && el.parentNode.host) {
        // shadow dom's document fragment
        return el.parentNode.host;
    }
    return null;
};
var getPageElement = function (el) {
    var tabs = el.closest('ion-tabs');
    if (tabs) {
        return tabs;
    }
    var page = el.closest('ion-app,ion-page,.ion-page,page-inner');
    if (page) {
        return page;
    }
    return getParentElement(el);
};
// ******** DOM READ ****************
var updateScrollDetail = function (detail, el, timestamp, shouldStart) {
    var prevX = detail.currentX;
    var prevY = detail.currentY;
    var prevT = detail.timeStamp;
    var currentX = el.scrollLeft;
    var currentY = el.scrollTop;
    var timeDelta = timestamp - prevT;
    if (shouldStart) {
        // remember the start positions
        detail.startTimeStamp = timestamp;
        detail.startX = currentX;
        detail.startY = currentY;
        detail.velocityX = detail.velocityY = 0;
    }
    detail.timeStamp = timestamp;
    detail.currentX = detail.scrollLeft = currentX;
    detail.currentY = detail.scrollTop = currentY;
    detail.deltaX = currentX - detail.startX;
    detail.deltaY = currentY - detail.startY;
    if (timeDelta > 0 && timeDelta < 100) {
        var velocityX = (currentX - prevX) / timeDelta;
        var velocityY = (currentY - prevY) / timeDelta;
        detail.velocityX = velocityX * 0.7 + detail.velocityX * 0.3;
        detail.velocityY = velocityY * 0.7 + detail.velocityY * 0.3;
    }
};
var Footer = /** @class */ (function () {
    function class_4(hostRef) {
        Object(_core_13ed1ad7_js__WEBPACK_IMPORTED_MODULE_1__["r"])(this, hostRef);
        /**
         * If `true`, the footer will be translucent.
         * Only applies when the mode is `"ios"` and the device supports
         * [`backdrop-filter`](https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter#Browser_compatibility).
         *
         * Note: In order to scroll content behind the footer, the `fullscreen`
         * attribute needs to be set on the content.
         */
        this.translucent = false;
    }
    class_4.prototype.render = function () {
        var _a;
        var mode = Object(_core_13ed1ad7_js__WEBPACK_IMPORTED_MODULE_1__["d"])(this);
        var translucent = this.translucent;
        return (Object(_core_13ed1ad7_js__WEBPACK_IMPORTED_MODULE_1__["h"])(_core_13ed1ad7_js__WEBPACK_IMPORTED_MODULE_1__["H"], { role: "contentinfo", class: (_a = {},
                _a[mode] = true,
                // Used internally for styling
                _a["footer-" + mode] = true,
                _a["footer-translucent"] = translucent,
                _a["footer-translucent-" + mode] = translucent,
                _a) }));
    };
    Object.defineProperty(class_4, "style", {
        get: function () { return "ion-footer{display:block;position:relative;-ms-flex-order:1;order:1;width:100%;z-index:10}ion-footer ion-toolbar:last-child{padding-bottom:var(--ion-safe-area-bottom,0)}.footer-md:before{left:0;top:-2px;bottom:auto;background-position:left 0 top 0;position:absolute;width:100%;height:2px;background-image:url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAHBAMAAADzDtBxAAAAD1BMVEUAAAAAAAAAAAAAAAAAAABPDueNAAAABXRSTlMUCS0gBIh/TXEAAAAaSURBVAjXYxCEAgY4UIICBmMogMsgFLtAAQCNSwXZKOdPxgAAAABJRU5ErkJggg==\");background-repeat:repeat-x;content:\"\"}:host-context([dir=rtl]) .footer-md:before,[dir=rtl] .footer-md:before{left:unset;right:unset;right:0;background-position:right 0 top 0}.footer-md[no-border]:before{display:none}"; },
        enumerable: true,
        configurable: true
    });
    return class_4;
}());
var Header = /** @class */ (function () {
    function class_5(hostRef) {
        Object(_core_13ed1ad7_js__WEBPACK_IMPORTED_MODULE_1__["r"])(this, hostRef);
        /**
         * If `true`, the header will be translucent.
         * Only applies when the mode is `"ios"` and the device supports
         * [`backdrop-filter`](https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter#Browser_compatibility).
         *
         * Note: In order to scroll content behind the header, the `fullscreen`
         * attribute needs to be set on the content.
         */
        this.translucent = false;
    }
    class_5.prototype.render = function () {
        var _a;
        var mode = Object(_core_13ed1ad7_js__WEBPACK_IMPORTED_MODULE_1__["d"])(this);
        return (Object(_core_13ed1ad7_js__WEBPACK_IMPORTED_MODULE_1__["h"])(_core_13ed1ad7_js__WEBPACK_IMPORTED_MODULE_1__["H"], { role: "banner", class: (_a = {},
                _a[mode] = true,
                // Used internally for styling
                _a["header-" + mode] = true,
                _a["header-translucent"] = this.translucent,
                _a["header-translucent-" + mode] = this.translucent,
                _a) }));
    };
    Object.defineProperty(class_5, "style", {
        get: function () { return "ion-header{display:block;position:relative;-ms-flex-order:-1;order:-1;width:100%;z-index:10}ion-header ion-toolbar:first-child{padding-top:var(--ion-safe-area-top,0)}.header-md:after{left:0;bottom:-5px;background-position:left 0 top -2px;position:absolute;width:100%;height:5px;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAHBAMAAADzDtBxAAAAD1BMVEUAAAAAAAAAAAAAAAAAAABPDueNAAAABXRSTlMUCS0gBIh/TXEAAAAaSURBVAjXYxCEAgY4UIICBmMogMsgFLtAAQCNSwXZKOdPxgAAAABJRU5ErkJggg==);background-repeat:repeat-x;content:\"\"}:host-context([dir=rtl]) .header-md:after,[dir=rtl] .header-md:after{left:unset;right:unset;right:0;background-position:right 0 top -2px}.header-md[no-border]:after{display:none}"; },
        enumerable: true,
        configurable: true
    });
    return class_5;
}());
var RouterOutlet = /** @class */ (function () {
    function class_6(hostRef) {
        Object(_core_13ed1ad7_js__WEBPACK_IMPORTED_MODULE_1__["r"])(this, hostRef);
        this.animationEnabled = true;
        /**
         * The mode determines which platform styles to use.
         */
        this.mode = Object(_core_13ed1ad7_js__WEBPACK_IMPORTED_MODULE_1__["d"])(this);
        /**
         * If `true`, the router-outlet should animate the transition of components.
         */
        this.animated = true;
        this.ionNavWillLoad = Object(_core_13ed1ad7_js__WEBPACK_IMPORTED_MODULE_1__["c"])(this, "ionNavWillLoad", 7);
        this.ionNavWillChange = Object(_core_13ed1ad7_js__WEBPACK_IMPORTED_MODULE_1__["c"])(this, "ionNavWillChange", 3);
        this.ionNavDidChange = Object(_core_13ed1ad7_js__WEBPACK_IMPORTED_MODULE_1__["c"])(this, "ionNavDidChange", 3);
    }
    class_6.prototype.swipeHandlerChanged = function () {
        if (this.gesture) {
            this.gesture.setDisabled(this.swipeHandler === undefined);
        }
    };
    class_6.prototype.componentWillLoad = function () {
        this.ionNavWillLoad.emit();
    };
    class_6.prototype.componentDidLoad = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, __webpack_require__.e(/*! import() | swipe-back-dc1b83c2-js */ "swipe-back-dc1b83c2-js").then(__webpack_require__.bind(null, /*! ./swipe-back-dc1b83c2.js */ "./node_modules/@ionic/core/dist/esm-es5/swipe-back-dc1b83c2.js"))];
                    case 1:
                        _a.gesture = (_b.sent()).createSwipeBackGesture(this.el, function () { return !!_this.swipeHandler && _this.swipeHandler.canStart() && _this.animationEnabled; }, function () { return _this.swipeHandler && _this.swipeHandler.onStart(); }, function (step) { return _this.ani && _this.ani.progressStep(step); }, function (shouldComplete, step, dur) {
                            if (_this.ani) {
                                _this.animationEnabled = false;
                                _this.ani.onFinish(function () {
                                    _this.animationEnabled = true;
                                }, { oneTimeCallback: true });
                                // Account for rounding errors in JS
                                var newStepValue = (shouldComplete) ? -0.001 : 0.001;
                                /**
                                 * Animation will be reversed here, so need to
                                 * reverse the easing curve as well
                                 *
                                 * Additionally, we need to account for the time relative
                                 * to the new easing curve, as `stepValue` is going to be given
                                 * in terms of a linear curve.
                                 */
                                if (!shouldComplete) {
                                    _this.ani.easing('cubic-bezier(1, 0, 0.68, 0.28)');
                                    newStepValue += Object(_cubic_bezier_90d0df24_js__WEBPACK_IMPORTED_MODULE_8__["g"])(new _cubic_bezier_90d0df24_js__WEBPACK_IMPORTED_MODULE_8__["P"](0, 0), new _cubic_bezier_90d0df24_js__WEBPACK_IMPORTED_MODULE_8__["P"](1, 0), new _cubic_bezier_90d0df24_js__WEBPACK_IMPORTED_MODULE_8__["P"](0.68, 0.28), new _cubic_bezier_90d0df24_js__WEBPACK_IMPORTED_MODULE_8__["P"](1, 1), step);
                                }
                                else {
                                    newStepValue += Object(_cubic_bezier_90d0df24_js__WEBPACK_IMPORTED_MODULE_8__["g"])(new _cubic_bezier_90d0df24_js__WEBPACK_IMPORTED_MODULE_8__["P"](0, 0), new _cubic_bezier_90d0df24_js__WEBPACK_IMPORTED_MODULE_8__["P"](0.32, 0.72), new _cubic_bezier_90d0df24_js__WEBPACK_IMPORTED_MODULE_8__["P"](0, 1), new _cubic_bezier_90d0df24_js__WEBPACK_IMPORTED_MODULE_8__["P"](1, 1), step);
                                }
                                _this.ani.progressEnd(shouldComplete, newStepValue, dur);
                            }
                            if (_this.swipeHandler) {
                                _this.swipeHandler.onEnd(shouldComplete);
                            }
                        });
                        this.swipeHandlerChanged();
                        return [2 /*return*/];
                }
            });
        });
    };
    class_6.prototype.componentDidUnload = function () {
        this.activeEl = this.activeComponent = undefined;
        if (this.gesture) {
            this.gesture.destroy();
            this.gesture = undefined;
        }
    };
    /** @internal */
    class_6.prototype.commit = function (enteringEl, leavingEl, opts) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var unlock, changed, e_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.lock()];
                    case 1:
                        unlock = _a.sent();
                        changed = false;
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 4, , 5]);
                        return [4 /*yield*/, this.transition(enteringEl, leavingEl, opts)];
                    case 3:
                        changed = _a.sent();
                        return [3 /*break*/, 5];
                    case 4:
                        e_1 = _a.sent();
                        console.error(e_1);
                        return [3 /*break*/, 5];
                    case 5:
                        unlock();
                        return [2 /*return*/, changed];
                }
            });
        });
    };
    /** @internal */
    class_6.prototype.setRouteId = function (id, params, direction) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var changed;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.setRoot(id, params, {
                            duration: direction === 'root' ? 0 : undefined,
                            direction: direction === 'back' ? 'back' : 'forward',
                        })];
                    case 1:
                        changed = _a.sent();
                        return [2 /*return*/, {
                                changed: changed,
                                element: this.activeEl
                            }];
                }
            });
        });
    };
    /** @internal */
    class_6.prototype.getRouteId = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var active;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                active = this.activeEl;
                return [2 /*return*/, active ? {
                        id: active.tagName,
                        element: active,
                    } : undefined];
            });
        });
    };
    class_6.prototype.setRoot = function (component, params, opts) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var leavingEl, enteringEl;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.activeComponent === component) {
                            return [2 /*return*/, false];
                        }
                        leavingEl = this.activeEl;
                        return [4 /*yield*/, Object(_framework_delegate_00265c49_js__WEBPACK_IMPORTED_MODULE_6__["a"])(this.delegate, this.el, component, ['ion-page', 'ion-page-invisible'], params)];
                    case 1:
                        enteringEl = _a.sent();
                        this.activeComponent = component;
                        this.activeEl = enteringEl;
                        // commit animation
                        return [4 /*yield*/, this.commit(enteringEl, leavingEl, opts)];
                    case 2:
                        // commit animation
                        _a.sent();
                        return [4 /*yield*/, Object(_framework_delegate_00265c49_js__WEBPACK_IMPORTED_MODULE_6__["d"])(this.delegate, leavingEl)];
                    case 3:
                        _a.sent();
                        return [2 /*return*/, true];
                }
            });
        });
    };
    class_6.prototype.transition = function (enteringEl, leavingEl, opts) {
        if (opts === void 0) { opts = {}; }
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a, el, mode, animated, animationBuilder;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (leavingEl === enteringEl) {
                            return [2 /*return*/, false];
                        }
                        // emit nav will change event
                        this.ionNavWillChange.emit();
                        _a = this, el = _a.el, mode = _a.mode;
                        animated = this.animated && _config_bb99b659_js__WEBPACK_IMPORTED_MODULE_2__["b"].getBoolean('animated', true);
                        animationBuilder = this.animation || opts.animationBuilder || _config_bb99b659_js__WEBPACK_IMPORTED_MODULE_2__["b"].get('navAnimation');
                        return [4 /*yield*/, Object(_index_eb64bc48_js__WEBPACK_IMPORTED_MODULE_7__["t"])(Object.assign({ mode: mode,
                                animated: animated,
                                animationBuilder: animationBuilder,
                                enteringEl: enteringEl,
                                leavingEl: leavingEl, baseEl: el, progressCallback: (opts.progressAnimation
                                    ? function (ani) { return _this.ani = ani; }
                                    : undefined) }, opts))];
                    case 1:
                        _b.sent();
                        // emit nav changed event
                        this.ionNavDidChange.emit();
                        return [2 /*return*/, true];
                }
            });
        });
    };
    class_6.prototype.lock = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var p, resolve;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        p = this.waitPromise;
                        this.waitPromise = new Promise(function (r) { return resolve = r; });
                        if (!(p !== undefined)) return [3 /*break*/, 2];
                        return [4 /*yield*/, p];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [2 /*return*/, resolve];
                }
            });
        });
    };
    class_6.prototype.render = function () {
        return (Object(_core_13ed1ad7_js__WEBPACK_IMPORTED_MODULE_1__["h"])("slot", null));
    };
    Object.defineProperty(class_6.prototype, "el", {
        get: function () { return Object(_core_13ed1ad7_js__WEBPACK_IMPORTED_MODULE_1__["e"])(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(class_6, "watchers", {
        get: function () {
            return {
                "swipeHandler": ["swipeHandlerChanged"]
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(class_6, "style", {
        get: function () { return ":host{left:0;right:0;top:0;bottom:0;position:absolute;contain:layout size style;overflow:hidden;z-index:0}"; },
        enumerable: true,
        configurable: true
    });
    return class_6;
}());
var ToolbarTitle = /** @class */ (function () {
    function class_7(hostRef) {
        Object(_core_13ed1ad7_js__WEBPACK_IMPORTED_MODULE_1__["r"])(this, hostRef);
    }
    class_7.prototype.getMode = function () {
        var mode = Object(_core_13ed1ad7_js__WEBPACK_IMPORTED_MODULE_1__["d"])(this);
        var toolbar = this.el.closest('ion-toolbar');
        return (toolbar && toolbar.mode) || mode;
    };
    class_7.prototype.render = function () {
        var _a;
        var mode = this.getMode();
        return (Object(_core_13ed1ad7_js__WEBPACK_IMPORTED_MODULE_1__["h"])(_core_13ed1ad7_js__WEBPACK_IMPORTED_MODULE_1__["H"], { class: Object.assign((_a = {}, _a[mode] = true, _a["title-" + mode] = true, _a), Object(_theme_353a032e_js__WEBPACK_IMPORTED_MODULE_4__["c"])(this.color)) }, Object(_core_13ed1ad7_js__WEBPACK_IMPORTED_MODULE_1__["h"])("div", { class: "toolbar-title" }, Object(_core_13ed1ad7_js__WEBPACK_IMPORTED_MODULE_1__["h"])("slot", null))));
    };
    Object.defineProperty(class_7.prototype, "el", {
        get: function () { return Object(_core_13ed1ad7_js__WEBPACK_IMPORTED_MODULE_1__["e"])(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(class_7, "style", {
        get: function () { return ":host{--color:initial;display:-ms-flexbox;display:flex;-ms-flex:1;flex:1;-ms-flex-align:center;align-items:center;color:var(--color)}:host,:host(.title-ios){-webkit-transform:translateZ(0);transform:translateZ(0)}:host(.title-ios){left:0;top:0;padding-left:90px;padding-right:90px;padding-top:0;padding-bottom:0;position:absolute;width:100%;height:100%;font-size:17px;font-weight:600;letter-spacing:-.03em;text-align:center;-webkit-box-sizing:border-box;box-sizing:border-box;pointer-events:none}:host-context([dir=rtl]).title-ios,:host-context([dir=rtl]):host(.title-ios){left:unset;right:unset;right:0}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host(.title-ios){padding-left:unset;padding-right:unset;-webkit-padding-start:90px;padding-inline-start:90px;-webkit-padding-end:90px;padding-inline-end:90px}}:host(.title-md){padding-left:20px;padding-right:20px;padding-top:0;padding-bottom:0;font-size:20px;font-weight:500;letter-spacing:.0125em}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host(.title-md){padding-left:unset;padding-right:unset;-webkit-padding-start:20px;padding-inline-start:20px;-webkit-padding-end:20px;padding-inline-end:20px}}:host(.ion-color){color:var(--ion-color-base)}.toolbar-title{display:block;width:100%;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;pointer-events:auto}"; },
        enumerable: true,
        configurable: true
    });
    return class_7;
}());
var Toolbar = /** @class */ (function () {
    function class_8(hostRef) {
        Object(_core_13ed1ad7_js__WEBPACK_IMPORTED_MODULE_1__["r"])(this, hostRef);
        this.childrenStyles = new Map();
    }
    class_8.prototype.componentWillLoad = function () {
        var buttons = Array.from(this.el.querySelectorAll('ion-buttons'));
        var firstButtons = buttons.find(function (button) {
            return button.slot === 'start';
        });
        if (firstButtons) {
            firstButtons.classList.add('buttons-first-slot');
        }
        var buttonsReversed = buttons.reverse();
        var lastButtons = buttonsReversed.find(function (button) { return button.slot === 'end'; }) ||
            buttonsReversed.find(function (button) { return button.slot === 'primary'; }) ||
            buttonsReversed.find(function (button) { return button.slot === 'secondary'; });
        if (lastButtons) {
            lastButtons.classList.add('buttons-last-slot');
        }
    };
    class_8.prototype.childrenStyle = function (ev) {
        ev.stopPropagation();
        var tagName = ev.target.tagName;
        var updatedStyles = ev.detail;
        var newStyles = {};
        var childStyles = this.childrenStyles.get(tagName) || {};
        var hasStyleChange = false;
        Object.keys(updatedStyles).forEach(function (key) {
            var childKey = "toolbar-" + key;
            var newValue = updatedStyles[key];
            if (newValue !== childStyles[childKey]) {
                hasStyleChange = true;
            }
            if (newValue) {
                newStyles[childKey] = true;
            }
        });
        if (hasStyleChange) {
            this.childrenStyles.set(tagName, newStyles);
            this.el.forceUpdate();
        }
    };
    class_8.prototype.render = function () {
        var _a;
        var mode = Object(_core_13ed1ad7_js__WEBPACK_IMPORTED_MODULE_1__["d"])(this);
        var childStyles = {};
        this.childrenStyles.forEach(function (value) {
            Object.assign(childStyles, value);
        });
        return (Object(_core_13ed1ad7_js__WEBPACK_IMPORTED_MODULE_1__["h"])(_core_13ed1ad7_js__WEBPACK_IMPORTED_MODULE_1__["H"], { class: Object.assign((_a = {}, _a[mode] = true, _a), childStyles, Object(_theme_353a032e_js__WEBPACK_IMPORTED_MODULE_4__["c"])(this.color)) }, Object(_core_13ed1ad7_js__WEBPACK_IMPORTED_MODULE_1__["h"])("div", { class: "toolbar-background" }), Object(_core_13ed1ad7_js__WEBPACK_IMPORTED_MODULE_1__["h"])("div", { class: "toolbar-container" }, Object(_core_13ed1ad7_js__WEBPACK_IMPORTED_MODULE_1__["h"])("slot", { name: "start" }), Object(_core_13ed1ad7_js__WEBPACK_IMPORTED_MODULE_1__["h"])("slot", { name: "secondary" }), Object(_core_13ed1ad7_js__WEBPACK_IMPORTED_MODULE_1__["h"])("div", { class: "toolbar-content" }, Object(_core_13ed1ad7_js__WEBPACK_IMPORTED_MODULE_1__["h"])("slot", null)), Object(_core_13ed1ad7_js__WEBPACK_IMPORTED_MODULE_1__["h"])("slot", { name: "primary" }), Object(_core_13ed1ad7_js__WEBPACK_IMPORTED_MODULE_1__["h"])("slot", { name: "end" }))));
    };
    Object.defineProperty(class_8.prototype, "el", {
        get: function () { return Object(_core_13ed1ad7_js__WEBPACK_IMPORTED_MODULE_1__["e"])(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(class_8, "style", {
        get: function () { return ":host{--border-width:0;--border-style:solid;--opacity:1;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;padding-left:var(--ion-safe-area-left);padding-right:var(--ion-safe-area-right);display:block;position:relative;width:100%;color:var(--color);font-family:var(--ion-font-family,inherit);contain:content;z-index:10;-webkit-box-sizing:border-box;box-sizing:border-box}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--ion-safe-area-left);padding-inline-start:var(--ion-safe-area-left);-webkit-padding-end:var(--ion-safe-area-right);padding-inline-end:var(--ion-safe-area-right)}}:host(.ion-color){color:var(--ion-color-contrast)}:host(.ion-color) .toolbar-background{background:var(--ion-color-base)}.toolbar-container{padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);display:-ms-flexbox;display:flex;position:relative;-ms-flex-direction:row;flex-direction:row;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;width:100%;min-height:var(--min-height);contain:content;overflow:hidden;z-index:10;-webkit-box-sizing:border-box;box-sizing:border-box}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.toolbar-container{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.toolbar-background{top:0;-webkit-transform:translateZ(0);transform:translateZ(0);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);contain:strict;opacity:var(--opacity);z-index:-1;pointer-events:none}.toolbar-background,::slotted(ion-progress-bar){left:0;right:0;bottom:0;position:absolute}:host{--background:var(--ion-toolbar-background,var(--ion-background-color,#fff));--color:var(--ion-toolbar-color,var(--ion-text-color,#424242));--border-color:var(--ion-toolbar-border-color,var(--ion-border-color,var(--ion-color-step-150,#c1c4cd)));--padding-top:0;--padding-bottom:0;--padding-start:0;--padding-end:0;--min-height:56px}.toolbar-content{-ms-flex:1;flex:1;-ms-flex-order:3;order:3;min-width:0;max-width:100%}::slotted(ion-segment){min-height:var(--min-height)}::slotted(.buttons-first-slot){margin-left:4px}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){::slotted(.buttons-first-slot){margin-left:unset;-webkit-margin-start:4px;margin-inline-start:4px}}::slotted(.buttons-last-slot){margin-right:4px}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){::slotted(.buttons-last-slot){margin-right:unset;-webkit-margin-end:4px;margin-inline-end:4px}}::slotted([slot=start]){-ms-flex-order:2;order:2}::slotted([slot=secondary]){-ms-flex-order:4;order:4}::slotted([slot=primary]){-ms-flex-order:5;order:5;text-align:end}::slotted([slot=end]){-ms-flex-order:6;order:6;text-align:end}"; },
        enumerable: true,
        configurable: true
    });
    return class_8;
}());



/***/ })

}]);
//# sourceMappingURL=8-es5.js.map