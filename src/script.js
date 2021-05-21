import './style.css'

import * as THREE from 'three';

const scene = {
  children: []
};

const camera = new THREE.PerspectiveCamera();
const renderer = new Renderer();

const vertex = {
  position: { x: 0, y: 0, z: 0 },
  normal: { x: 0, y: 0, z: 0 },
  uv: { u: 0, v: 0 }
};

const mesh = {
  geometry: {
    vertices: [
      { position: { x: -100, y: -50, z: 0} },
      { position: { x:  100, y:  50, z: 0} },
      { position: { x: -100, y:  50, z: 0} },
      { position: { x:  100, y: -50, z: 0} }
    ],
    indices: [
      0, 2, 1,
      0, 1, 3 ]
    },
  material: {
    color: '#ff0000',
    vertexShader: basicVertexShader,
    fragmentShader: basicFragmentShader 
  },
  position: new THREE.Vector3(0, 0, 0),
  rotation: new THREE.Euler(0, 0, 0),
  scale: new THREE.Vector3(1, 1, 1)
};

scene.children.push(mesh)

renderer.render(scene, camera)