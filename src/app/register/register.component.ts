import { Component } from '@angular/core';
import {NgForm} from "@angular/forms";
<<<<<<< HEAD
// import {AuthorizationService} from "../shared/authorization.service";
=======
import {AuthorizationService} from "../shared/authorization.service";
>>>>>>> 50ebeeec07dced5865746e1cd3223df55adbbd06
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
  
<<<<<<< HEAD
  // constructor(private auth: AuthorizationService,
  //   private _router: Router) { }

  constructor(private _router: Router) { }
=======
  constructor(private auth: AuthorizationService,
              private _router: Router) { }
>>>>>>> 50ebeeec07dced5865746e1cd3223df55adbbd06

  register(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
<<<<<<< HEAD
    // this.auth.register(email, password).subscribe(
    //   (data) => {        
    //     this.confirmCode = true;
    //   },
    //   (err) => {
    //     console.log(err);
    //     this.error = "Registration Error has occurred";
    //   }
    // );
=======
    this.auth.register(email, password).subscribe(
      (data) => {        
        this.confirmCode = true;
      },
      (err) => {
        console.log(err);
        this.error = "Registration Error has occurred";
      }
    );
>>>>>>> 50ebeeec07dced5865746e1cd3223df55adbbd06
  }

  validateAuthCode(form: NgForm) {
    const code = form.value.code;
    
<<<<<<< HEAD
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
=======
    this.auth.confirmAuthCode(code).subscribe(
      (data) => {
        //this._router.navigateByUrl('/');
        this.codeWasConfirmed = true;
        this.confirmCode = false;
      },
      (err) => {
        console.log(err);
        this.error = "Confirm Authorization Error has occurred";
      });
  }
}
>>>>>>> 50ebeeec07dced5865746e1cd3223df55adbbd06
