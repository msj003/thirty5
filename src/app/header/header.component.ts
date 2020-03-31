import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
//import { AuthorizationService } from "../shared/authorization.service";
=======
import { AuthorizationService } from "../shared/authorization.service";
>>>>>>> 50ebeeec07dced5865746e1cd3223df55adbbd06
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

<<<<<<< HEAD
  // constructor(private _auth: AuthorizationService,
  //   private _router: Router) { }


  constructor(
              private _router: Router) { }

                
  doLogout(){    
    // this._auth.logOut();
    // this._router.navigateByUrl('/login');
=======
  constructor(private _auth: AuthorizationService,
              private _router: Router) { }

  doLogout(){    
    this._auth.logOut();
    this._router.navigateByUrl('/login');
>>>>>>> 50ebeeec07dced5865746e1cd3223df55adbbd06
  }
}