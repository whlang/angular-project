"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_service_1 = require('../service/http.service');
var HeaderComponent = (function () {
    function HeaderComponent(myHttpService) {
        this.myHttpService = myHttpService;
        this.isUserLogin = false;
        this.userName = "";
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.myHttpService
            .sendRequest('http://localhost/admin/data/user/session_data.php')
            .subscribe(function (result) {
            console.log(result);
            if (result.uname) {
                _this.isUserLogin = true;
                _this.userName = result.uname;
            }
        });
    };
    ;
    HeaderComponent.prototype.logout = function () {
        var _this = this;
        this.myHttpService
            .sendRequest('http://localhost/admin/data/user/logout.php')
            .subscribe(function (result) {
            if (result.code == 200) {
                _this.isUserLogin = false;
                _this.userName = "";
            }
        });
    };
    ;
    HeaderComponent = __decorate([
        core_1.Component({
            selector: 'storeHeader',
            templateUrl: './header.component.html'
        }), 
        __metadata('design:paramtypes', [http_service_1.MyHttpService])
    ], HeaderComponent);
    return HeaderComponent;
}());
exports.HeaderComponent = HeaderComponent;
//# sourceMappingURL=header.component.js.map