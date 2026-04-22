document.addEventListener('DOMContentLoaded', () => {
    // 3D Cube Rotation
    let x = 0;
    let y = 20;
    let z = 0;
    let bool = true;
    let interval;

    const cube = document.querySelector('.cube-box'); // Or whatever the cube class is
    const heroArrows = document.getElementById('hero-arrows');

    const updateCube = () => {
        if(cube) cube.style.transform = `rotateX(${x}deg) rotateY(${y}deg) rotateZ(${z}deg)`;
    };

    if (heroArrows) {
        document.getElementById('arrow-up')?.addEventListener('click', (e) => { e.preventDefault(); x += 20; updateCube(); });
        document.getElementById('arrow-down')?.addEventListener('click', (e) => { e.preventDefault(); x -= 20; updateCube(); });
        document.getElementById('arrow-left')?.addEventListener('click', (e) => { e.preventDefault(); y -= 20; updateCube(); });
        document.getElementById('arrow-right')?.addEventListener('click', (e) => { e.preventDefault(); y += 20; updateCube(); });
        document.getElementById('arrow-up2')?.addEventListener('click', (e) => { e.preventDefault(); z -= 20; updateCube(); });
        document.getElementById('arrow-down2')?.addEventListener('click', (e) => { e.preventDefault(); z += 20; updateCube(); });
    }

    const autoRotate = () => {
        if(bool) {
            interval = setInterval(() => {
                y++;
                updateCube();
            }, 100);
        } else {
            clearInterval(interval);
        }
    };

    autoRotate();

    const stage = document.querySelector('.iphone-stage');
    if (stage) {
        stage.addEventListener('mouseover', () => { bool = false; autoRotate(); });
        stage.addEventListener('mouseout', () => { bool = true; autoRotate(); });
    }

    // Watch Customization
    const watchBands = document.querySelector('.watch-bands');
    const watchCases = document.querySelector('.watch-cases');

    let axisY = 0;
    let axisX = 0;

    document.getElementById('watch-up')?.addEventListener('click', () => {
        if(axisY > -280) { axisY -= 70; watchCases.style.marginTop = `${axisY}rem`; }
    });
    document.getElementById('watch-down')?.addEventListener('click', () => {
        if(axisY < 280) { axisY += 70; watchCases.style.marginTop = `${axisY}rem`; }
    });
    document.getElementById('watch-right')?.addEventListener('click', () => {
        if(axisX < 280) { axisX += 70; watchBands.style.marginRight = `${axisX}rem`; }
    });
    document.getElementById('watch-left')?.addEventListener('click', () => {
        if(axisX > -280) { axisX -= 70; watchBands.style.marginRight = `${axisX}rem`; }
    });
});
