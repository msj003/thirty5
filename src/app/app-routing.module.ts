<<<<<<< HEAD
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
// import {RestApiComponent} from "./restapi/restapi.component";
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import { SceneComponent } from './scene/scene.component';
import { MainSceneComponent } from './inner-space/main-scene/main-scene.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},  
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'scene', component: SceneComponent},
  {path: 'mainscene', component: MainSceneComponent},
//   {path: 'restapi', component: RestApiComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
=======
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
// import {RestApiComponent} from "./restapi/restapi.component";
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import { SceneComponent } from './scene/scene.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},  
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'scene', component: SceneComponent},
//   {path: 'restapi', component: RestApiComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
>>>>>>> 50ebeeec07dced5865746e1cd3223df55adbbd06
export class AppRoutingModule {}