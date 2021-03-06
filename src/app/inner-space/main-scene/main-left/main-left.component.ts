import { Component, OnInit, Input  } from '@angular/core';

import { ViewChild, ElementRef} from '@angular/core';
import * as THREE from 'three';
import { Mesh } from 'three';

const OrbitControls = require('three-orbit-controls')(THREE);

@Component({
  selector: 'app-main-left',
  templateUrl: './main-left.component.html',
  styleUrls: ['./main-left.component.css']
})

export class MainLeftComponent implements OnInit {

  @ViewChild('rendererContainer') rendererContainer: ElementRef;


  @Input('letter') letter : string;

  renderer = new THREE.WebGLRenderer();
    scene = null;
    camera = null;
    mesh = new THREE.Mesh();
    light = null;
    name : string = "demo";
    nameMaterial = null;
    dynamicTexture = null;
    material = new THREE.MeshStandardMaterial();
    controls = null;
    countClicks =  0; 
    // textGeometry = null;

    constructor() {
        this.createScene();
        // this.createEmptySceneWithBox();
    }

    ngOnInit(){

    }
    ngOnChanges() {
    // changes.prop contains the old and the new value...
        this.updateText();
    }

    ngAfterViewInit() {
        this.renderer.setSize(window.innerWidth/2.1, window.innerHeight/2.1);

        this.rendererContainer.nativeElement.appendChild(this.renderer.domElement);
        this.animate();
    }
   
    createScene(){
        this.scene = new THREE.Scene();
        this.scene.background = new THREE.Color( 0xfffdd0 );

        var ambiLight = new THREE.AmbientLight(0xffffff,1);
        this.scene.add(ambiLight);

        this.light = new THREE.PointLight( 0xffffff, 1, 1000000 );
        this.light.position.set( -500, -500, 500 );
        this.scene.add( this.light );


        this.createText(this.letter);

        // var light2 =    new THREE.PointLight( 0x00ff00, 1, 1000000 );
        // light2.position.set(0,500,0);
        // this.scene.add(light2);

        // var light3 =    new THREE.PointLight( 0x0000ff, 1, 1000000 );
        // light3.position.set(500,0,0);
        // this.scene.add(light3);

        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 10000);
        this.camera.position.z = 200;

        // load a texture, set wrap mode to repeat
    //    this.createBox();
    
    
    //For Orbital Controls
    this.controls = new OrbitControls(this.camera,this.renderer.domElement);
        this.controls.update();

        // this.createText("32 C       55%");
    }

    animate() {
        window.requestAnimationFrame(() => this.animate());     
        
        // this.mesh.rotation.x += 0.02;
        // this.mesh.rotation.y += 0.005; 

        //FOr orbital controls
        this.controls.update();

        this.renderer.render(this.scene, this.camera);
        // this.updateText();
    }



    createText( textIn : string ){
        var loader = new THREE.FontLoader();

        loader.load( '../../assets/fonts/font.json', function ( font ) {
            var textGeometry = new THREE.TextGeometry( textIn, {
                font: font,
                size: 80,
                height: 5,
                curveSegments: 12,
                bevelEnabled: true,
                bevelThickness: 25,
                bevelSize: 8,
                bevelSegments: 5

            } );

            var  color = new THREE.Color();
            
            //color.setRGB(255, , 250);
            var  textMaterial = new THREE.MeshStandardMaterial({ color: 0x0095EF,
                roughness : 0.5,
                metalness : 0.7
            
            });
        
            var  text = new THREE.Mesh(textGeometry , textMaterial);
            text.position.set(-10,0,0);
            text.name="text";
    
            this.scene.add(text);

        }.bind(this) );

        console.log(this.letter);
      }


      updateText(){
        // setTimeout(this.updateText, 1000);
      
        for( var i = this.scene.children.length - 1; i >= 0; i--) { 
            var obj = this.scene.children[i];
         //   this.scene.remove(obj);
         console.log(obj);
        }
        var objName = "text";
        var selectedObject = this.scene.getObjectByName(objName);
        this.scene.remove( selectedObject );

        // this.createEmptySceneWithBox();
        this.createText(this.letter);

      }
      
      
    
}
