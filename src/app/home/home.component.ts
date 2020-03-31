import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
// import { AuthorizationService } from "../shared/authorization.service";
=======
import { AuthorizationService } from "../shared/authorization.service";
>>>>>>> 50ebeeec07dced5865746e1cd3223df55adbbd06
import { Http, Headers } from "@angular/http";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  bAuthenticated = false;

<<<<<<< HEAD
  //constructor(private http: Http, private auth: AuthorizationService) { }

  constructor(private http: Http) { }

  ngOnInit() {
  //   var authenticatedUser = this.auth.getAuthenticatedUser();
  //   if (authenticatedUser == null) {
  //     return;
  //   }
  //   this.bAuthenticated = true;
    
   }

}
=======
  constructor(private http: Http, private auth: AuthorizationService) { }

  ngOnInit() {
    var authenticatedUser = this.auth.getAuthenticatedUser();
    if (authenticatedUser == null) {
      return;
    }
    this.bAuthenticated = true;
    
  }

}
>>>>>>> 50ebeeec07dced5865746e1cd3223df55adbbd06
