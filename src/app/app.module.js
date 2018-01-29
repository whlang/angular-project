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
var platform_browser_1 = require('@angular/platform-browser');
var app_router_1 = require('./app.router');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var app_component_1 = require('./app.component');
var header_component_1 = require('./utility/header/header.component');
var footer_component_1 = require('./utility/footer/footer.component');
var index_component_1 = require('./index/index.component');
var http_service_1 = require('./utility/service/http.service');
var carousel_component_1 = require('./utility/carsousel/carousel.component');
var slide_component_1 = require('./utility/carsousel/slide.component');
var login_component_1 = require('./login/login.component');
var register_component_1 = require('./register/register.component');
var notFound_component_1 = require('./utility/notFound/notFound.component');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                app_router_1.AppRoutingModule,
                forms_1.FormsModule,
                http_1.HttpModule],
            declarations: [
                notFound_component_1.NotFoundComponent,
                register_component_1.RegisterComponent,
                login_component_1.LoginComponent,
                footer_component_1.FooterComponent,
                carousel_component_1.Carousel,
                slide_component_1.Slide,
                header_component_1.HeaderComponent,
                index_component_1.IndexComponent,
                app_component_1.AppComponent],
            bootstrap: [app_component_1.AppComponent],
            providers: [http_service_1.MyHttpService]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map