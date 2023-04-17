import * as THREE from 'three';

const scene = new THREE.Scene();

const canvas = document.getElementById("canvas");

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 2;

const renderer = new THREE.WebGLRenderer({canvas});
renderer.setSize(window.innerWidth, window.innerHeight);

const geometry = new THREE.SphereGeometry(1, 32, 32);

const material = new THREE.MeshPhongMaterial({
	map: new THREE.TextureLoader().load('https://threejs.org/examples/textures/land_ocean_ice_cloud_2048.jpg'),
});

const earthMesh = new THREE.Mesh(geometry, material);

scene.add(earthMesh);

const light = new THREE.PointLight(0xffffff, 1, 1000);
light.position.set(10, 10, 15);
scene.add(light);

function animate() {
	requestAnimationFrame(animate);

	earthMesh.rotation.y += 0.002;

	renderer.render(scene, camera);
}

animate();
	

