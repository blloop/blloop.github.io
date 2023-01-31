let rotations = [2, 1, 2, 1, 2, 0, 3, 0, 3, 0];

for (let i = 0; i < rotations.length; i++) {
    let out = `rotate(${90 * rotations[i]}deg)`;
    document.getElementById(i.toString()).style.transform = out;
}

spin = (val) => {
    let pipe = document.getElementById(val.toString());
    rotations[val] = (rotations[val] + 1) % 16;
    pipe.style.transform = `rotate(${90 * rotations[val]}deg)`;
}