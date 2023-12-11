import * as THREE from 'three';

import login from '../../routes/login/+page.svelte';

import { CSS3DRenderer, CSS3DObject } from 'three/addons/renderers/CSS3DRenderer.js';
import { OrbitControls } from 'three/examples/jsm/Addons.js';

let camera: THREE.PerspectiveCamera, scene: THREE.Scene, renderer: CSS3DRenderer;
let controls: OrbitControls;

function Element(id: string, x: number, y: number, z: number, ry: number) {
	const div = document.createElement('div');
	div.style.width = '600px';
	div.style.height = '700px';
	div.style.backgroundColor = 'whitesmoke';

	const iframe = document.createElement('iframe');

	iframe.style.width = '600px';
	iframe.style.height = '700px';
	iframe.style.border = '0px';
	//a b c d 
	// if문 else if문 같은 경우에
	// swtich case
	if (id == 'a') {
		iframe.src = ['http://localhost:5173/cube/main'].join('');
	} else if (id == 'b') {
		iframe.src = ['http://localhost:5173/cube/main'].join('');
	} else if (id == 'c') {
		iframe.src = ['http://localhost:5173/cube/explain3'].join('');
	} else if (id == 'd') {
		iframe.src = ['https://www.youtube.com/embed/', id, '?rel=0'].join('');
	} else {
		iframe.src = ['https://www.youtube.com/embed/', id, '?rel=0'].join('');
	}
	div.appendChild(iframe);
	const object = new CSS3DObject(div);
	object.position.set(x, y, z);
	object.rotation.y = ry;

	return object;
}

function init() {
	const container = document.getElementById('container');

	camera = new THREE.PerspectiveCamera(100, 100, 100);
	camera.position.set(700, 0, 0);

	scene = new THREE.Scene();

	renderer = new CSS3DRenderer();
	renderer.setSize(window.innerWidth, window.innerHeight-69);
	container?.appendChild(renderer.domElement);

	const group = new THREE.Group();
	group.add(Element('b', 0, 0, 300, 0));
	group.add(Element('a', 300, 0, 0, Math.PI / 2));
	group.add(Element('c', 0, 0, -300, Math.PI));
	group.add(Element('d', -300, 0, 0, -Math.PI / 2));
	scene.add(group);

	controls = new OrbitControls(camera, renderer.domElement);
	controls.enableZoom = false;
	controls.enablePan = false;
	controls.rotateSpeed = 0.5;
	controls.enableDamping = true;
	controls.maxPolarAngle = Math.PI / 2;
	controls.minPolarAngle = Math.PI / 2;

	window.addEventListener('resize', onWindowResize);

	// Block iframe events when dragging camera

	const blocker = document.getElementById('blocker') as HTMLElement;
	blocker.style.display = 'none';

	controls.addEventListener('start', function () {
		blocker.style.display = '';
	});
	controls.addEventListener('end', function () {
		blocker.style.display = 'none';
	});
}

function onWindowResize() {
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();
	renderer.setSize(window.innerWidth, window.innerHeight);
}

function animate() {
	requestAnimationFrame(animate);
	controls.update();
	renderer.render(scene, camera);
}

export const youtube = () => {
	init();
	animate();
};
