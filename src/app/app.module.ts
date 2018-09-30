import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AmplifyAngularModule, AmplifyService } from 'aws-amplify-angular';

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


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    HomeComponent,
    RegisterComponent,
    SceneComponent
  ],
  imports: [
    BrowserModule, AmplifyAngularModule,
    AppRoutingModule,
    HttpModule,
    FormsModule
  ],
  providers: [
    AmplifyService,
    AuthorizationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
