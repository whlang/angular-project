import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AppRoutingModule} from './app.router'
import {FormsModule} from '@angular/forms'
import {HttpModule} from '@angular/http'

import { AppComponent }  from './app.component';
import {HeaderComponent} from './utility/header/header.component'
import {FooterComponent} from './utility/footer/footer.component'
import {IndexComponent} from './index/index.component'
import {MyHttpService} from './utility/service/http.service'
import {Carousel} from './utility/carsousel/carousel.component'
import {Slide} from './utility/carsousel/slide.component'
import {LoginComponent} from './login/login.component'
import {RegisterComponent} from './register/register.component'
import {NotFoundComponent} from './utility/notFound/notFound.component'

@NgModule({
  imports:      [ 
    BrowserModule,
    AppRoutingModule,
    FormsModule ,
    HttpModule],
  declarations: [
    NotFoundComponent,
    RegisterComponent,
    LoginComponent,
    FooterComponent,
    Carousel,
    Slide,
    HeaderComponent,
    IndexComponent, 
    AppComponent ],
  bootstrap:    [ AppComponent ],
  providers:[MyHttpService]
})
export class AppModule { }

