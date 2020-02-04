const Init = () => {
	//위에서 언급한 것들이 순서대로 진행됩니다.
	const WIDTH = window.innerWidth,
		HEIGHT = window.innerHeight;
	/*--------------------------------------------*/
	//씬 추가
	const scene = new THREE.Scene();
	scene.background = new THREE.Color(0x81ecec);

	/*--------------------------------------------*/
	//카메라 추가
	const camera = new THREE.PerspectiveCamera(75, WIDTH / HEIGHT, 0.1, 1000);
	scene.add(camera);
	/*--------------------------------------------*/
	//메쉬 추가


	const geo = new THREE.BoxGeometry(10, 10, 10);
	const material = new THREE.MeshLambertMaterial({
		color: 0x55efc4
	});
	const mesh = new THREE.Mesh(geo, material);
		mesh.castShadow = true;

	scene.add(mesh);

	/*--------------------------------------------*/
	//빛 추가
	const light = new THREE.PointLight("rgb(200,200,255)");
	light.position.set(50, 50, 50);
	light.castShadow = true;
	light.shadow.mapSize.width = 5120;
	light.shadow.mapSize.height = 5120;
	scene.add(light);

	/*--------------------------------------------*/
	//렌더러 설정 코드.
	const renderer = new THREE.WebGLRenderer({
		antialias: true
	});
	renderer.setSize(WIDTH, HEIGHT);
		renderer.shadowMap.enabled = true;

	//scene의 background를 설정하지 않았다면 밑의 코드로 배경색을 정할수도 있습니다.
	// renderer.setClearColor(0x81ecec);
	document.body.appendChild(renderer.domElement);

	/*--------------------------------------------*/
	//중간에 코드를 추가해주세요.
	camera.position.z = 30;
	mesh.rotation.x = (Math.PI * 20) / 180;
	mesh.rotation.y = (Math.PI * 20) / 180;

	/*--------------------------------------------*/
	//실제 렌더링 하는 코드입니다.
	renderer.render(scene, camera);

	/*--------------------------------------------*/
	//해당 코드는 상자를 회전시킵니다.
	const rotateObj = () => {
		const speed = Math.floor(Math.random() * 3);
		mesh.rotation.y += (Math.PI * speed) / 180;
		renderer.render(scene, camera);
	requestAnimationFrame(rotateObj);
	};
	requestAnimationFrame(rotateObj);

	/*--------------------------------------------*/
	//웹브라우저 사이즈에 반응하는 이벤트 핸들러.
	const handleResize = () => {
		camera.aspect = window.innerWidth / window.innerHeight;
		camera.updateProjectionMatrix();
		renderer.setSize(window.innerWidth, window.innerHeight);
		renderer.render(scene, camera);
	};

	window.addEventListener("resize", handleResize);
};
//페이지가 로드되면 Init 함수가 실행됩니다.
window.addEventListener("load", Init);
