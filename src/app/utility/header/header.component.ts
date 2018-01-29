import { Component, OnInit } from '@angular/core';
import {MyHttpService} from '../service/http.service'

@Component({
    selector: 'storeHeader',
    templateUrl:'./header.component.html'
})

export class HeaderComponent implements OnInit {
    isUserLogin: boolean = false;
    userName:string = "";
    constructor(private myHttpService:MyHttpService) { }

    ngOnInit() {
        this.myHttpService
        .sendRequest('http://localhost/admin/data/user/session_data.php')
        .subscribe((result:any)=>{
            console.log(result)
            if(result.uname){
                this.isUserLogin = true;
                this.userName = result.uname;
            }
        })
     };
    logout(){
        this.myHttpService
        .sendRequest('http://localhost/admin/data/user/logout.php')
          .subscribe((result:any)=>{
              if(result.code == 200){
                  this.isUserLogin = false;
                  this.userName = "";
              }
          })   
    };
}

