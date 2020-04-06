import { Component, OnInit, Input } from '@angular/core';
import { ViewChild, ElementRef} from '@angular/core';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

import { Mesh } from 'three';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader';


const OrbitControls = require('three-orbit-controls')(THREE);
@Component({
  selector: 'app-main-right',
  templateUrl: './main-right.component.html',
  styleUrls: ['./main-right.component.css']
})


export class MainRightComponent implements OnInit {

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
        this.updateModel(this.letter);
    }

    ngAfterViewInit() {
        this.renderer.setSize(window.innerWidth/2.1, window.innerHeight/2.1);

        this.rendererContainer.nativeElement.appendChild(this.renderer.domElement);
        this.animate();
    }

    createScene(){
        this.scene = new THREE.Scene();
        this.scene.background = new THREE.Color( 0xffddd0 );

        var ambiLight = new THREE.AmbientLight(0xffffff,1);
        this.scene.add(ambiLight);

        this.light = new THREE.PointLight( 0xffffff, 1, 1000000 );
        this.light.position.set( -500, -500, 500 );
        this.scene.add( this.light );


        //this.createText("Render Model Here");
        //this.createModel("A");

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
        console.log('Right : ' + this.letter);
      }

      // update the model on letter change.
      updateModel( model_letter: string){
        // setTimeout(this.updateText, 1000);
        for ( var i = this.scene.children.length - 1; i >= 0; i--) {
            var obj = this.scene.children[i];
            this.scene.remove(obj);
         console.log(obj);
        }
        // var objName = "text";
        // var selectedObject = this.scene.getObjectByName(objName);
        // this.scene.remove( selectedObject );

        // this.createEmptySceneWithBox();
        this.createScene();
        this.createModel(this.letter);

      }

      createModel( textIn: string ) {
        console.log( 'Loading Model ... '  + textIn);
        let loader = new GLTFLoader();
        loader.load( this.getModelLocation(textIn) , ( gltf ) => {
        console.log( gltf );
        this.scene.add(gltf.scene);
        //gltf.scene.scale.multiplyScalar(4);
        });

        // console.log('Right : ' + this.letter);
      }

      getModelLocation( letter: string ) {
        let modelLocationHash = {};
        modelLocationHash['A'] = '../../assets/models/apple/scene.gltf';
        modelLocationHash['B'] = '../../assets/models/chocobo/scene.gltf';

        console.log( modelLocationHash['letter']);
        return modelLocationHash[letter];
      }

      clearScene() {

      }
}
