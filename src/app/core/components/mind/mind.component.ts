import {
  Component,
  OnInit,
  AfterViewInit,
  OnDestroy,
  ViewChild,
  ElementRef,
  HostListener,
} from '@angular/core';
import * as THREE from 'three';

@Component({
  selector: 'app-mind',
  templateUrl: './mind.component.html',
  styleUrls: ['./mind.component.scss'],
})
export class MindComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('rendererContainer', { static: true })
  rendererContainer!: ElementRef;

  private scene!: THREE.Scene;
  private camera!: THREE.PerspectiveCamera;
  private renderer!: THREE.WebGLRenderer;
  private particles!: THREE.Points;
  private frameId!: number;
  private numParticles = 4000;

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.initThreeJS();
    this.animate();
  }

  ngOnDestroy(): void {
    if (this.frameId) {
      cancelAnimationFrame(this.frameId);
    }
    if (this.renderer) {
      this.renderer.dispose();
    }
  }

  private initThreeJS(): void {
    const width = this.rendererContainer.nativeElement.clientWidth;
    const height = this.rendererContainer.nativeElement.clientHeight;

    // Create the scene
    this.scene = new THREE.Scene();

    // Create and position the camera
    this.camera = new THREE.PerspectiveCamera(20, width / height, 0.5, 1000);
    this.camera.position.z = 2;

    // Create the renderer
    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.setSize(width, height);
    this.rendererContainer.nativeElement.appendChild(this.renderer.domElement);

    // Create particles
    const positions = new Float32Array(this.numParticles * 3);
    const colors = new Float32Array(this.numParticles * 3);

    for (let i = 0; i < this.numParticles; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 10; // x
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10; // y
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10; // z

      colors[i * 3] = 1.0; // R
      colors[i * 3 + 1] = 1.0; // G
      colors[i * 3 + 2] = 1.0; // B
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    // Create a circular texture for the particles
    const particleTexture = this.createParticleTexture();

    const material = new THREE.PointsMaterial({
      size: 0.05,
      map: particleTexture,
      vertexColors: true,
      transparent: true,
      alphaTest: 0.5,
      sizeAttenuation: true,
    });

    this.particles = new THREE.Points(geometry, material);
    this.scene.add(this.particles);

    // Handle window resize
    window.addEventListener('resize', this.onWindowResize.bind(this), false);
  }

  private createParticleTexture(): THREE.Texture {
    const size = 64;

    // Create canvas
    const canvas = document.createElement('canvas');
    canvas.width = size;
    canvas.height = size;

    // Draw a circle
    const context = canvas.getContext('2d')!;
    context.beginPath();
    context.arc(size / 2, size / 2, size / 2, 0, 2 * Math.PI);
    context.fillStyle = 'white';
    context.fill();

    // Create texture
    const texture = new THREE.CanvasTexture(canvas);
    return texture;
  }

  private animate = (): void => {
    this.frameId = requestAnimationFrame(this.animate);

    // Cast attributes
    const attributes = this.particles.geometry.attributes as {
      position: THREE.BufferAttribute;
      color: THREE.BufferAttribute;
    };

    const positions = attributes.position.array as Float32Array;
    const colors = attributes.color.array as Float32Array;

    for (let i = 0; i < this.numParticles; i++) {
      // Move particles to the right
      positions[i * 3] += 0.02; // x
      // Reset position if particle moves too far right
      if (positions[i * 3] > 5) {
        positions[i * 3] = -5;
      }

      // Blink particles
      const blink = Math.random();
      colors[i * 3] = blink; // R
      colors[i * 3 + 1] = blink; // G
      colors[i * 3 + 2] = blink; // B
    }

    attributes.position.needsUpdate = true;
    attributes.color.needsUpdate = true;

    // Render the scene
    this.renderer.render(this.scene, this.camera);
  };

  @HostListener('window:resize', ['$event'])
  onWindowResize(event: Event): void {
    const width = this.rendererContainer.nativeElement.clientWidth;
    const height = this.rendererContainer.nativeElement.clientHeight;

    // Update camera and renderer dimensions
    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(width, height);
  }
}
