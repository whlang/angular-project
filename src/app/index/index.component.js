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
var IndexComponent = (function () {
    function IndexComponent(myHttpService) {
        this.myHttpService = myHttpService;
        this.recommendedItems = [];
        this.newArrivalItems = [];
        this.carouselItems = [];
        //图片之间轮播的间隔时间
        this.NextPhotoInterval = 1000;
        //是否要禁用循环播放
        this.noLoopSlides = false;
        //Photos
        this.slides = [];
    }
    IndexComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.myHttpService
            .sendRequest('http://localhost/admin/data/product/index.php')
            .subscribe(function (result) {
            console.log(result);
            //分别保存轮播图数据、推荐商品数据、新到商品数据
            _this.recommendedItems = result.recommendedItems;
            _this.newArrivalItems = result.newArrivalItems;
            _this.carouselItems = result.carouselItems;
            console.log(_this.newArrivalItems);
            for (var i = 0; i < _this.carouselItems.length; i++) {
                var imgUrl = _this.carouselItems[i].img;
                _this.slides.push({ image: imgUrl });
            }
            //             console.log(this.slides);
        });
    };
    IndexComponent = __decorate([
        core_1.Component({
            selector: 'storeIndex',
            templateUrl: './index.component.html',
            styleUrls: [
                'assets/css/animate.css',
                'assets/css/item_cat.css',
                'assets/css/slide.css'
            ],
        }), 
        __metadata('design:paramtypes', [http_service_1.MyHttpService])
    ], IndexComponent);
    return IndexComponent;
}());
exports.IndexComponent = IndexComponent;
//# sourceMappingURL=index.component.js.map