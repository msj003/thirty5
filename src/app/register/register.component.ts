import { Component } from '@angular/core';
// import {AuthorizationService} from "../shared/authorization.service";
import { Router } from '@angular/router';

// https://github.com/aws/amazon-cognito-identity-js
// https://docs.aws.amazon.com/cognito/latest/developerguide/using-amazon-cognito-user-identity-pools-javascript-examples.html
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent { 
  confirmCode: boolean = false;
  codeWasConfirmed: boolean = false;
  error: string = "";
  
  // constructor(private auth: AuthorizationService,
  //   private _router: Router) { }

  constructor(private _router: Router) { }

  register() {
    // this.auth.register(email, password).subscribe(
    //   (data) => {        
    //     this.confirmCode = true;
    //   },
    //   (err) => {
    //     console.log(err);
    //     this.error = "Registration Error has occurred";
    //   }
    // );
  }

  validateAuthCode() {
    
    
    // this.auth.confirmAuthCode(code).subscribe(
    //   (data) => {
    //     //this._router.navigateByUrl('/');
    //     this.codeWasConfirmed = true;
    //     this.confirmCode = false;
    //   },
    //   (err) => {
    //     console.log(err);
    //     this.error = "Confirm Authorization Error has occurred";
    //   });
  }
}
