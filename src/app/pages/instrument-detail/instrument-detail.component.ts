import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';

import * as THREE from 'three';
import { GLTF, GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
@Component({
  selector: 'app-instrument-detail',
  templateUrl: './instrument-detail.component.html',
  styleUrls: ['./instrument-detail.component.css'],
})
export class InstrumentDetailComponent implements OnInit, AfterViewInit {
  @ViewChild('canvas')
  private canvasRef: ElementRef | undefined;

  private get canvas(): HTMLCanvasElement {
    return this.canvasRef?.nativeElement;
  }
  private scene!: THREE.Scene;
  private loaderGLTF = new GLTFLoader();
  private model!: any;

  @Input() public rotationSpeedX: number = 0.05;

  @Input() public rotationSpeedY: number = 0.01;

  @Input() public size: number = 200;

  @Input() public texture: string = '/src/assets/yamaha_DX7/textures/';
  @Input() public textures: Array<string> = [
    'body_baseColor.png',
    'body_metallicRoughness.png',
    'buttons_baseColor.png',
    'buttons_metallicRoughness.png',
    'piano-keys_baseColor.png',
    'piano-keys_metallicRoughness.png',
    'screws_metallicRoughness.png',
  ];

  //* Stage Properties

  @Input() public cameraZ: number = 400;

  @Input() public fieldOfView: number = 1;

  @Input('nearClipping') public nearClippingPlane: number = 1;

  @Input('farClipping') public farClippingPlane: number = 1000;

  //? Helper Properties (Private Properties);

  private camera!: THREE.PerspectiveCamera;
  private renderer!: THREE.WebGLRenderer;

  private getAspectRatio() {
    return this.canvas.clientWidth / this.canvas.clientHeight;
  }
  private createScene() {
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x00000);

    //*Camera
    let aspectRatio = this.getAspectRatio();
    this.camera = new THREE.PerspectiveCamera(
      this.fieldOfView,
      aspectRatio,
      this.nearClippingPlane,
      this.farClippingPlane
    );
    this.camera.position.z = this.cameraZ;
    // Renderer
    this.renderer = new THREE.WebGLRenderer({ canvas: this.canvas });
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setSize(this.canvas.clientWidth, this.canvas.clientHeight);
  }
  /**
   * Carga de modelo gltf y texturas
   *
   */
  private loadModel() {
    this.loaderGLTF.load('assets/yamaha_DX7/scene.gltf', (gltf: GLTF) => {
      this.model = gltf.scene.children[0];
      console.log(this.model);
      // this.scene.add(this.model);

      const PATH_BASE = 'assets/yamaha_DX7/textures/';
      const textureLoader = new THREE.TextureLoader();
      this.textures.map(
        (t, index) =>
          textureLoader.load(PATH_BASE.concat(t), (txture) => {
            gltf.scene.traverse((child) => {
              if (child instanceof THREE.Mesh) {
                child.material.map = txture;
                console.log('textura añadida');
              }
            });
            // Actualizar la escena después de cargar todas las texturas
            if (index === this.textures.length - 1) {
              this.scene.add(this.model);
              console.log('Modelo añadido a la escena');
            }
          })

        // console.log(PATH_BASE.concat(t))
      );
    });
  }
  private startRenderingLoop() {
    const self = this;
    (function render() {
      requestAnimationFrame(render);
      if (self.model) {
        // Rotar el modelo cargado
        self.model.rotation.x += 0.01;
        self.model.rotation.y += 0.01;
      }
      self.renderer.render(self.scene, self.camera);
    }).bind(this)();
  }
  ngOnInit(): void {}
  ngAfterViewInit(): void {
    this.createScene();
    this.loadModel();
    this.startRenderingLoop()
  }
}
