import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

<<<<<<< HEAD
//import { AmplifyAngularModule, AmplifyService } from 'aws-amplify-angular';
=======
import { AmplifyAngularModule, AmplifyService } from 'aws-amplify-angular';
>>>>>>> 50ebeeec07dced5865746e1cd3223df55adbbd06

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import {HttpModule} from "@angular/http";
import { FormsModule } from '../../node_modules/@angular/forms';
import { AuthorizationService } from './shared/authorization.service';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { SceneComponent } from './scene/scene.component';
<<<<<<< HEAD
import { MainSceneComponent } from './inner-space/main-scene/main-scene.component';
import { MainLeftComponent } from './inner-space/main-scene/main-left/main-left.component';
import { MainRightComponent } from './inner-space/main-scene/main-right/main-right.component';
=======
>>>>>>> 50ebeeec07dced5865746e1cd3223df55adbbd06


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    HomeComponent,
    RegisterComponent,
<<<<<<< HEAD
    SceneComponent,
    MainSceneComponent,
    MainLeftComponent,
    MainRightComponent
  ],
  imports: [
    BrowserModule, 
    // AmplifyAngularModule,
=======
    SceneComponent
  ],
  imports: [
    BrowserModule, AmplifyAngularModule,
>>>>>>> 50ebeeec07dced5865746e1cd3223df55adbbd06
    AppRoutingModule,
    HttpModule,
    FormsModule
  ],
  providers: [
<<<<<<< HEAD
    // AmplifyService,
    // AuthorizationService
=======
    AmplifyService,
    AuthorizationService
>>>>>>> 50ebeeec07dced5865746e1cd3223df55adbbd06
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
