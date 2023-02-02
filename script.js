let rotations = [
    1, 2, 2, 1, 1,
    1, 3, 1, 1, 1,
    0, 3, 1, 0, 0
];

let images = [
    1, 1, 0, 2, 2,
    3, 3, 2, 2, 2,
    1, 1, 2, 1, 1
]

let mode = 'rotate';

let setMode = (newMode) => {
    if (mode === newMode) {
        return;
    }
    mode = newMode;
    if (mode === 'rotate') {
        document.getElementById('change').classList.remove('selected');
        document.getElementById('rotate').classList.add('selected');
    } else {
        document.getElementById('rotate').classList.remove('selected');
        document.getElementById('change').classList.add('selected');
    }
}

let interact = (val) => {
    let pipe = document.getElementById(val.toString());
    if (mode === 'rotate') {
        rotations[val] = (rotations[val] + 1) % 32;
        pipe.style.transform = `rotate(${90 * rotations[val]}deg)`;
    } else {
        images[val] = (images[val] + 1) % 5;
        pipe.firstElementChild.src = `img/pipe${images[val]}.png`;
    }
}

let updateRotations = () => {
    for (let i = 0; i < rotations.length; i++) {
        let out = `rotate(${90 * rotations[i]}deg)`;
        document.getElementById(i.toString()).style.transform = out;
    }
}

let updateImages = () => {
    for (let i = 0; i < images.length; i++) {
        let out = `img/pipe${images[i]}.png`;
        document.getElementById(i.toString()).firstElementChild.src = out;
    }
}

let randomize = () => {
    for (let i = 0; i < rotations.length; i++) {
        rotations[i] = Math.floor(Math.random() * 4);
    }
    for (let i = 0; i < images.length; i++) {
        images[i] = Math.floor(Math.random() * 5);
    }
    updateRotations();
    updateImages();
}

updateRotations();
updateImages();