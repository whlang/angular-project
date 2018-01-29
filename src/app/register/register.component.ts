import { Component, OnInit } from '@angular/core';
import { MyHttpService} from '../utility/service/http.service'
import {Router} from '@angular/router';

@Component({   
    selector: 'storeRegister',
    templateUrl:'./register.component.html',
    styleUrls:['assets/css/login.css','assets/css/animate.css']
})

export class RegisterComponent implements OnInit {
    myImage:boolean = false;
    userName:string="";
    userPwd:string="";
    confPwd:string="";
    email:string="";
    phone:number;
    constructor(
        private myHttpSerive:MyHttpService,
        private myRouter:Router,
    ) { };
    
    ngOnInit() {   };
     submit(){
         this.myHttpSerive
          .sendRequest('http://localhost/admin/data/user/register.php?'
            +'uname='+this.userName+'&upwd='+this.userPwd+'&cpwd='
            +this.confPwd+'&email='+this.email+'&phone='+this.phone)
          .subscribe((result)=>{
                  console.log(result);
                  if(result.code == 200){
                      this.myRouter.navigateByUrl('/login');
                  }else{
                      alert(result.msg);
                  }
          })
     };   
    
}

