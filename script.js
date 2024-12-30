// js/script.js

let scene, camera, renderer;

function init() {
    // Create scene
    scene = new THREE.Scene();

    // Set up camera
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(0, 1, 5);

    // Create renderer
    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);

    // Append renderer to the DOM
    document.getElementById('game-container').appendChild(renderer.domElement);

    // Create a simple cube (character)
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);

    scene.add(cube);

    animate();
}

function animate() {
    requestAnimationFrame(animate);

    // Simple rotation for animation
    scene.children[1].rotation.x += 0.01;
    scene.children[1].rotation.y += 0.01;

    renderer.render(scene, camera);
}

// Initialize the game
init();
