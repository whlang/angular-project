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
var http_service_1 = require('../utility/service/http.service');
var router_1 = require('@angular/router');
var RegisterComponent = (function () {
    function RegisterComponent(myHttpSerive, myRouter) {
        this.myHttpSerive = myHttpSerive;
        this.myRouter = myRouter;
        this.myImage = false;
        this.userName = "";
        this.userPwd = "";
        this.confPwd = "";
        this.email = "";
    }
    ;
    RegisterComponent.prototype.ngOnInit = function () { };
    ;
    RegisterComponent.prototype.submit = function () {
        var _this = this;
        this.myHttpSerive
            .sendRequest('http://localhost/admin/data/user/register.php?'
            + 'uname=' + this.userName + '&upwd=' + this.userPwd + '&cpwd='
            + this.confPwd + '&email=' + this.email + '&phone=' + this.phone)
            .subscribe(function (result) {
            console.log(result);
            if (result.code == 200) {
                _this.myRouter.navigateByUrl('/login');
            }
            else {
                alert(result.msg);
            }
        });
    };
    ;
    RegisterComponent = __decorate([
        core_1.Component({
            selector: 'storeRegister',
            templateUrl: './register.component.html',
            styleUrls: ['assets/css/login.css', 'assets/css/animate.css']
        }), 
        __metadata('design:paramtypes', [http_service_1.MyHttpService, router_1.Router])
    ], RegisterComponent);
    return RegisterComponent;
}());
exports.RegisterComponent = RegisterComponent;
//# sourceMappingURL=register.component.js.map