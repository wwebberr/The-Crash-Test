const numCubes = 10000; // Default number of cubes
const cubes = [];
const colors = [
    'rgb(255, 0, 0)',    // Neon Red
    'rgb(0, 255, 0)',    // Neon Green
    'rgb(0, 0, 255)',    // Neon Blue
    'rgb(255, 255, 0)',  // Neon Yellow
    'rgb(255, 0, 255)',  // Neon Magenta
    'rgb(0, 255, 255)'   // Neon Cyan
];

function randomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
}

function createCube() {
    const cube = document.createElement('div');
    cube.className = 'cube';
    document.body.appendChild(cube);
    return cube;
}

function initCubes() {
    // Remove existing cubes
    cubes.forEach(cube => cube.remove());
    cubes.length = 0;

    // Create new cubes
    for (let i = 0; i < numCubes; i++) {
        const cube = createCube();
        cube.style.left = `${Math.random() * (window.innerWidth - 50)}px`;
        cube.style.top = `${Math.random() * (window.innerHeight - 50)}px`;
        cube.dx = (Math.random() - 0.5) * 4;
        cube.dy = (Math.random() - 0.5) * 4;
        cubes.push(cube);
    }
}

function animateCubes() {
    cubes.forEach(cube => {
        let rect = cube.getBoundingClientRect();
        if (rect.left + cube.dx < 0 || rect.right + cube.dx > window.innerWidth) {
            cube.dx *= -1;
        }
        if (rect.top + cube.dy < 0 || rect.bottom + cube.dy > window.innerHeight) {
            cube.dy *= -1;
        }
        cube.style.left = `${rect.left + cube.dx}px`;
        cube.style.top = `${rect.top + cube.dy}px`;
        cube.style.backgroundColor = randomColor();
    });
    document.body.style.backgroundColor = randomColor();
    requestAnimationFrame(animateCubes);
}

window.addEventListener('resize', () => {
    cubes.forEach(cube => {
        cube.style.left = `${Math.random() * (window.innerWidth - 50)}px`;
        cube.style.top = `${Math.random() * (window.innerHeight - 50)}px`;
    });
});

// Initialize and start animation
initCubes();
animateCubes();
