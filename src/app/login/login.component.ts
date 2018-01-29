import { Component, OnInit } from '@angular/core';
import {MyHttpService} from '../utility/service/http.service';
import {Router} from '@angular/router';

@Component({
    selector: 'storeLogin',
    templateUrl:'./login.component.html',
    styleUrls:['assets/css/login.css']
})

export class LoginComponent implements OnInit {
    userName:string = "";
    userPwd:string = "";
    constructor(
        private myHttpService:MyHttpService,
        private router:Router
    ) { }


    ngOnInit() {}
    login(){
            this.myHttpService
            .sendRequest('http://localhost/admin/data/user/login.php?uname='+this.userName+'&upwd='+this.userPwd)
            .subscribe((result)=>{
                console.log(result)
                if(result.code==200){
                   this.router.navigateByUrl('') 
                }else{
                    alert("用户名或密码错误")
                }
            })
      }
 }
