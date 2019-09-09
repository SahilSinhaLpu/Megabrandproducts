(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".welcome{\n    width: 100%;\n    height: 75%;\n    top:0%;\n    background-size: cover;\n    -webkit-animation-name: zoomIn;\n    -webkit-animation-duration: 1s;\n    animation-name: zoomIn;\n    animation-duration: 1s;\n}\n\n@-webkit-keyframes fadeInLeft {\n    from {\n        opacity: 0;\n        -webkit-transform: translate3d(-100%, 0, 0);\n        transform: translate3d(-100%, 0, 0);\n    }\n\n    to {\n        opacity: 1;\n        -webkit-transform: translate3d(0, 0, 0);\n        transform: translate3d(0, 0, 0);\n    }\n}\n\n@keyframes fadeInLeft {\n    from {\n        opacity: 0;\n        -webkit-transform: translate3d(-100%, 0, 0);\n        transform: translate3d(-100%, 0, 0);\n    }\n\n    to {\n        opacity: 1;\n        -webkit-transform: translate3d(0, 0, 0);\n        transform: translate3d(0, 0, 0);\n    }\n}\n\n@-webkit-keyframes zoomIn {\n    from {\n      opacity: 0;\n      -webkit-transform: scale3d(0.3, 0.3, 0.3);\n      transform: scale3d(0.3, 0.3, 0.3);\n    }\n  \n    50% {\n      opacity: 1;\n    }\n  }\n\n@keyframes zoomIn {\n    from {\n      opacity: 0;\n      -webkit-transform: scale3d(0.3, 0.3, 0.3);\n      transform: scale3d(0.3, 0.3, 0.3);\n    }\n  \n    50% {\n      opacity: 1;\n    }\n  }\n\n.welcome .weltext{\n    background-image: linear-gradient(to top, #09203f 0%, #082e4b 100%);\n    opacity: .8;\n    width: 50%;\n    height: 30%;\n    border-radius: 8px;\n    box-shadow: 0 0 32px rgba(0,0,0,0.5);\n    position: relative;\n    top:40%;\n    left:50%;\n    -webkit-transform: translate(-50%,-50%);\n            transform: translate(-50%,-50%);\n}\n\n.imageinplace{\n    height: 10%;\n    width: 10%;\n}\n\n@media(max-width: 600px){\n    .welcome .weltext{\n        width: 100%;\n        height: 50%;\n        border-radius: 8px;\n        box-shadow: 32px 32px 32px rgba(0,0,0,0.5);\n        position: relative;\n        top:40%;\n        left:50%;\n    }\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body style=\"background:  linear-gradient(to right, #93291e, #93291e);\"  class = \"animated fadeInUp\">\n  <div class=\"ui large top fixed menu\" style=\"background: linear-gradient(to bottom, #200122, #6f0000); box-shadow: 5px 5px 5px rgba(248, 38, 30, 0.5); \">\n    <div class=\"item\" style=\"left:50%; transform: translate(-50%,0%); font-family: 'Sunflower', sans-serif; font-size:20px; color: white; line-height: 20px;\">Megabrand Products</div>\n  </div>\n  <div class=\"welcome\" [ngStyle]= \"{'background-image': 'url(' + photo + ')'}\">\n    <div class=\"weltext\">\n      <hr>\n      <hr>\n      <h1 style=\"color: white; text-align: center;font-family: 'Cairo', sans-serif;\"><b>Welcome to Megabrand Products!</b></h1>\n      <div class=\"ui segment\" style=\"background-image: linear-gradient(to right, black 100%, black 100%);\">\n          <p style=\"color: white; text-align: center; line-height: 200%; font-size: 120%; font-family: 'Ruda', sans-serif;\">\n              We supply the world's finest varieties of Tea and Spices.<br>\n              The mesmerizing aroma and flavour of our Tea-leaf products will make your day.<br>\n              Appetizing taste of our pure Spices will make your food more delectable. <br>\n              Contact Us to know more and buy from us.\n          </p>\n      </div>\n      <hr>\n      <hr>\n    </div>\n  </div>\n\n  <div class=\"ui raised segment container\" style=\"background:linear-gradient(to top, #1d4350, #a43931); \">\n    <div class=\"ui massive black ribbon label\">Our Products</div>\n    <hr>\n    <hr>\n    <div class=\"ui three stackable cards\">\n      <div class=\"card\">\n        <img src=\"../assets/tea2.jpg\" style=\"width: 100%; height: 100%;\">\n        <div class=\"content\">\n          <div class=\"header\">Tea Leafs</div>\n          <div class=\"item\">  Finest quality tea leafs of following varieties : </div>\n              <div class=\"item\">Black Tea</div>\n              <div class=\"item\">Green Tea</div>\n        </div>\n      </div>\n      <div class=\"card\">\n        <img src=\"../assets/spice.jpg\" style=\"width:100%; height: 100%;\">\n          <div class=\"content\">\n            <div class=\"header\">Spices</div>\n            <div class=\"content\">\n              <p>Appetizing and tasty Spices prepared from pure herbs.</p>\n              <p>Red Chilli Powder,  Turmeric Powder and many more</p>\n            </div>\n          </div>\n        </div>\n        <div class=\"card\">\n          <img src=\"../assets/flour.jpg\" style=\"width: 100%; height: 100%;\">\n            <div class=\"content\">\n              <div class=\"header\">Cereal Products</div>\n              <div class=\"content\">\n                Healthy and enriched Flour Products from different Cereal like Wheat and other Cereals\n                <p>Quality Assured Products</p>\n              </div>\n            </div>\n          </div>\n    </div>\n    <div class=\"ui small icon message\">\n      <i class=\"hand point right icon\"></i>\n      <div class=\"content\">\n      <div class=\"header\">We are under development. Stayed tuned to buy products soon!!</div> \n    </div>\n    </div>\n  </div>\n  \n\n  \n  <div class=\"ui fluid segment\" style=\"  background:linear-gradient(to top, #1d4350, #a43931);\">\n        <div class=\"ui inverted segment\" >\n            <div class=\"ui large list\" >\n                <div class=\"item\">\n                    <div class=\"header\" style=\"color: white\">Megabrand Products Pvt. Ltd. <i class=\"trademark icon\"></i></div>\n                    Madhubhani, Bihar\n                </div>\n                <hr>\n            <div class=\"item\">\n              <div class=\"header\" style=\"color: white\">Contact Us:\n              </div>\n              Email id: megabrandproducts@gmail.com\n              <br>\n              Find us on: <br>\n              <a href=\"https://www.facebook.com/pg/Megabrand-Products-Pvt-Ltd-247901202414334/about/?ref=page_internal\" target=\"_blank\"><i class=\"facebook icon\"></i></a>\n            </div>\n          </div>\n    </div>\n  </div>\n</body>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        var _this = this;
        this.title = 'MegabrandProducts';
        this.imageArray = [
            "../assets/homepage.jpg",
            "../assets/homepage2.jpg"
        ];
        this.index = 0;
        this.photo = this.imageArray[0];
        this.timer = setInterval(function () {
            _this.index = _this.index + 1;
            if (_this.imageArray === undefined)
                console.log("imageArrayNotPresent");
            else if (_this.index == _this.imageArray.length)
                _this.index = 0;
            _this.photo = _this.imageArray[_this.index];
        }, 10000);
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/juspay/Desktop/My Stuff/Megabrandproducts/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map