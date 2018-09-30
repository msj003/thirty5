import { Component, OnInit } from '@angular/core';
import { ViewChild, ElementRef} from '@angular/core';
import * as THREE from 'three';
import { Mesh } from 'three';


const OrbitControls = require('three-orbit-controls')(THREE);

@Component({
  selector: 'app-scene',
  templateUrl: './scene.component.html',
  styleUrls: ['./scene.component.css']
})
export class SceneComponent implements OnInit {

  @ViewChild('rendererContainer') rendererContainer: ElementRef;


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
        // this.createScene();
        this.createEmptySceneWithBox();
    }

    ngOnInit(){

    }

    ngAfterViewInit() {
        this.renderer.setSize(window.innerWidth, window.innerHeight);

        this.rendererContainer.nativeElement.appendChild(this.renderer.domElement);
        this.animate();
    }
   
    createScene(){
        this.scene = new THREE.Scene();
        this.scene.background = new THREE.Color( 0xffffff );

        var ambiLight = new THREE.AmbientLight(0xffffff,1);
        this.scene.add(ambiLight);

        this.light = new THREE.PointLight( 0xffffff, 1, 1000000 );
        this.light.position.set( -500, -500, 500 );
        this.scene.add( this.light );

        // var light2 =    new THREE.PointLight( 0x00ff00, 1, 1000000 );
        // light2.position.set(0,500,0);
        // this.scene.add(light2);

        // var light3 =    new THREE.PointLight( 0x0000ff, 1, 1000000 );
        // light3.position.set(500,0,0);
        // this.scene.add(light3);

        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 10000);
        this.camera.position.z = 2000;

        // load a texture, set wrap mode to repeat
    //    this.createBox();

        this.controls = new OrbitControls(this.camera,this.renderer.domElement);
        this.controls.update();

        // this.createText("32 C       55%");

        
    }

    animate() {
        window.requestAnimationFrame(() => this.animate());     
        
        // this.mesh.rotation.x += 0.02;
        // this.mesh.rotation.y += 0.005; 

        this.controls.update();

        this.renderer.render(this.scene, this.camera);
        this.addTexture();
        // this.updateText();
    }

    cerateTextTexture(){
        var bitmap = document.createElement('canvas');
        var g = bitmap.getContext('2d');
        bitmap.width = 50;
        bitmap.height = 50;
        g.font = 'Bold 20px Arial';
        g.fillStyle = 'white';
        g.fillText(this.name, 0, 20);
        g.strokeStyle = 'black';
        g.strokeText(this.name, 0, 20);
        // canvas contents will be used for a texture
        var texture = new THREE.Texture(bitmap) 
        texture.needsUpdate = true;
        return texture;
    }


    createBox(){
        var texture = new THREE.TextureLoader().load( "../../assets/textures/tex.jpg" );
        // texture.wrapS = THREE.RepeatWrapping;
        // texture.wrapT = THREE.RepeatWrapping;
        // texture.repeat.set( 4, 4 );
        const geometry = this.roundEdgedBox(30,30,20,1,1,20,20,6);

        for ( var i = 0, l = geometry.vertices.length; i < l; i++ ) {

            var vertex = geometry.vertices[ i ];
            vertex.normalize().multiplyScalar( 550 );
        
        }
        
        this.material = new THREE.MeshStandardMaterial({
            color : 0xffffff,
            map : texture,
            //roughness : 0,
            // metalness : 0.7,
            normalMap : this.cerateTextTexture()
        });
        this.mesh = new THREE.Mesh(geometry, this.material);   
        this.scene.add(this.mesh);
        
    }


    addTexture(){
        this.material.normalMap = this.cerateTextTexture();
    }

    roundEdgedBox(width, height, depth, radius, widthSegments, heightSegments, depthSegments, smoothness) {

        width = width || 1;
        height = height || 1;
        depth = depth || 1;
        radius = radius || (Math.min(Math.min(width, height), depth) * .25);
        widthSegments = Math.floor(widthSegments) || 1;
        heightSegments = Math.floor(heightSegments) || 1;
        depthSegments = Math.floor(depthSegments) || 1;
        smoothness = Math.max(3, Math.floor(smoothness) || 3);
    
        let halfWidth = width * .5 - radius;
        let halfHeight = height * .5 - radius;
        let halfDepth = depth * .5 - radius;
    
        var geometry = new THREE.Geometry();
    
        // corners - 4 eighths of a sphere
        var corner1 = new THREE.SphereGeometry(radius, smoothness, smoothness, 0, Math.PI * .5, 0, Math.PI * .5);
        corner1.translate(-halfWidth, halfHeight, halfDepth);
        var corner2 = new THREE.SphereGeometry(radius, smoothness, smoothness, Math.PI * .5, Math.PI * .5, 0, Math.PI * .5);
        corner2.translate(halfWidth, halfHeight, halfDepth);
        var corner3 = new THREE.SphereGeometry(radius, smoothness, smoothness, 0, Math.PI * .5, Math.PI * .5, Math.PI * .5);
        corner3.translate(-halfWidth, -halfHeight, halfDepth);
        var corner4 = new THREE.SphereGeometry(radius, smoothness, smoothness, Math.PI * .5, Math.PI * .5, Math.PI * .5, Math.PI * .5);
        corner4.translate(halfWidth, -halfHeight, halfDepth);
        
        geometry.merge(corner1);
        geometry.merge(corner2);
        geometry.merge(corner3);
        geometry.merge(corner4);
    
        // edges - 2 fourths for each dimension
        // width
        var edge = new THREE.CylinderGeometry(radius, radius, width - radius * 2, smoothness, widthSegments, true, 0, Math.PI * .5);
        edge.rotateZ(Math.PI * .5);
        edge.translate(0, halfHeight, halfDepth);
        var edge2 = new THREE.CylinderGeometry(radius, radius, width - radius * 2, smoothness, widthSegments, true, Math.PI * 1.5, Math.PI * .5);
        edge2.rotateZ(Math.PI * .5);
        edge2.translate(0, -halfHeight, halfDepth);
    
        // height
        var edge3 = new THREE.CylinderGeometry(radius, radius, height - radius * 2, smoothness, heightSegments, true, 0, Math.PI * .5);
        edge3.translate(halfWidth, 0, halfDepth);
        var edge4 = new THREE.CylinderGeometry(radius, radius, height - radius * 2, smoothness, heightSegments, true, Math.PI * 1.5, Math.PI * .5);
        edge4.translate(-halfWidth, 0, halfDepth);
    
        // depth
        var edge5 = new THREE.CylinderGeometry(radius, radius, depth - radius * 2, smoothness, depthSegments, true, 0, Math.PI * .5);
        edge5.rotateX(-Math.PI * .5);
        edge5.translate(halfWidth, halfHeight, 0);
        var edge6 = new THREE.CylinderGeometry(radius, radius, depth - radius * 2, smoothness, depthSegments, true, Math.PI * .5, Math.PI * .5);
        edge6.rotateX(-Math.PI * .5);
        edge6.translate(halfWidth, -halfHeight, 0);
    
        edge.merge(edge2);
        edge.merge(edge3);
        edge.merge(edge4);
        edge.merge(edge5);
        edge.merge(edge6);
    
        // sides
        // front
        var side = new THREE.PlaneGeometry(width - radius * 2, height - radius * 2, widthSegments, heightSegments);
        side.translate(0, 0, depth * .5);
    
        // right
        var side2 = new THREE.PlaneGeometry(depth - radius * 2, height - radius * 2, depthSegments, heightSegments);
        side2.rotateY(Math.PI * .5);
        side2.translate(width * .5, 0, 0);
    
        side.merge(side2);
    
        geometry.merge(edge);
        geometry.merge(side);
    
        // duplicate and flip
        var secondHalf = geometry.clone();
        secondHalf.rotateY(Math.PI);
        geometry.merge(secondHalf);
    
        // top
        var top = new THREE.PlaneGeometry(width - radius * 2, depth - radius * 2, widthSegments, depthSegments);
        top.rotateX(-Math.PI * .5);
        top.translate(0, height * .5, 0);
    
        // bottom
        var bottom = new THREE.PlaneGeometry(width - radius * 2, depth - radius * 2, widthSegments, depthSegments);
        bottom.rotateX(Math.PI * .5);
        bottom.translate(0, -height * .5, 0);
    
        geometry.merge(top);
        geometry.merge(bottom);
    
        geometry.mergeVertices();
    
        return geometry;
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
            text.position.set(-300,0,325);
            text.name="text";
    
            this.scene.add(text);

        }.bind(this) );

      }

      createEmptySceneWithBox(){
          this.createScene();
          this.createBox();
      }

      updateText(){
        // setTimeout(this.updateText, 1000);
          this.countClicks++;
        for( var i = this.scene.children.length - 1; i >= 0; i--) { 
            var obj = this.scene.children[i];
         //   this.scene.remove(obj);
         console.log(obj);
        }
        var objName = "text";
        var selectedObject = this.scene.getObjectByName(objName);
        this.scene.remove( selectedObject );

        // this.createEmptySceneWithBox();
        this.createText("Updated : "+ this.countClicks);

      }
    
    
}
