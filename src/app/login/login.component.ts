import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
// import {AuthorizationService} from "../shared/authorization.service";
=======
import {AuthorizationService} from "../shared/authorization.service";
>>>>>>> 50ebeeec07dced5865746e1cd3223df55adbbd06
import {NgForm} from "@angular/forms";
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  emailVerificationMessage: boolean = false;

<<<<<<< HEAD
  
//   constructor(private auth: AuthorizationService,
//     private _router: Router) {

// }

  constructor(
=======
  constructor(private auth: AuthorizationService,
>>>>>>> 50ebeeec07dced5865746e1cd3223df55adbbd06
              private _router: Router) {

  }

  onSubmit(form: NgForm) {

    const email = form.value.email;
    const password = form.value.password;
    
<<<<<<< HEAD
    // this.auth.signIn(email, password).subscribe((data) => {
    //   this._router.navigateByUrl('/');
    // }, (err)=> {
    //   this.emailVerificationMessage = true;
    // });
  }
}
=======
    this.auth.signIn(email, password).subscribe((data) => {
      this._router.navigateByUrl('/');
    }, (err)=> {
      this.emailVerificationMessage = true;
    });   
  }
}
>>>>>>> 50ebeeec07dced5865746e1cd3223df55adbbd06
