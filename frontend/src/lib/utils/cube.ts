import * as THREE from 'three';

let cube: THREE.Mesh, renderer: THREE.WebGLRenderer, camera: THREE.PerspectiveCamera;
let scene: THREE.Scene;

function init() {
	const container2 = document.getElementById('container2');
	scene = new THREE.Scene();
	camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

	renderer = new THREE.WebGLRenderer({ alpha: true });
	renderer.setSize(window.innerWidth - 200, window.innerHeight - 200);
	container2?.appendChild(renderer.domElement);

	const geometry = new THREE.BoxGeometry(2, 2, 2);
	const material = new THREE.MeshBasicMaterial({ color: 0xfffafa });
	cube = new THREE.Mesh(geometry, material);
	scene.add(cube);

	camera.position.z = 5;
}

function animate() {
	requestAnimationFrame(animate);

	cube.rotation.x += 0.005;
	cube.rotation.y += 0.005;

	renderer.render(scene, camera);
}
export function votecube() {
	init();
	animate();
}
