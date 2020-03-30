import { Component, OnInit } from '@angular/core';

import { ViewChild, ElementRef} from '@angular/core';


@Component({
  selector: 'app-main-scene',
  templateUrl: './main-scene.component.html',
  styleUrls: ['./main-scene.component.css']
})

export class MainSceneComponent implements OnInit {

  letter : string;

   constructor() {
       
    }

    ngOnInit(){

    }
  
    tdClick(clickedletter : string){
        console.log("click " + clickedletter) ;
        this.letter = clickedletter;
    }
}
