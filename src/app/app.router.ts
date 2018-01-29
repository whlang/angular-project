import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HeaderComponent} from './utility/header/header.component'
import {FooterComponent} from './utility/footer/footer.component'
import {IndexComponent} from './index/index.component'
import {LoginComponent} from './login/login.component'
import {RegisterComponent} from './register/register.component'
import {NotFoundComponent} from './utility/notFound/notFound.component'

  
const routes: Routes = [
  { path: '', component:IndexComponent },
//  { path: 'header', component: HeaderComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'index', component: IndexComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

//export const routedComponents = [NameComponent];