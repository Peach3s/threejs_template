var PROJECT = PROJECT || {};

PROJECT.Setup = function(container, opts){
	opts = opts || {};

	var camera, scene, renderer, w, h;
	var mesh, atmosphere, point;

	var overRenderer;

	var curZoomSpeed = 0;
	var zoomSpeed = 50;

	var mouse = { x: 0, y: 0 }, mouseOnDown = { x: 0, y: 0 };
	var rotation = { x: 0, y: 0 },
		target = { x: Math.PI*3/2, y: Math.PI / 6.0 },
		targetOnDown = { x: 0, y: 0 };

	var distance = 5, distanceTarget = 5;
	var padding = 40;
	var PI_HALF = Math.PI / 2;

	function init(){

	    /*
	    *	World Object
	    */

		var geometry = new THREE.SphereGeometry(0.5, 32, 32);
		var material = new THREE.MeshPhongMaterial();
		material.map = THREE.ImageUtils.loadTexture('images/243.jpg');
		var mesh = new THREE.Mesh(geometry, material);
		mesh.rotation.y = Math.PI;

		/*
		*	Light Objects Here
		*/

		var ambientLight = new THREE.AmbientLight(0xFFFFFF);

		/*
		*	Scene Stuff Here
		*/
		scene = new THREE.Scene();
		scene.add(mesh);
		scene.add(ambientLight);

		/*
		*	Camera Stuff Here
		*/
		camera = new THREE.PerspectiveCamera( 30, window.innerWidth / window.innerHeight, 0.1, 1000 );
		camera.position.z = distance;

		/*
		*	Renderer Stuff Here
		*/
		renderer = new THREE.WebGLRenderer();

		renderer.setSize( window.innerWidth, window.innerHeight );

		/*
		*	Document Stuff Here
		*/
		container.appendChild( renderer.domElement );

		container.addEventListener('mousedown', onMouseDown, false);

	    container.addEventListener('mousewheel', onMouseWheel, false);

	    document.addEventListener('keydown', onDocumentKeyDown, false);

	    window.addEventListener('resize', onWindowResize, false);

	}

	/*
	*	Called on window resize
	*/
	function onWindowResize(event){

	}

	/*
	*	Called on keyboard input
	*/
	function onDocumentKeyDown(event){

	}

	/*
	*	Called on mouse click
	*/
	function onMouseDown(event) {
	    event.preventDefault();
	}

	/*
	*	Called on mouse movement
	*/
	function onMouseMove(event) {

	}

	/*
	*	Called on mouse click release
	*/
	function onMouseUp(event) {

	}

	/*
	*	Called when mouse exits an area
	*/
	function onMouseOut(event) {

	}

	/*
	*	Called on mouse wheel movement
	*/
	function onMouseWheel(event) {
		event.preventDefault();
	}

	/*
	*	Animation call function. Do all animation calls here.
	*/
	function animate(){
		requestAnimationFrame(animate);
		render();
	}

	/*
	*	This is the render function. This is where you should do camera updates and any updates to the scene.
	*	
	*	It also contains the render function which draws to the screen.
	*/
	function render(){
		renderer.render(scene, camera);
	}

	init();
	this.animate = animate;
	this.renderer = renderer;
	this.scene = scene;

	return this;
}