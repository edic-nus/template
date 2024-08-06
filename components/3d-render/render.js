import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { STLLoader } from "three/addons/loaders/STLLoader.js";
import Stats from "three/addons/libs/stats.module.js";

const scene = new THREE.Scene();
scene.background = new THREE.Color(0xffffff);
scene.add(new THREE.AxesHelper(5));

scene.add(new THREE.HemisphereLight(0x8d7c7c, 0x494966, 3));
addShadowedLight(1, 1, 1, 0xffffff, 3.5);

function addShadowedLight(x, y, z, color, intensity) {
	const directionalLight = new THREE.DirectionalLight(color, intensity);
	directionalLight.position.set(x, y, z);
	scene.add(directionalLight);

	directionalLight.castShadow = true;

	const d = 1;
	directionalLight.shadow.camera.left = -d;
	directionalLight.shadow.camera.right = d;
	directionalLight.shadow.camera.top = d;
	directionalLight.shadow.camera.bottom = -d;

	directionalLight.shadow.camera.near = 1;
	directionalLight.shadow.camera.far = 4;

	directionalLight.shadow.bias = -0.002;
}

let height = 400;
let width = 600;

if (width > window.innerWidth) {
	width = window.innerWidth * 0.7;
	height = (height * width) / 600;
	console.log(width, height);
}

const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
camera.position.z = 2;
camera.position.x = 2;
camera.position.y = 2;

const renderer = new THREE.WebGLRenderer();
renderer.setSize(width, height);
const element = document.getElementById("render");
element.appendChild(renderer.domElement);

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;

const loader = new STLLoader();
loader.load(
	"assets/benchy.stl",
	function (geometry) {
		const material = new THREE.MeshPhongMaterial({
			color: 0xaaaaaa,
			specular: 0x111111,
			shininess: 20,
		});
		const mesh = new THREE.Mesh(geometry, material);
		mesh.position.set(0, 0, 0);
		mesh.scale.set(0.04, 0.04, 0.04);

		scene.add(mesh);
	},
	(xhr) => {
		console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
	},
	(error) => {
		console.log(error);
	},
);

window.addEventListener("resize", onWindowResize, false);
function onWindowResize() {
	camera.aspect = window.innerWidth / (window.innerHeight / 2);
	camera.updateProjectionMatrix();
	renderer.setSize(window.innerWidth, window.innerHeight);
	render();
}

const stats = new Stats();
document.body.appendChild(stats.dom);

function animate() {
	requestAnimationFrame(animate);

	controls.update();

	render();

	stats.update();
}

function render() {
	renderer.render(scene, camera);
}

animate();
