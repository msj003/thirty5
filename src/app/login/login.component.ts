import { Component, OnInit } from '@angular/core';
// import {AuthorizationService} from "../shared/authorization.service";

import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  emailVerificationMessage: boolean = false;

  
//   constructor(private auth: AuthorizationService,
//     private _router: Router) {

// }

  constructor(
              private _router: Router) {

  }

  onSubmit() {
    
// this.auth.signIn(email, password).subscribe((data) => {
    //   this._router.navigateByUrl('/');
    // }, (err)=> {
    //   this.emailVerificationMessage = true;
    // });
  }
}
