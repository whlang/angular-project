import { Component, OnInit } from '@angular/core';
import { MyHttpService} from '../utility/service/http.service';

@Component({
    selector: 'storeIndex',
    templateUrl:'./index.component.html',
    styleUrls:[
        'assets/css/animate.css',
        'assets/css/item_cat.css',
        'assets/css/slide.css'
    ],
})

export class IndexComponent implements OnInit {
        
        recommendedItems:Array<any> = [];
        newArrivalItems:Array<any> = [];
        carouselItems:Array<any> = [];
        //图片之间轮播的间隔时间
        private NextPhotoInterval: number = 1000;
        //是否要禁用循环播放
        private noLoopSlides: boolean = false;
        //Photos
        private slides: Array<any> = [];

    constructor(private myHttpService:MyHttpService) { }    
    ngOnInit() {
        this.myHttpService
        .sendRequest('http://localhost/admin/data/product/index.php')
        .subscribe((result:any)=>{
            console.log(result);
             //分别保存轮播图数据、推荐商品数据、新到商品数据
                this.recommendedItems = result.recommendedItems;
                this.newArrivalItems = result.newArrivalItems;
                this.carouselItems = result.carouselItems;

                console.log(this.newArrivalItems)
                
                 for(var i=0;i<this.carouselItems.length;i++){
                     var imgUrl = this.carouselItems[i].img;
                     this.slides.push({image:imgUrl});
                 }
//             console.log(this.slides);
        })
     }
}